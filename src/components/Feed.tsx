import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import { FeedQuery as FeedQueryType } from '@relay/FeedQuery.graphql'
import { Route, Routes } from 'react-router-dom'
import Comments from '@/components/Comments'
import Link from '@/components/Link'

export const feedQuery = graphql`
    query FeedQuery {
      feed {
        edges {
          node {
            ...LinkFragment
          }
        }
      }
  }
`

export default function Feed () {
  
  const data = useLazyLoadQuery<FeedQueryType>(feedQuery, {})
  
  return <Routes>
      <Route
        path="/"
        element={data && data.feed.edges.map(({node}) => <Link link={node} key={node.id} />)}
      />
      <Route path="/link/:link" element={<Comments />} />
    </Routes>
  
}
