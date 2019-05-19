import React, { Component } from 'react'
import './modal.css'
export default class modal extends Component {
  render() {
      const {onClick,show,finalsteps}=this.props;
    return (
      <div className="Modal" style={{display:show?'block':'none'}}>
        <div className="button"><span onClick={onClick} >close</span></div>
        <div className="winner">
        <h4>Hurray You Won!!!!</h4>
        <h4>You have taken {finalsteps} steps</h4>
        </div>

      </div>
    )
  }
}
