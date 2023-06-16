import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentsQuery as CommentsQueryType } from '@relay/CommentsQuery.graphql'

const LinkCommentsQuery = graphql`
  query CommentsQuery($id: ID!) {
    link(id: $id) {
      totalComments
      description
      id
      url
      totalComments
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

  return (
    <div className="app-content">
    <div className="mx-8 py-8">
      <div className="flex flex-col justify-start comment-section">
        <textarea name="text" rows={8} cols={80} wrap="virtual" />
        <button className="">Add Comment</button>
      </div>
      <h2># {link}</h2>
      <br />
      {data.link.comments.edges.map(({ node }) => (
        <p key={node.id}>{node.body}</p>
        ))}
        </div>
    </div>
  )
}
