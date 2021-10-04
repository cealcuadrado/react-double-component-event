import React from 'react';

import Child from '../main/Child';
 
class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.addToCounter = this.addToCounter.bind(this);
    }

    addToCounter() {
        var count = this.state.count;
        count++;
        this.setState({ count: count });
    }

    render() {
        return (
            <div>
                <Child counter={this.state.count} addCount={this.addToCounter}/>
            </div>
        );
    }
}

export default Layout;