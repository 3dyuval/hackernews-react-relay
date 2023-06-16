import LinkSubtext from '@/components/LinkSubtext'
import LinkHead from '@/components/LinkHead'
import { graphql, useFragment } from 'react-relay'
import { LinkFragment$key } from './__generated__/LinkFragment.graphql'

const LinkFragment = graphql`
  fragment LinkFragment on Link {
    totalComments
    id
    description
    url
    createdAt
  }
`

type Props = {
  link: LinkFragment$key
}

export default function Link({ link}: Props) {
  const data = useFragment(LinkFragment, link)

  return (
    <div className="app-content">
      <LinkHead link={data} />
      <LinkSubtext totalComments={data.totalComments} id={data.id} link={data} />
    </div>
  )
}
