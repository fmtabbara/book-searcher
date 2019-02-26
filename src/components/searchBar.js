import React from 'react';
import queryAPI from '../utils/queryAPI';
import Books from '../components/Books';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      results: undefined
    };
  }

  onChange = e => {
    if (e.target.value) {
      this.setState({ input: e.target.value });
      this.handleSubmit(e);
    } else {
      this.clearSelection();
    }
  };

  clearSelection() {
    this.setState({ input: '', results: undefined });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input) {
      queryAPI(this.state.input).then(res =>
        this.setState({ results: res.data.items })
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus
            type="text"
            value={this.state.input}
            placeholder="Search for a book.."
            onChange={this.onChange}
          />
        </form>
        {this.state.results && <Books booksData={this.state.results} />}
      </div>
    );
  }
}

export default SearchBar;
