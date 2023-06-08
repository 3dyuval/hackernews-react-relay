import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentsQuery } from '@relay/CommentQuery.graphql'
import { Suspense } from 'react'

const linkCommentsQuery = graphql`
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

export default () => {
  const { link } = useParams()

  const data = useLazyLoadQuery<CommentsQuery>(linkCommentsQuery, {
    id: link,
  })

  return (
    <>
      <h2>{link}</h2>#<p>{data && JSON.stringify(data)}</p>
    </>
  )
}
