import React from 'react'

const SearchBar = props => {
  return (
    <>
      <i className="fa fa-instagram fa-2x" />

      <div> Instagram</div>

      <input
        placeholder="Search"
        type="text"
        value={props.filterTarget}
        onChange={props.changeHandler}
        name="filterTarget"
      />

      <i className="fa fa-compass fa-2x" />
      <i className="fa fa-heart fa-2x" />
      <i className="fa fa-user fa-2x" />
    </>
  )
}

export default SearchBar
