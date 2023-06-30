import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import {useRef} from 'react'
import { graphql } from 'relay-runtime'
import { CommentsQuery as CommentsQueryType } from '@relay/CommentsQuery.graphql'
import Link from './Link'
import { useFusionAuth } from '@fusionauth/react-sdk'

const LinkCommentsQuery = graphql`
  query CommentsQuery($id: ID!) {
    link(id: $id) {
      ...LinkFragment
      comments {
        edges {
          node {
            id
            body
          }
        }
      }
    }
  }
`

export default function Comments() {
  const { link } = useParams()

  const data = useLazyLoadQuery<CommentsQueryType>(LinkCommentsQuery, {
    id: link,
  })

  const { isAuthenticated, login } = useFusionAuth()

  const text = useRef()
  function onCommentSubmit() {
    if (!isAuthenticated) {
      login()
      return
    }


  }

  return (
    <div className="app-content">
      <div className="mx-8 py-2 space-y-2">
        <Link link={data.link} />
        <div className="flex flex-col justify-start comment-section">
          <textarea ref={text} name="text" rows={6} cols={80} wrap="virtual" className="p-2" />
          <button onClick={onCommentSubmit} className=" text-sm bg-zinc-200 hover:bg-gray-100 text-zinc-800 my-4 border border-gray-500 rounded max-w-min whitespace-nowrap px-8 ">
            Add Comment
          </button>
        </div>
        <br />
        {data &&
          data.link.comments.edges.map(({ node }) => (
            <p key={node.id}>{node.body}</p>
          ))}
      </div>
    </div>
  )
}
