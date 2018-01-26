/**
 * ./client/component/Button.jsx
 */

import React from 'react';
import Screen from './Screen.jsx';
import {Row, Col} from 'react-materialize';

export default class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.handleOperatorClick = this.handleOperatorClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleSolveClick = this.handleSolveClick.bind(this);
        this.handleUndoClick = this.handleUndoClick.bind(this);

        this.props.solve(false);
        this.props.clear(false);
    }

    handleNumberClick(event){
        this.props.number(event.currentTarget.textContent);
    }

    handleClearClick(event){
        this.props.clear(true);
    }

    handleOperatorClick(event){
        this.props.operator(event.currentTarget.textContent);
    }

    handleSolveClick(event){
        this.props.solve(true);
    }

    handleUndoClick(event){
        this.props.undo(true);
    }

    render(){
        return(
            <Row id='calc'>
                <Col s={6} onClick={this.handleClearClick} className="white">
                    <div className="section center">
                        <span>Clear</span>
                    </div>
                </Col>
                {/* clear button */}
				
                <Col s={3} onClick={this.handleUndoClick} className="red accent-3">
                    <div className="section center">
                        <span>←</span>
                    </div>
                </Col>
                {/* ← button */}

                <Col s={3} onClick={this.handleOperatorClick} className="red accent-3">
                    <div className="section center">
                        <span>÷</span>
                    </div>
                </Col>
                {/* ÷ button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>7</span>
                    </div>
                </Col>
                {/* 7 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>8</span>
                    </div>
                </Col>
                {/* 8 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>9</span>
                    </div>
                </Col>
                {/* 9 button */}

                <Col s={3} onClick={this.handleOperatorClick} className="red accent-3">
                    <div className="section center">
                        <span>x</span>
                    </div>
                </Col>
                {/* x button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>6</span>
                    </div>
                </Col>
                {/* 6 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>5</span>
                    </div>
                </Col>
                {/* 5 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>4</span>
                    </div>
                </Col>
                {/* 4 button */}

                <Col s={3} onClick={this.handleOperatorClick} className="red accent-3">
                    <div className="section center">
                        <span>-</span>
                    </div>
                </Col>
                {/* - button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>3</span>
                    </div>
                </Col>
                {/* 3 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>2</span>
                    </div>
                </Col>
                {/* 2 button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>1</span>
                    </div>
                </Col>
                {/* 1 button */}

                <Col s={3} onClick={this.handleOperatorClick} className="red accent-3">
                    <div className="section center">
                        <span>+</span>
                    </div>
                </Col>
                {/* + button */}

                <Col s={3} onClick={this.handleNumberClick} className="white">
                    <div className="section center">
                        <span>0</span>
                    </div>
                </Col>
                {/* 0 button */}

                <Col s={9} onClick={this.handleSolveClick} className="red accent-3">
                    <div className="section center">
                        <span>=</span>
                    </div>
                </Col>
                {/* = button */}
            </Row>
        );
    }
}