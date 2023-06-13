import { Suspense, useEffect } from 'react'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'
import Navigation from '@/components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Comments from '@/components/Comments'
import Feed from '@/components/Feed'

const query = graphql`
  query AppQuery {
    info
    viewer {
      actor {
        id
        name
        joined
        ... on User {
          email
        }
      }
    }
  }
`

export default function App() {
  const data = useLazyLoadQuery<AppQueryType>(query, {})
  const info = data.info

  return (
    <>
      <div className="app">
        <Navigation info={data.info} actor={data.viewer.actor} />
        <Suspense>
          <Routes>
            <Route path="/" element={<Feed feed={data.feed} />} />
            <Route path="/link/:link" element={<Comments />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
