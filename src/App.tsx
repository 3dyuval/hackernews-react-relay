import './App.css'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { AppFeedQuery } from '@relay/AppFeedQuery.graphql'
import { LinkRow } from '@/components/Link'

const feedQuery = graphql`
	query AppFeedQuery {
		feed {
			edges {
				cursor
				node {
					id
					description
					url
				}
			}
		}
	}
`

function App() {
	const data = useLazyLoadQuery<AppFeedQuery>(feedQuery, {})

	return (<div>
		<h1>Hackernews clone</h1>
		{data && data.feed.edges.map(edge => <LinkRow key={edge.node.id} node={edge.node} />)}
	</div>)
}

export default App
