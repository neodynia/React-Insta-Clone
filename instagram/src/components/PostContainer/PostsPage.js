import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

const PostsPage = props => {
  return (
    <>
      <SearchBar changeHandler={props.changeHandler} filterTarget={props.filterTarget} />
      <PostContainer data={props.data} likes={props.likes} increment={props.increment} />
    </>
  )
}

export default PostsPage
