



export default function LinkHead({ link }) {


  return (
    <div className="flex text-sm">
      <div className="">
        {/* <span className="rank">{item.rank}.</span> */}
      </div>
      <div className="">
          <a
            id={`up_${link.id}`}
            href={`vote?id=${link.id}&how=up&goto=news%p=2`}
          >
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
