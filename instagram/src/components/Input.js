import React from 'react'

const Input = props => {
  return (
    <form onSubmit={props.add}>
      <input
        type="text"
        placeholder="Add a comment ..."
        name="user"
        onChange={props.change}
        value={props.value}
      />
    </form>
  )
}

export default Input
