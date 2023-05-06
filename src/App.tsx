import './App.css'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { AppFeedQuery } from './__generated__/AppFeedQuery.graphql'

const feedQuery = graphql`
  query AppFeedQuery {
    feed {
      edges {
        cursor
        node {
          description
          id
          topic
          url
        }
      }
    }
  }
`

function App() {
  const data = useLazyLoadQuery<AppFeedQuery>(feedQuery, {})

  return (
    <>
      <div>
        <h1>Hello relay</h1>
        {data &&
          data.feed.edges.map((item) => (
            <div className="card" key={item.id}>
              <span>{item.description}</span>
              <span>{item.url}</span>
            </div>
          ))}
      </div>
    </>
  )
}

export default App
