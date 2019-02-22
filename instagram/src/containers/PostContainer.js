import React, { useReducer, useContext } from 'react'
import Username from '../components/Username'
import Thumbnail from '../components/Thumbnail'
import PostImage from '../components/PostImage'
import Likes from '../components/Likes'
import Comment from '../components/Comment'
import PostReducer from '../reducers/PostReducer'
import dataStore from '../dummy-data'

export const PostContainerContext = React.createContext({ dataStore })

export default function PostContainer() {
  const initialState = useContext(PostContainerContext)
  const [state, dispatch] = useReducer(PostReducer, initialState)
  return (
    <>
      <PostContainerContext.Provider value={{ state, dispatch }}>
        {state.dataStore.map(data => {
          return (
            <>
              <Username {...data} />
              <Thumbnail {...data} />
              <PostImage {...data} />
              <Likes {...data} />
              <Comment {...data} />
            </>
          )
        })}
      </PostContainerContext.Provider>
    </>
  )
}
