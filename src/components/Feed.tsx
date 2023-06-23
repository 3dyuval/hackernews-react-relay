import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import Link from './Link'
import { useSearchParams, matchPath, useMatch } from 'react-router-dom'
import { FeedLinksFragment$key } from './__generated__/FeedLinksFragment.graphql'
import { useEffect } from 'react'

export const FeedLinksFragment = graphql`
  fragment FeedLinksFragment on Query
  @refetchable(queryName: "FeedLinksPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 30 },
    day: { type: "String", defaultValue: ""},
    orderBy: {type: "String", defaultValue: "votes"}
  ) {
    feed(after: $cursor, first: $count, date: $day, orderBy: $orderBy)
      @connection(key: "FeedLinksFragment_feed") {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...LinkFragment
        }
      }
    }
  }
`

export default function Feed({ feed }: { feed: FeedLinksFragment$key }) {
  const [URLsearchParams] = useSearchParams()
  const day = URLsearchParams.get('day')
  const orderByDate = useMatch('new')

  const { data, loadNext, refetch } = usePaginationFragment(FeedLinksFragment, feed)

  const {edges, pageInfo: { hasNextPage}} = data.feed
  const onLoadMore = () => loadNext(30)

  useEffect(() => {
    let orderBy = 'votes'
    if (orderByDate) {
      orderBy = 'date'
    }
    refetch({day, orderBy})
  }, [day, refetch, orderByDate])

  return (
    <>
      {edges &&
        edges.map(({ node, cursor }) => (
          <Link link={node} key={cursor} cursor={cursor} />
        ))}
      {hasNextPage && (
        <button onClick={onLoadMore}> Load more... </button>
      )}
    </>
  )
}
