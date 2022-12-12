import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, suscipit?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hikng",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, suscipit?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, suscipit?"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, suscipit?"
      }
    ]
  }
  render() {
    return (
      <section className='services'>
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}