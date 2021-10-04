import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.props.addCount}>
                    <i className="fa fa-plus fa-fw"></i>
                </button>
                <hr />
                <p>Counter: {this.props.counter}</p>
            </div>
        );
    }
}

export default Child;