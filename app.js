import React from 'react'
import SearchForm from './search-form'
import ResultList from './result-list'

class App extends React.Component {
  render() {
    return <div>
            <SearchForm/>
            <ResultList/>
          </div>
  }
}

export default App
