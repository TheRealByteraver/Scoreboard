import React, { Component } from 'react';

class AddPlayerForm extends Component {
    // since we use a ref, we don't need state anymore
    // state = {
    //     value: ''
    // };

    playerInput = React.createRef();

    // ... nor do we need the onChange event handler
    // handleValueChange = (event) => {
    //     this.setState({ value: event.target.value });   
    // };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);        
        // this.setState({ value: '' }); // we don't reset the state
        event.currentTarget.reset();  // ... but we do reset the input field
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref={this.playerInput}
                    /*  New code: see the line above. 
                        Old code: see both lines below.
                    value={this.state.value}
                    onChange={this.handleValueChange} */
                    placeholder="Enter a players name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>            
        );
    }
}

export default AddPlayerForm;