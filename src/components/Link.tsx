import LinkSubtext from '@/components/LinkSubtext'
import  LinkHead  from '@/components/LinkHead'
import { graphql, useFragment } from 'react-relay'
import { LinkFragment$key } from './__generated__/LinkFragment.graphql'

 const linkFragment = graphql`
    fragment LinkFragment on Link {
          totalComments
          id
          description
          url
          }
    `

type Props = {
    link: LinkFragment$key
}


export default function Link ({link}: Props) {


const data = useFragment(linkFragment,  link)

   return  <div>
    <LinkHead node={data} />
    <LinkSubtext totalComments={data.totalComments} id={data.id} />
  </div>
}