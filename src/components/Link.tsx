// import React from 'react'
// import { createFragmentContainer, graphql } from 'react-relay'
// //TODO rank

// export default createFragmentContainer(LinkRow, {
//   item: graphql`
    // fragment LinkContentFragmet on FeedItem {
    //   id
    //   description
    //   url
    // }
//   `,
// })

export const LinkRow = ({ node }) => {
  return (
    <tr className="athing" id={node.id}>
      <td align="right" valign="top" className="title">
        {/* <span className="rank">{item.rank}.</span> */}
      </td>
      <td valign="top" className="votelinks">
        <center>
          <a
            id={`up_${node.id}`}
            href={`vote?id=${node.id}&how=up&goto=news%p=2`}
          >
            <div className="votearrow" title="upvote"></div>
          </a>
        </center>
      </td>
      <td className="description">
        <span className="descriptionline">
          <a href={node.url}>{node.description}</a>
          <span className="urlbit">
            {' '}
            (
            <a href={`from?site=${node.url}`}>
              <span className="sitestr">{node.url}</span>
            </a>
            )
          </span>
        </span>
      </td>
    </tr>
  )
}
