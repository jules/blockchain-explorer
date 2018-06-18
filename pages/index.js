import React, {Component} from 'react';
import web3 from '../scripts/web3';
import BlockCard from '../components/BlockCard';
import Layout from '../components/Layout';
import {Table, Button, Input, Container, Form, Message} from 'semantic-ui-react';
import {Link, Router} from '../routes';


class ExplorerIndex extends Component {
    state = {
        blockNumber:0,
        initialNumber:0,
        blocksFound:0,
        found:false,
        search:'',
        errorMessage:''
    }
    constructor(props) {
        super(props);
        this.tick();
    }
    tick = async () => {
        let number = await web3.eth.getBlockNumber();
        if(number > this.state.blockNumber) {
            if(number != this.state.blockNumber) {
                if(this.state.initialNumber == 0){
                    this.setState({blockNumber:number, initialNumber:number});
                } else {
                    this.setState({blockNumber:number});
                }
                let difference = this.state.blockNumber - this.state.initialNumber;
                this.setState({blocksFound:difference});
                if (this.state.blocksFound > 0) {
                    this.setState({found:true});
                }
            }

        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
    onClick() {
        window.location.reload();
    }
    render() {
        const {Header,Row,HeaderCell,Body} = Table;
        if(this.state.blockNumber == 0) {
            return(<div />);
        } else {
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
                        <Button fluid disabled={!this.state.found} onClick={this.onClick}>
                            {this.state.blocksFound} new blocks found since you last loaded this page
                        </Button>
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                        <Table>
                            <Header>
                                <Row>
                                    <HeaderCell>Time</HeaderCell>
                                    <HeaderCell>Block #</HeaderCell>
                                    <HeaderCell>Block hash</HeaderCell>
                                    <HeaderCell>Tx count</HeaderCell>
                                    <HeaderCell>Miner</HeaderCell>
                                </Row>
                            </Header>
                            <Body>
                                <BlockCard currentBlock={this.state.initialNumber}/>
                                <BlockCard currentBlock={this.state.initialNumber-1}/>
                                <BlockCard currentBlock={this.state.initialNumber-2}/>
                                <BlockCard currentBlock={this.state.initialNumber-3}/>
                                <BlockCard currentBlock={this.state.initialNumber-4}/>
                                <BlockCard currentBlock={this.state.initialNumber-5}/>
                                <BlockCard currentBlock={this.state.initialNumber-6}/>
                                <BlockCard currentBlock={this.state.initialNumber-7}/>
                                <BlockCard currentBlock={this.state.initialNumber-8}/>
                                <BlockCard currentBlock={this.state.initialNumber-9}/>
                            </Body>
                        </Table>
                    </div>
                </Layout>
            );
        }
    }
}

export default ExplorerIndex;