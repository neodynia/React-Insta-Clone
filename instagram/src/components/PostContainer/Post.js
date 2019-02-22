import React from 'react'

const Post = props => {
  return (
    <>
      <div>{props.username}</div>
      <img src={props.thumbnail} alt="thumbnail icon" />
      <div>
        <img src={props.image} alt="main post" />
      </div>
    </>
  )
}

export default Post
