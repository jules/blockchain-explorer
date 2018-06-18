import React, {Component} from 'react';
import web3 from '../scripts/web3';
import Layout from '../components/Layout';
import {Table, Button, Input, Container, Form, Message} from 'semantic-ui-react';
import {Link, Router} from '../routes';
import timeConverter from '../scripts/timeconverter';


class BlockNumber extends Component {
    state = {
        txcount:0,
        hash:'',
        timestamp:'',
        miner:'',
        size:0,
        transactions:[],
        search:'',
        errorMessage:''
    }
    static async getInitialProps(props) {
        const {blocknumber} = props.query;
        return {blocknumber};
    }
    async componentDidMount() {
        const blockinfo = await web3.eth.getBlock(this.props.blocknumber);
        const txcount = await web3.eth.getBlockTransactionCount(this.props.blocknumber);
        const hash = blockinfo.hash;
        const timestamp = blockinfo.timestamp;
        const miner = blockinfo.miner;
        const time = timeConverter(timestamp);
        const size = blockinfo.size;
        const transactions = blockinfo.transactions;
        this.setState({txcount:txcount, hash:hash, timestamp:time, miner:miner, size:size, transactions:transactions}); 
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
                        <p>Block number: {this.props.blocknumber}</p>
                        <p>Block hash: {this.state.hash}</p>
                        <p>Mined on: {this.state.timestamp}</p>
                        <p>Mined by: {this.state.miner}</p>
                        <p>Block size: {this.state.size}</p>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default BlockNumber;