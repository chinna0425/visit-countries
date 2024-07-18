import {Component} from 'react'

import './index.css'

class CountriesList extends Component {
  constructor(props) {
    super(props)
    const {initialCountriesList} = props
    this.state = {items: initialCountriesList}
  }

  onChangeVisited = event => {
    const id = event.target.value
    const {items} = this.state
    const updated = items.map(eachSet => {
      if (eachSet.id === id) {
        return {
          ...eachSet,
          isVisited: true,
        }
      }
      return eachSet
    })
    this.setState({items: updated})
  }

  onChangeRemoveItem = event => {
    const id = event.target.value
    const {items} = this.state
    const updated = items.map(eachSet => {
      if (eachSet.id === id) {
        return {
          ...eachSet,
          isVisited: false,
        }
      }
      return eachSet
    })
    this.setState({items: updated})
  }

  render() {
    const {items} = this.state
    const ls = items.filter(eachSearch => eachSearch.isVisited === true)
    console.log(ls)
    return (
      <div className="main-container">
        <h1 className="countries-title">Countries</h1>
        <ul className="unorderd-list-container">
          {items.map(eachItem => {
            if (eachItem.isVisited) {
              return (
                <li className="each-list-item" key={eachItem.id}>
                  <p className="countries-name-title">{eachItem.name}</p>
                  <p className="button-style visited-button">Visited</p>
                </li>
              )
            }
            return (
              <li className="each-list-item" key={eachItem.id}>
                <p className="countries-name-title">{eachItem.name}</p>
                <button
                  type="button"
                  className="button-style"
                  value={eachItem.id}
                  onClick={this.onChangeVisited}
                >
                  Visit
                </button>
              </li>
            )
          })}
        </ul>
        <h1 className="countries-title">Visited Countries</h1>
        {ls.length > 0 ? (
          <ul className="visited-unordered-container">
            {items.map(eachVisit => {
              if (eachVisit.isVisited) {
                return (
                  <li className="visited-each-item" key={eachVisit.id}>
                    <img
                      src={eachVisit.imageUrl}
                      alt="thumbnail"
                      className="visited-countries-image"
                    />
                    <div className="name-button-container">
                      <p className="visited-countries-name-title">
                        {eachVisit.name}
                      </p>
                      <button
                        type="button"
                        className="remove-button-style"
                        value={eachVisit.id}
                        onClick={this.onChangeRemoveItem}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                )
              }
              return null
            })}
          </ul>
        ) : (
          <div className="not-visited-container">
            <p className="no-countries-title">No Countries Visited Yet</p>
          </div>
        )}
      </div>
    )
  }
}
export default CountriesList
