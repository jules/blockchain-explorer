import React, {Component} from 'react';
import web3 from '../scripts/web3';
import BlockCard from '../components/BlockCard';
import Layout from '../components/Layout';
import {Table, Button} from 'semantic-ui-react';
import {Link} from '../routes';


class ExplorerIndex extends Component {
    state = {
        blockNumber:0,
        initialNumber:0,
        blocksFound:0,
        found:false
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
    render() {
        const {Header,Row,HeaderCell,Body} = Table;
        if(this.state.blockNumber == 0) {
            return(<div />);
        } else {
            return(
                <Layout>
                    <div>
                        <Link route="/">
                            <a>
                                <Button fluid disabled={!this.state.found}>
                                    {this.state.blocksFound} blocks found since your last refresh
                                </Button>
                            </a>
                        </Link>
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