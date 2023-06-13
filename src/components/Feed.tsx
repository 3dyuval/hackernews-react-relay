import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import Link from './Link'
import { FeedQuery as FeedQueryType} from '@relay/FeedQuery.graphql'
import { useSearchParams } from 'react-router-dom'

export const FeedQuery = graphql`
  query FeedQuery ($date: String) {
    feed( date: $date ) {
      edges {
        cursor
        node {
          ...LinkFragment
        }
      }
    }
  }
`


export default function Links() {
  const [URLsearchParams] = useSearchParams()

  const date = URLsearchParams.get('day')

  const data = useLazyLoadQuery<FeedQueryType>(FeedQuery, { date })

  return (
    data &&
    data.feed.edges.map(({ node, cursor }) => <Link link={node} key={cursor} />)
  )
}
