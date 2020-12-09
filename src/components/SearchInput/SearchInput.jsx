import React, {Component} from 'react';


export default class SearInput extends Component {
    state = {
        searchValue:''
    }


inputValueHolder = (event) => {
  this.setState({searchValue:event.target.value} )
}

handleSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state.searchValue);
 this.setState({searchValue:''})
}

    render(){
    return (
      <>
      <form  onSubmit ={this.handleSubmit}>
      <input    
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
       value={this.state.searchValue}
        onChange={this.inputValueHolder}/>
      <button type="submit" >
     Search
      </button>
      </form>  
      </>
    )
    }
}
