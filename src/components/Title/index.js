import React from 'react'
import './Title.css'

export default class Title extends React.Component {
  render() {
    return (
      <h2 className="title">{this.props.title}</h2>
    )
  }
}