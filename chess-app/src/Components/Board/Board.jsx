import React, { Component } from 'react';
import Squares from './Squares/Squares';
import './board.css';
import GuidingRows from './GuidingRows';
import GuidingColumns from './GuidingColumns';

export class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: {
                pawns: {
                    white: [[1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7]],
                    black: [[1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2]]
                },
                rooks: {
                    white: [[1,8], [8,8]],
                    black: [[1,1], [8,1]]
                },
                knights: {
                    white: [[2,8], [7,8]],
                    black: [[2,1], [7,1]]
                },
                bishops: {
                    white: [[3,8], [6,8]],
                    black: [[3,1], [6,1]]
                },
                queens: {
                    white: [[4,8]],
                    black: [[4,1]]
                },
                kings: {
                    white: [[5,8]],
                    black: [[5,1]]
                },
            }
        }
    }
    render() {
        return (
            <div className='board-wrapper'>
                <GuidingRows/>
                <Squares position={this.state.position}/>
                <GuidingColumns/>
            </div>
        )
    }
}

export default Board