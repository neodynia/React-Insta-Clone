import React from 'react'

const Comment = ({ comment }) => {
  return (
    <>
      <p>{comment.username}</p>
      <p>{comment.text}</p>
    </>
  )
}

export default Comment
