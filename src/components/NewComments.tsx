import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import { NewCommentsPageQuery as NewCommentsPageQueryType } from '@relay/NewCommentsPageQuery.graphql'
import Comment from '@/components/Comment'

const NewCommentsPageQuery = graphql`
  query NewCommentsPageQuery {
    newComments {
      edges {
        cursor
        node {
          ...CommentFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`

export default function NewComments() {
  const data = useLazyLoadQuery<NewCommentsPageQueryType>(
    NewCommentsPageQuery,
    {}
  )
  if (!data) {
    return <>Loading</>
  }

  return (
    <main>
      <ul>
        {data.newComments.edges.map(({ node, cursor }) => (
          <li>
            <Comment comment={node} key={cursor} />
          </li>
        ))}
      </ul>
    </main>
  )
}
