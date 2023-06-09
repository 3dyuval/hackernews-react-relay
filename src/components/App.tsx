import '@/style.css'
import  Feed  from '@/components/Feed'
import { Suspense } from 'react'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'

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
      <div className="app-header">
        <h1>{info}</h1>
      </div>
      <Feed />
    </Suspense>
  )
}