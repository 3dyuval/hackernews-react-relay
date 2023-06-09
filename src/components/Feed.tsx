import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import { FeedQuery as FeedQueryType } from '@relay/FeedQuery.graphql'
import { Route, Routes } from 'react-router-dom'
import Comments from '@/components/Comments'
import Link from '@/components/Link'

export const FeedQuery = graphql`
    query FeedQuery {
      feed {
        edges {
          cursor
          node {
            ...LinkFragment
          }
        }
      }
  }
`

export default function Feed () {
  
  const data = useLazyLoadQuery<FeedQueryType>(FeedQuery, {})
  
  return <Routes>
      <Route
        path="/"
        element={data && data.feed.edges.map(({node, cursor}) => <Link link={node} key={cursor} />)}
        />
      <Route path="/link/:link" element={<Comments />} />
    </Routes>
}
