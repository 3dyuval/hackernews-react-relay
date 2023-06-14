/**
 * @generated SignedSource<<7a906c90182d9d7f74352d115ede3a4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly info: string;
  readonly viewer: {
    readonly actor: {
      readonly email?: string | null;
      readonly id: string;
      readonly joined: string | null;
      readonly name: string | null;
    } | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"FeedLinksFragment">;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "info",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "joined",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "date",
    "value": "2022-12-12"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FeedLinksFragment"
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "LinkConnection",
        "kind": "LinkedField",
        "name": "feed",
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalComments",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "feed(date:\"2022-12-12\",first:30)"
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": [
          "date"
        ],
        "handle": "connection",
        "key": "FeedLinksFragment_feed",
        "kind": "LinkedHandle",
        "name": "feed"
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "659942452f2b1731c422b219a544eb9d",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  ...FeedLinksFragment\n  info\n  viewer {\n    actor {\n      __typename\n      id\n      name\n      joined\n      ... on User {\n        email\n      }\n    }\n  }\n}\n\nfragment FeedLinksFragment on Query {\n  feed(first: 30, date: \"2022-12-12\") {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        ...LinkFragment\n        id\n        __typename\n      }\n    }\n  }\n}\n\nfragment LinkFragment on Link {\n  totalComments\n  id\n  description\n  url\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "7bbd7e3da946ecdb3b2805cf709b0ffa";

export default node;
