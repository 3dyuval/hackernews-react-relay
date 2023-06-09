import  Feed  from '@/components/Feed'
import { Suspense } from 'react'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'
import Navigation from '@/components/Navigation'
import {Routes, Route} from 'react-router-dom'

const query = graphql`
  query AppQuery {
    info
  }
`

export default function App() {
  const data = useLazyLoadQuery<AppQueryType>(query, {})

  const info = data.info

  return (
    <Suspense fallback={'Loading'}>
      <Navigation info={info} />
      <Routes>
        <Route path="/*" element={<Feed />} />
      </Routes>
    </Suspense>
  )
}