import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  changeCount = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
        <div className="letter-container">
          <h1 className="heading">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <label className="caption" htmlFor="textInput">
            Enter the phrase
          </label>
          <input
            type="text"
            id="textInput"
            placeholder="Enter the phrase"
            className="text-input"
            onChange={this.changeCount}
            value={this.inputPhrase}
          />
          <div className="count-container">
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
