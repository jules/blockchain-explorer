import React, {Component} from 'react';
import web3 from '../scripts/web3';
import Layout from '../components/Layout';
import {Table, Button, Input, Container, Form, Message} from 'semantic-ui-react';
import {Link, Router} from '../routes';


class Address extends Component {
    state = {
        balance:'',
        search:'',
        errorMessage:'',
        value:0,
        txamount:0
    }
    static async getInitialProps(props) {
        const {address} = props.query;
        return {address};
    }
    async componentDidMount() {
        let balance = await web3.eth.getBalance(this.props.address);
        balance = web3.utils.fromWei(balance, 'ether');
        this.setState({balance:balance});
    }
    onSubmit = async (event) => {
        event.preventDefault();

        if(this.state.search.length == 66) {
            try {
                await web3.eth.getTransaction(this.state.search);
                Router.pushRoute(`/transaction/${this.state.search}`, {txhash:this.state.search}, {txhash:this.state.search});
            } catch (err) {
                const message = err.message;
                this.setState({errorMessage:message})
            }
        } else if(this.state.search.length == 42) {
            try {
                await web3.eth.getBalance(this.state.search);
                Router.pushRoute(`/address/${this.state.search}`, {address:this.state.search}, {address:this.state.search});
            } catch (err) {
                const message = err.message;
                this.setState({errorMessage:message})
            }
        } else {
            try {
                const block = parseInt(this.state.search);
                await web3.eth.getBlock(block);
                Router.pushRoute(`/blocknumber/${this.state.search}`, {bnumber:this.state.search}, {bnumber:this.state.search});
            } catch (err) {
                const message = err.message;
                this.setState({errorMessage:message})
            }
        }
    }
    render() {
        return(
            <Layout>
                <div>
                    <Container>
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <Input fluid icon="search" placeholder="Enter address, tx hash or block number..." 
                                    value={this.state.search}
                                    onChange={event=>this.setState({search:event.target.value})}
                                />
                            </Form.Field>
                            <Message error header="Oops!" content={this.state.errorMessage} />
                        </Form>
                    </Container>
                    <div>
                        <p>Address: {this.props.address}</p>
                        <p>Balance: {this.state.balance} Ether</p>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Address;