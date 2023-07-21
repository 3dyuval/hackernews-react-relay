import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { LinkFragment$data } from './__generated__/LinkFragment.graphql'

type Props = {
  link: LinkFragment$data
}

export default function LinkSubtext({ link }: Props) {
  const distance = formatDistance(parseInt(link.createdAt), new Date(), {
    addSuffix: true,
  })

  return (
    <div className="flex text-xs text-zinc-500 [&>*]:mx-1">
      {distance}
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
