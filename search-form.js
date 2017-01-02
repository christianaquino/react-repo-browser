import React from 'react'

class SearchForm extends React.Component {
  render() {
    return <form>
            <label>
              User:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Search" />
          </form>
  }
}

export default SearchForm
