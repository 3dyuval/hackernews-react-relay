import  Feed  from '@/components/Feed'
import { Suspense } from 'react'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'
import Navigation from '@/components/Navigation'
import {Routes, Route} from 'react-router-dom'

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
    <div className="app container px-0 md:my-4 max-w-4xl">
    <Suspense fallback={'Loading'}>
      <Navigation info={info} actor={data.viewer.actor} />
      <Routes>
        <Route path="/*" element={<Feed />} />
      </Routes>
    </Suspense>
    </div>
  )
}