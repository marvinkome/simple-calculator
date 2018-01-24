/**
 * ./client/component/App.jsx
 */

import React from 'react';
import {Toast} from 'react-materialize';
import Screen from './Screen.jsx';
import Buttons from './Buttons.jsx';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.handleNumber = this.handleNumber.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            number: '',
            tmp_num: '',
            maxlength: false,
            operator: ''
        }
    }

    handleNumber(val){
        if (this.state.number.length < 12){
            this.setState({
                number: this.state.number + String(val)
            });
        } else {
            this.setState({
                maxlength: true
            });
        }
    }

    handleOperator(val){
        this.setState({
            tmp_num: this.state.number,
            number: '',
            operator: val
        });
    }

    handleSolve(val){
        if ( this.state.operator == '+') {
            let res = Number(this.state.tmp_num) + Number(this.state.number)
            this.setState({
                number: res
            });
        } else if ( this.state.operator == '-') {
            let res = Number(this.state.tmp_num) - Number(this.state.number)
            this.setState({
                number: res
            });
        } else if ( this.state.operator == 'x'){
            let res = Number(this.state.tmp_num) * Number(this.state.number)
            this.setState({
                number: res
            });
        } else if ( this.state.operator == '÷'){
            let res = Number(this.state.tmp_num) / Number(this.state.number)
            this.setState({
                number: res
            });
        }
    }

    handleClear(val){
        if (val){
            this.setState({
                number: '',
                tmp_num: '',
                maxlength: false,
                operator: ''
            });
        }
    }

    render(){
        return(
            <div className="view">
                <Screen number={this.state.number}/>
                <Buttons number={this.handleNumber}
                         operator={this.handleOperator}
                         solve={this.handleSolve}
                         clear={this.handleClear}/>
            </div>
        );
    }
}