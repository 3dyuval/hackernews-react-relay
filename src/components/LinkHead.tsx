



export default function LinkHead({ node }) {


  return (
    <div className="flex text-sm">
      <div className="">
        {/* <span className="rank">{item.rank}.</span> */}
      </div>
      <div className="">
          <a
            id={`up_${node.id}`}
            href={`vote?id=${node.id}&how=up&goto=news%p=2`}
          >
            <div className="">
              👆
            </div>
          </a>
      </div>
      <div className="">
        <span>
          <a href={node.url}>{node.description}</a>
          <span className="text-zinc-500">
            {` `}
            <a href={node.url} target="_blank">
              <span>({node.url})</span>
            </a>
          </span>
        </span>
      </div>
    </div>
  )
}
