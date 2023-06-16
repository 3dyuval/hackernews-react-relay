import LinkSubtext from '@/components/LinkSubtext'
import LinkHead from '@/components/LinkHead'
import { graphql, useFragment } from 'react-relay'
import { LinkFragment$key } from './__generated__/LinkFragment.graphql'

const linkFragment = graphql`
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
  curosr: string
}

export default function Link({ link, cursor}: Props) {
  const data = useFragment(linkFragment, link)

  return (
    <div className="app-content">
      <LinkHead link={data} />
      <LinkSubtext cursor={cursor} totalComments={data.totalComments} id={data.id} link={data} />
    </div>
  )
}
