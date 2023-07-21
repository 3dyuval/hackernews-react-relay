import { Link } from 'react-router-dom'
import { formatDateRelative } from '@/utils/date'
import { LinkFragment$data } from './__generated__/LinkFragment.graphql'

type Props = {
  link: LinkFragment$data
}

export default function LinkSubtext({ link }: Props) {
  return (
    <div className="flex text-xs text-zinc-500 [&>*]:mx-1">
      {formatDateRelative(link.createdAt)}
      <Link to="">hide</Link>
      <Link to="">past</Link>
      <Link to={'/link/' + link.linkId}>
        {link.totalComments === 0
          ? 'discuss'
          : `${link.totalComments} Comments`}
      </Link>
    </div>
  )
}
