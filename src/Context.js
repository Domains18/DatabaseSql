import React, { Component } from 'react'

const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'}


export default class RoomProvider extends Component {
    state = {
        greetings : 'hello',
        name: 'Gibson'
    }
  render() {
    return(
    <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
    </RoomContext.Provider>
    )
  }
}

// Path: src\RoomContainer.js
//consumer

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}