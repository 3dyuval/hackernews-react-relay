/**
 * @generated SignedSource<<8f03fd52546630c92776542c1b18aeb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeedLinksFragment$data = {
  readonly feed: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"LinkFragment">;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "FeedLinksFragment";
};
export type FeedLinksFragment$key = {
  readonly " $data"?: FeedLinksFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeedLinksFragment">;
};

import FeedLinksPaginationQuery_graphql from './FeedLinksPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "feed"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 30,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": "2022-12-12",
      "kind": "LocalArgument",
      "name": "date"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": FeedLinksPaginationQuery_graphql
    }
  },
  "name": "FeedLinksFragment",
  "selections": [
    {
      "alias": "feed",
      "args": [
        {
          "kind": "Variable",
          "name": "date",
          "variableName": "date"
        }
      ],
      "concreteType": "LinkConnection",
      "kind": "LinkedField",
      "name": "__FeedLinksFragment_feed_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "LinkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Link",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LinkFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "44550c2b95d454ffcbee9b884175bd0c";

export default node;
