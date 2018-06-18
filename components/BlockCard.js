import React, {Component} from 'react';
import web3 from '../scripts/web3';
import {Table} from 'semantic-ui-react';
import timeConverter from '../scripts/timeconverter';

class BlockCard extends Component {
    state = {
        txcount:0,
        hash:'',
        timestamp:'',
        miner:''
    }
    async componentDidMount() {
        while(true) {
            const blockinfo = await web3.eth.getBlock(this.props.currentBlock);
            const txcount = await web3.eth.getBlockTransactionCount(this.props.currentBlock);
            const hash = blockinfo.hash;
            const timestamp = blockinfo.timestamp;
            const miner = blockinfo.miner;
            const time = timeConverter(timestamp);
            if(typeof txcount != 'integer') {
                this.setState({txcount:txcount, hash:hash, timestamp:time, miner:miner});
                break;
            } else {
                this.setState({txcount:txcount, hash:hash, timestamp:time, miner:miner});
                continue;
            }
        }
    }
    render() {
        const {Row, Cell} = Table;
        const {currentBlock} = this.props;
        if (currentBlock < 1) {
            return(<Row>
                <Cell></Cell>
                <Cell></Cell>
            </Row>);
        } else {
            return(
                <Row>
                    <Cell>{this.state.timestamp}</Cell>
                    <Cell>{currentBlock}</Cell>
                    <Cell>{this.state.hash}</Cell>
                    <Cell>{this.state.txcount}</Cell>
                    <Cell>{this.state.miner}</Cell>
                </Row>
            );
        }
    }
}

export default BlockCard;