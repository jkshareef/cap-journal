import React, {Component} from 'react';
import LinePrompt from './LinePrompt';

export default class Prompts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: ["What is the last thing you laughed out loud at?", "What is one good thing you realized today?", "How badass are you?", 
            "Tell me a joke", "Purple"]
        };
    }

    // getPrompts(i) {
    //     return (
    //         <LinePrompt value={this.state.prompts[i]} />
    //     )
    // }


    render() {
        return (
        
    <div>
        {this.state.prompts.map(item => <LinePrompt key={item} value={item} />)}
    </div>
        )
    }
}

