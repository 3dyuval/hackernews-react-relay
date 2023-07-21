import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentFragment$key } from './__generated__/CommentFragment.graphql'

const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    createdAt
    body
    id
    parentId
  }
`
type Props = {
  comment: CommentFragment$key
}

export default function Comment({ comment }: Props) {
  const data = useFragment(CommentFragment, comment)
  if (!data) {
    return null
  }
  return (
    <>
      {data.body}
      <br />
      {data.id}
      <br />
      {data.createdAt}
      <br />
      {data.parentId}
      <br />
    </>
  )
}
