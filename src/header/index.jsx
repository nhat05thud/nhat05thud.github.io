import React from 'react';

class Header extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            name: "Nhat",
            age: 26
        }
    }
    handleClickEvent = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    render () {
        const name = this.props.name;
        return (
            <div id="header">
                {this.state.name} | {name} | {this.state.age}
                <button onClick={this.handleClickEvent}>click</button>
            </div>
        )
    }
}

export default Header;