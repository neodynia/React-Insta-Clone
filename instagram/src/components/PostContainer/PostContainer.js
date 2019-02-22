import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'
import Post from '../PostContainer/Post'
import Icons from '../Icons'

import moment from 'moment'

const PostContainer = props => {
  return (
    <>
      <div>
        {props.data.map(data => {
          return (
            <div key={data.timestamp}>
              <Post
                thumbnail={data.thumbnailUrl}
                image={data.imageUrl}
                username={data.username}
              />
              <Icons increment={props.increment} index={props.index} />
              <div> {props.likes} likes</div>

              <CommentSection comments={data.comments} />

              <div>{moment().format('MMM DD, YYYY')}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

PostContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostContainer
