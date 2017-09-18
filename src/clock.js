import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize'

type State = {
  time: Date,
  name: String,
  isEditing: bool,
}

class Clock extends React.Component {
  props: Props
  state: State
  textarea: HTMLTextAreaElement

  constructor() {
    super()
    this.state = {
      time: Date.now(),
      name: 'hoge',
      isEditing: false,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.updateTime()}, 1000)
  }

  componentWillUnMount() {
    clearInterval(this.interval)
  }

  updateTime() {
    this.setState({time: Date.now()})
  }

  getClockText(date) {
    if (4 < date.getHours() && date.getHours() < 12) {
      return `Good morning,`
    } else if (12 <= date.getHours() && date.getHours() < 17) {
      return `Good afternoon,`
    } else {
      return `Good evening,`
    }
  }

  toDoubleDigits(num) {
    num += ""
    if (num.length === 1) {
      num = "0" + num
    }
    return num
  }

  enterEditMode(): void {
    this.setState({isEditing: true}, () => {
      // this.textarea.focus()
    })
  }

  render() {
    const date = new Date(this.state.time)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const time = `${this.toDoubleDigits(hour)}:${this.toDoubleDigits(minute)}`
    const {
      isEditing,
    } = this.state
    const {
      name,
    } = this.props
    return (
      <div className="clock-wrapper">
        <div className="time">{time}</div>
        {isEditing === true ? (
          <div className="clock-message">
            <p>{this.getClockText(date)}</p>
            <form
              className='instruction-item__description-form'
              // onSubmit={this.saveDescription.bind(this)}
            >
              <Textarea
                ref={(textarea) => { this.textarea = textarea }}
                value={name}
                // onChange={this.handleTextareaChange.bind(this)}
              />
            </form>
          </div>
        ) : (
          <div className="clock-message">
            <p>{this.getClockText(date)}{this.props.name}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Clock
