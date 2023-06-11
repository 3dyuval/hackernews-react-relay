import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'

export default ({ link }) => {

  
    const distance = formatDistance(parseInt(link.createdAt), new Date(), {
    addSuffix: true,
  })

  return (
    <div className="flex text-xs text-zinc-500 [&>*]:mx-1">
      {distance}
      <Link to="">hide</Link>
      <Link to="">past</Link>
      <Link to={`/link/${link.id}`}>
        {link.totalComments === 0
          ? 'discuss'
          : `${link.totalComments} Comments`}
      </Link>
    </div>
  )
}
