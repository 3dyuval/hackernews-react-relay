import { useParams } from 'react-router-dom'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentsQuery as CommentsQueryType } from '@relay/CommentsQuery.graphql'
import Link from './Link'
import { useFusionAuth } from '@fusionauth/react-sdk'
import { enqueueSnackbar, closeSnackbar } from 'notistack'

const LinkCommentsQuery = graphql`
  query CommentsQuery($id: ID!) {
    link(id: $id) {
      ...LinkFragment
      comments {
        edges {
          node {
            id
            body
          }
        }
      }
    }
  }
`
const CommentsMutation = graphql`
  mutation CommentsMutation($link: ID!, $body: String!) {
    postCommentOnLink(linkId: $link, body: $body) {
      id
    }
  }
`

export default function Comments() {
  const { link } = useParams()

  const data = useLazyLoadQuery<CommentsQueryType>(LinkCommentsQuery, {
    id: link,
  })

  const [mutate, isMutating] = useMutation(CommentsMutation)
  const { isAuthenticated, login } = useFusionAuth()

  function onSubmit(e) {
    e.preventDefault()
    if (!isAuthenticated) {
      login()
      return
    }

    enqueueSnackbar('Posting comment...', { variant: 'info' })
    const form = new FormData(e.target)

    mutate({
      variables: {
        body: form.get('commentText'),
        link,
      },
      onCompleted: () => {
        closeSnackbar()
        enqueueSnackbar('Success', { variant: 'success' })
      },
      onError: () => {
        closeSnackbar()
        enqueueSnackbar('Error', { variant: 'error' })
      },
    })
  }

  return (
    <div className="app-content">
      <div className="mx-8 py-2 space-y-2">
        <Link link={data.link} index={0} />
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-start comment-section"
        >
          <textarea
            name="commentText"
            rows={6}
            cols={80}
            wrap="virtual"
            className="p-2"
            required
            minLength={10}
            disabled={isMutating}
          />
          <button
            disabled={isMutating}
            className=" text-sm bg-zinc-200 hover:bg-gray-100 text-zinc-800 my-4 border border-gray-500 rounded max-w-min whitespace-nowrap px-8 "
          >
            Add Comment
          </button>
        </form>
        <br />
        {data &&
          data.link.comments.edges.map(({ node }) => (
            <p key={node.id}>{node.body}</p>
          ))}
      </div>
    </div>
  )
}
