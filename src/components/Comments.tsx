import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentsQuery as CommentsQueryType } from '@relay/CommentsQuery.graphql'
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

export default function Comments () {
  const { link } = useParams()

  const data = useLazyLoadQuery<CommentsQueryType>(linkCommentsQuery, {
    id: link,
  })

  return<>
  <h2># {link}</h2>
  <br/>
        {data.link.comments.edges.map(({node}) => <p key={node.id}>{node.body}</p>)}
  </>

  
}
