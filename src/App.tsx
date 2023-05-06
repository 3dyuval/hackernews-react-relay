import './App.css'
import { graphql, useLazyLoadQuery } from 'react-relay'
import node, { AppFeedQuery } from '@relay/AppFeedQuery.graphql'
import { LinkHead } from '@/components/LinkHead'
import { Feed } from '@/components/Feed'
import { Route, Routes } from 'react-router-dom'
import LinkSubtext from '@/components/LinkSubtext'

const feedQuery = graphql`
	query AppFeedQuery {
		feed {
			edges {
				cursor
				commentsCount
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

	return (<>
			<Routes>
				<Route path='/news' 
				element={
					<>
					<Feed />
					{data &&
						data.feed.edges.map(edge => (
							<div key={edge.node.id}>
								<LinkHead node={edge.node} />
								<LinkSubtext commentsCount={edge.commentsCount} id={edge.node.id} />
							</div>
						))}
						</>
				}
				/>
				<Route path='/link/:link'>
					<>{`comments...`}</>
				</Route>
			</Routes>
		</>)	
}

export default App
