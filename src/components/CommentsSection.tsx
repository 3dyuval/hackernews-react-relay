import React from 'react'
import { LinkPageQuery$data } from '@relay/LinkPageQuery.graphql'

type Comment =  LinkPageQuery$data['link']['comments']['edges'][number]['node'] 
  & { children: Comment[] }


type SetReplying = React.Dispatch<React.SetStateAction<string>>

type CommentSectionProps = {
  comments: LinkPageQuery$data['link']['comments']
  setReplying: SetReplying
}

type CommentProps = {
  comment: Comment
  setReplying: SetReplying
}

const Comment = ({ comment, setReplying }: CommentProps) => {
  const {  body  } = comment

  return (
    <div>
      <p>{body}</p>
      <ReplyOnComment comment={comment} setReplying={setReplying} />
      {comment.children && (
        <div style={{ marginLeft: '20px' }}>
          {/* Render child comments recursively */}
          {comment.children.map((child) => (
            <div key={child.id}>
              <Comment comment={child} setReplying={setReplying} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const CommentSection = ({ comments, setReplying }: CommentSectionProps) => {
  const buildCommentTree = (commentsArray) => {
    const commentMap = {}
    const commentTree = []

    commentsArray.forEach((comment) => {
      const { id, body, parentId } = comment

      // Create a new comment object with an empty children array
      const commentNode = {
        id,
        body,
        parentId,
        children: [],
      }

      commentMap[id] = commentNode

      if (!parentId) {
        // If the comment doesn't have a parentId, add it to the commentTree
        commentTree.push(commentNode)
      } else {
        // If the comment has a parentId, add it as a child to the corresponding parent
        commentMap[parentId].children.push(commentNode)
      }
    })

    return commentTree
  }

  const sortedComments = buildCommentTree(
    comments.edges.map((edge) => edge.node)
  )

  return (
    <div>
      {/* Render sorted comments */}
      {sortedComments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} setReplying={setReplying} />
        </div>
      ))}
    </div>
  )
}

const ReplyOnComment = ({ comment, setReplying }: CommentProps) => (
  <span
    onClick={() => setReplying(comment.id)}
    className="text-xs text-zinc-500 [&>*]:mx-1"
    role="button"
  >
    reply
  </span>
)

export default CommentSection
