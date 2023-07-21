import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { LinkPageQuery as LinkPageQueryType } from '@relay/LinkPageQuery.graphql'
import Link from './Link'
import { useFusionAuth } from '@fusionauth/react-sdk'
import { enqueueSnackbar } from 'notistack'
import CommentSection from './CommentsSection'

const LinkPageQuery = graphql`
  query LinkPageQuery($id: ID!) {
    link(id: $id) {
      ...LinkFragment
      comments {
        edges {
          node {
            id
            body
            parentId
          }
        }
      }
    }
  }
`
const LinkPageMutation = graphql`
  mutation LinkPageMutation($link: ID!, $body: String!, $parentId: String) {
    postCommentOnLink(linkId: $link, body: $body, parentId: $parentId) {
      id
    }
  }
`

export default function Comments() {
  const [replying, setReplying] = useState(null)
  const { link } = useParams()

  const data = useLazyLoadQuery<LinkPageQueryType>(LinkPageQuery, {
    id: link,
  })

  const [mutate, isMutating] = useMutation(LinkPageMutation)
  const { isAuthenticated, login } = useFusionAuth()

  function onSubmit(e) {
    e.preventDefault()
    if (!isAuthenticated) {
      login()
      return
    }

    const form = new FormData(e.target)

    mutate({
      variables: {
        body: form.get('commentText'),
        link,
        parentId: replying,
      },
      onCompleted: () => {
        setReplying(null)
        enqueueSnackbar('Success', { variant: 'info' })
      },
      onError: () => {
        enqueueSnackbar('Error', { variant: 'error' })
      },
    })
  }

  return (
    <div className="app-content">
      <div className="mx-8 py-2 space-y-2">
        {!replying ? (
          <Link link={data.link} index={0} />
        ) : (
          <p>
            {' '}
            {
              data.link.comments.edges.find((edge) => edge.node.id === replying)
                ?.node.body
            }{' '}
          </p>
        )}
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
        {data && !replying && (
          <CommentSection
            onReply={setReplying}
            comments={data.link.comments}
            linkId={link}
          />
        )}
      </div>
    </div>
  )
}
