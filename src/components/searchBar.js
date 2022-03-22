import React from 'react'
import queryAPI from '../utils/queryAPI'
import { Books } from './books'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      results: undefined,
      timeout: undefined,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.input !== prevState.input) {
      this.state.input.length === 0
        ? this.clearSelection()
        : this.handleSubmit()
    }
  }

  onChange = (e) => {
    this.setState({ input: e.target.value })
  }

  clearSelection() {
    this.setState(() => ({ results: undefined }))
  }

  handleSubmit = (e) => {
    e && e.preventDefault()
    clearTimeout(this.state.timeOut)
    this.state.timeOut = setTimeout(() => {
      queryAPI(this.state.input)
        .then((res) => this.setState({ results: res.data.items }))
        .catch((e) => console.log(e))
    }, 250)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            type="text"
            value={this.state.input}
            placeholder="Search for a book..."
            onChange={this.onChange}
          />
        </form>
        {this.state.results && <Books booksData={this.state.results} />}
      </div>
    )
  }
}
