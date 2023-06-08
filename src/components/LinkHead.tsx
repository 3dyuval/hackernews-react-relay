



export const LinkHead = ({ node }) => {
  return (
    <div className="link-head">
      <div className="link-rank">
        {/* <span className="rank">{item.rank}.</span> */}
      </div>
      <div className="link-vote">
          <a
            id={`up_${node.id}`}
            href={`vote?id=${node.id}&how=up&goto=news%p=2`}
          >
            <div className="link-vote-arrow">
              👆
            </div>
          </a>
      </div>
      <div className="link-head-content">
        <span>
          <a href={node.url}>{node.description}</a>
          <span className="urlbit">
            {` `}
            <a href={`from?site=${node.url}`}>
              <span className="sitestr">({node.url})</span>
            </a>
          </span>
        </span>
      </div>
    </div>
  )
}
