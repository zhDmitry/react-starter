import React, { Component } from 'react';
import fields from '../../fields';

class Home extends Component {
    state = {
        fields
    }

    render() {
        return (
            <div>
                {this.state.fields.map(el => {
                    return <textarea value={el.value} placeholder="add multiple lines"></textarea>
                })}
            </div>
        );
    }
}

export { Home };