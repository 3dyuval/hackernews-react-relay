import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import Link from './Link'
import { useSearchParams } from 'react-router-dom'
import { FeedLinksFragment$key } from './__generated__/FeedLinksFragment.graphql'

export const FeedLinksFragment = graphql`
  fragment FeedLinksFragment on Query  {
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


export default function Feed({feed}: { feed: FeedLinksFragment$key}) {
  const [URLsearchParams] = useSearchParams()

  const date = URLsearchParams.get('day')

  const data = useFragment(FeedLinksFragment, feed)

  return (<>
  {  data &&
    data.feed.edges.map(({ node, cursor }) => <Link link={node} key={cursor} />)}
    </>)
}
