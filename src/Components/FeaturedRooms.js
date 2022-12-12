import React, { Component } from 'react'
import { RoomContext } from '../Context'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name, greetings} = this.context;
    return (    
      <div>
       {greetings}, {name} FeaturedRooms is rendering
      </div>
    )
  }
}
