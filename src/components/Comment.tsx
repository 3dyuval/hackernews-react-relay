import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentFragment$key } from './__generated__/CommentFragment.graphql'
import { Link } from 'react-router-dom'
import { formatDateRelative } from '@/utils/date'

const CommentFragment = graphql`
  fragment CommentFragment on Comment {
    createdAt
    body
    id
    link {
      linkId
      description
    }
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
    <div>
      <div className="pt-2 text-xs text-zinc-500  flex flex-row">
        <span>{formatDateRelative(data.createdAt)}</span>
        <span>next | context | parent | </span>
        <Link to={'/link/' + data.link.linkId}>
          <p className="max-w-sm truncate text-ellipsis">
            on: {data.link.description}
          </p>
        </Link>
      </div>
      <p className="max-h-24 truncate text-overflow-ellipsis">{data.body}</p>
    </div>
  )
}
