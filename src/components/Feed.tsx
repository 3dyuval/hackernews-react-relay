import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import Link from './Link'
import { useSearchParams } from 'react-router-dom'
import { FeedLinksFragment$key } from './__generated__/FeedLinksFragment.graphql'
import { useEffect } from 'react'

export const FeedLinksFragment = graphql`
  fragment FeedLinksFragment on Query
  @refetchable(queryName: "FeedLinksPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 30 },
    date: { type: "String", defaultValue: "2022-12-12" }
  ) {
    feed(after: $cursor, first: $count, date: $date)
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
  const date = URLsearchParams.get('day')

  const { data, loadNext, refetch } = usePaginationFragment(FeedLinksFragment, feed)

  const {edges, pageInfo: { hasNextPage}} = data.feed
  const onLoadMore = () => loadNext(30)

  useEffect(() => {
    refetch({date})
  }, [date, refetch])

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
