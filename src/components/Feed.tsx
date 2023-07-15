import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import Link from './Link'
import { useSearchParams, useMatch } from 'react-router-dom'
import { FeedLinksFragment$key } from './__generated__/FeedLinksFragment.graphql'
import { useEffect } from 'react'
import { sub, add } from 'date-fns'

export const FeedLinksFragment = graphql`
  fragment FeedLinksFragment on Query
  @refetchable(queryName: "FeedLinksPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 30 }
    date: { type: "String", defaultValue: null }
    orderBy: { type: "String", defaultValue: "rank" }
  ) {
    feed(after: $cursor, first: $count, date: $date, orderBy: $orderBy)
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
  const [URLsearchParams, setURLSearchParams] = useSearchParams()
  const date = URLsearchParams.get('day')
  const orderByDate = useMatch('new')
  const orderByComments = useMatch('comments')

  const { data, loadNext, refetch } = usePaginationFragment(
    FeedLinksFragment,
    feed
  )

  const {
    edges,
    pageInfo: { hasNextPage },
  } = data.feed
  const onLoadMore = () => loadNext(30)

  useEffect(() => {
    const refetchVariables = {}

    if (date) {
      Object.assign(refetchVariables, { date })
    }

    if (orderByDate) {
      Object.assign(refetchVariables, { orderBy: 'new' })
    } else if (orderByComments) {
      Object.assign(refetchVariables, { orderBy: 'comments' })
    }
    refetch(refetchVariables)
  }, [date, refetch, orderByDate, orderByComments])

  type Period = 'days' | 'months' | 'years'

  const changeDate = {
    add: (period: Period) => {
      const result = add(new Date(date), { [period]: 1 })
        .toISOString()
        .split('T')[0]
      setURLSearchParams({ day: result })
    },
    sub: (period: Period) => {
      const result = sub(new Date(date), { [period]: 1 })
        .toISOString()
        .split('T')[0]
      setURLSearchParams({ day: result })
    },
  }

  return (
    <>
      {date && (
        <div className="text-zinc-600 text-md p-4">
          <p> Stories from {date} </p>
          <p>
            Go back a <a role="button" onClick={() => changeDate.sub('days')}>day</a>,{' '}
            <a role="button" onClick={() => changeDate.sub('months')}>month</a>, or{' '}
            <a role="button" onClick={() => changeDate.sub('years')}>year</a>. Go forward a{' '}
            <a role="button" onClick={() => changeDate.add('days')}>day</a> or{' '}
            <a role="button" onClick={() => changeDate.add('months')}>month</a>.
          </p>
        </div>
      )}
      {edges &&
        edges.map(({ node, cursor }, index) => (
          <Link link={node} key={cursor} index={index} />
        ))}
      {hasNextPage && <button onClick={onLoadMore}> Load more... </button>}
    </>
  )
}
