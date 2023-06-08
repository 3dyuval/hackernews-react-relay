/**
 * @generated SignedSource<<3e39e517b64ed1e644aee09501957426>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FeedQuery$variables = {};
export type FeedQuery$data = {
  readonly feed: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly description: string;
        readonly id: string;
        readonly totalComments: number;
        readonly url: string;
      } | null;
    } | null> | null;
  };
};
export type FeedQuery = {
  response: FeedQuery$data;
  variables: FeedQuery$variables;
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
                "name": "totalComments",
                "storageKey": null
              },
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
    "name": "FeedQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FeedQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fb2564825d20e1e48bf086b8a24950b9",
    "id": null,
    "metadata": {},
    "name": "FeedQuery",
    "operationKind": "query",
    "text": "query FeedQuery {\n  feed {\n    edges {\n      cursor\n      node {\n        totalComments\n        id\n        description\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fcc3679c9c9f7032eb55f81de0f88428";

export default node;
