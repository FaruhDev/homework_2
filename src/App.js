import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color_1:"red",
      color_2:"blue"
    }
  }

  render(){
    return (
      <div>

        <button onClick={() =>{this.setState({color_1:'blue'})}} style={{backgroundColor:this.state.color_1}} className='red'></button>
      <button onClick={() => {this.setState({color_2:"red"})}} style={{backgroundColor:this.state.color_2}}  className='blue'></button>

      </div>
    )
  }
}
export default App
