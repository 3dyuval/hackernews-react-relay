import LinkSubtext from '@/components/LinkSubtext'
import LinkHead from '@/components/LinkHead'
import { graphql, useFragment } from 'react-relay'
import { LinkFragment$key } from './__generated__/LinkFragment.graphql'

const LinkFragment = graphql`
  fragment LinkFragment on Link {
    totalComments
    linkId
    description
    url
    createdAt
  }
`

type Props = {
  link: LinkFragment$key
  index: number
}

export default function Link({ link, index }: Props) {
  const data = useFragment(LinkFragment, link)

  return (
    <div className="app-content">
      <LinkHead link={data} index={index} />
      <LinkSubtext link={data} />
    </div>
  )
}
