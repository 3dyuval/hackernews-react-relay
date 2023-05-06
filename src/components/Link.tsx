import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
//TODO rank

export default createFragmentContainer(LinkRow, {
  item: graphql`
    fragment LinkContent on FeedItem {
      id
      description
      url
    }
  `,
})

const LinkRow = ({ item }) => {
  return (
    <tr className="athing" id={item.id}>
      <td align="right" valign="top" className="title">
        {/* <span className="rank">{item.rank}.</span> */}
      </td>
      <td valign="top" className="votelinks">
        <center>
          <a
            id={`up_${item.id}`}
            href={`vote?id=${item.id}&how=up&goto=news%p=2`}
          >
            <div className="votearrow" title="upvote"></div>
          </a>
        </center>
      </td>
      <td className="description">
        <span className="descriptionline">
          <a href={item.url}>{item.description}</a>
          <span className="urlbit">
            {' '}
            (
            <a href={`from?site=${item.url}`}>
              <span className="sitestr">{item.url}</span>
            </a>
            )
          </span>
        </span>
      </td>
    </tr>
  )
}
