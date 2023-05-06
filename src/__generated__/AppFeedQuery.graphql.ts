/**
 * @generated SignedSource<<c1a8df25aed4d092e4219df4e25467c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppFeedQuery$variables = {};
export type AppFeedQuery$data = {
  readonly feed: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly description: string;
        readonly id: string;
        readonly url: string;
      } | null;
    } | null> | null;
  };
};
export type AppFeedQuery = {
  response: AppFeedQuery$data;
  variables: AppFeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LinkConnection",
    "kind": "LinkedField",
    "name": "feed",
    "plural": false,
    "selections": [
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
                "name": "id",
                "storageKey": null
              },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFeedQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFeedQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8154da203b76ebd5479242fcc22a571b",
    "id": null,
    "metadata": {},
    "name": "AppFeedQuery",
    "operationKind": "query",
    "text": "query AppFeedQuery {\n  feed {\n    edges {\n      cursor\n      node {\n        id\n        description\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "156c01a33be0822ebfae7e32144294b1";

export default node;
