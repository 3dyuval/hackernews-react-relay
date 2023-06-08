import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import LinkSubtext from './LinkSubtext'
import { LinkHead } from './LinkHead'
import { FeedQuery } from '@relay/FeedQuery.graphql'

const feedQuery = graphql`
  query FeedQuery {
    feed {
      edges {
        cursor
        node {
          totalComments
          id
          description
          url
        }
      }
    }
  }
`

export const Feed = () => {
  const data = useLazyLoadQuery<FeedQuery>(feedQuery, {})

 
   return  data &&
      data.feed.edges.map((edge) => (
        <div key={edge.node.id}>
          <LinkHead node={edge.node} />
          <LinkSubtext
            totalComments={edge.node.totalComments}
            id={edge.node.id}
          />
        </div>
      ))
  
}

export default Feed
