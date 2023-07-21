import type { LinkFragment$data as LinkProps } from '@relay/LinkFragment.graphql'

type Props = {
  link: LinkProps
  index?: number
}

export default function LinkHead({ link, index }: Props) {
  function onVoteClick() {
    alert('not implemented')
    // TODO mutate link.id
  }

  return (
    <div className="flex text-sm">
      <div className="">{index && <span className="rank">{index}.</span>}</div>
      <div className="">
        <a role="button" onClick={onVoteClick}>
          <div className="votearrow" />
        </a>
      </div>
      <div className="">
        <span>
          <a href={link.url}>{link.description}</a>
          <span className="text-zinc-500">
            {` `}
            <a href={link.url} target="_blank">
              <span>({link.url})</span>
            </a>
          </span>
        </span>
      </div>
    </div>
  )
}
