import React from 'react'

const Icons = props => {
  return (
    <>
      <i className="fa fa-heart fa-2x" onClick={props.increment} target={props.index} />
      <i className="fa fa-comment fa-2x" />
    </>
  )
}

export default Icons
