import { Suspense } from 'react'
import { useLazyLoadQuery, graphql } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'
import Navigation from '@/components/Navigation'
import { Routes, Route } from 'react-router-dom'
import LinkPage from '@/components/LinkPage'
import Feed from '@/components/Feed'
import PostLink from './PostLink'
import NewComments from './NewComments'
const query = graphql`
  query AppQuery {
    ...FeedLinksFragment
    info
    viewer {
      score
      name
    }
  }
`

export default function App() {
  const data = useLazyLoadQuery<AppQueryType>(query, {})
  const { info } = data
  const { viewer } = data

  return (
    <>
      <div className="app">
        <Navigation info={info} viewer={viewer} />
        <Suspense>
          <Routes>
            <Route path="/*" element={<Feed feed={data} />} />
            <Route path="/link/:link" element={<LinkPage />} />
            <Route path="/post-link" element={<PostLink />} />
            <Route path="/new-comments" element={<NewComments />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
