/**
 * ./client/component/Screen.jsx
 */

import React from 'react';

export default class Screen extends React.Component{
    render(){
        return(
            <div id="screen" className="wrap valign-wrapper brown darken-4">
                <div className="section right-align">
                    <span className="white-text">
                        {this.props.number}
                    </span>
                </div>
            </div>
        );
    }
}