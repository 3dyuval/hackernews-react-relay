import { useParams } from 'react-router-dom'
import {useState} from 'react'
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
            parentId
          }
        }
      }
    }
  }
`
const CommentsMutation = graphql`
  mutation CommentsMutation($link: ID!, $body: String!, $parentId: String) {
    postCommentOnLink(linkId: $link, body: $body, parentId: $parentId) {
      id
    }
  }
`

export default function Comments() {
  const [replying, setReplying] = useState(null)
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

    const form = new FormData(e.target)

    mutate({
      variables: {
        body: form.get('commentText'),
        link,
        parentId: replying
      },
      onCompleted: () => {
        setReplying(null)
        enqueueSnackbar('Success', {variant: 'info'})
      },
      onError: () => {
        enqueueSnackbar('Error', { variant: 'error' })
      },
    })
  }


  function sort(data: CommentsQueryType['response']) {
    const nodes = structuredClone(Object.values(data.link.comments.edges).map(e => e.node))
    for (const node of nodes) {
      if (node.parentId) {
        const parentIndex = nodes.findIndex(i => i.id === node.parentId)
        const childIndex = nodes.findIndex(i => i.id === node.id)
        const [splicedChild] = nodes.splice(childIndex, 1)
        //@ts-ignore
        splicedChild.indent = 1
        nodes.splice(parentIndex + 1, 0, splicedChild )
      }
    }
    return nodes
  }

  return (
    <div className="app-content">
      <div className="mx-8 py-2 space-y-2">
        {
        !replying ? <Link link={data.link} index={0} />
        : (<p> {data.link.comments.edges.find(edge => edge.node.id === replying)?.node.body} </p>)
      }
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
        {data && replying === null &&
          sort(data).map((node, index) => (
            <div style={{paddingLeft: `${node.indent * 8}px`}} key={index}>
              <p>{node.body}</p>
              <span
              onClick={() => setReplying(node.id)}
              className="text-xs text-zinc-500 [&>*]:mx-1"
              role="button">reply</span>
            </div>
          ))}
      </div>
    </div>
  )
}
