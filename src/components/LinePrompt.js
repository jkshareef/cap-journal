import React, {Component} from 'react';
import '../styles/LinePrompt.css';

export default class LinePrompt extends Component {
  

    render() {
        return(
            <div className="Line-Prompt">
                {this.props.value}
            </div>
            
        )
    }
}