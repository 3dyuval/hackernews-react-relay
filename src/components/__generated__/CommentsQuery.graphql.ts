/**
 * @generated SignedSource<<5c6f12616f10f985873be2770f91dad4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CommentsQuery$variables = {
  id: string;
};
export type CommentsQuery$data = {
  readonly link: {
    readonly comments: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly body: string;
          readonly id: string;
        } | null;
      } | null> | null;
    } | null;
    readonly description: string;
    readonly id: string;
    readonly totalComments: number;
    readonly url: string;
  } | null;
};
export type CommentsQuery = {
  response: CommentsQuery$data;
  variables: CommentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "link",
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
        "name": "description",
        "storageKey": null
      },
      (v1/*: any*/),
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
        "concreteType": "CommentConnection",
        "kind": "LinkedField",
        "name": "comments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommentEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "33e48cdfec1e110187b1e257b0800785",
    "id": null,
    "metadata": {},
    "name": "CommentsQuery",
    "operationKind": "query",
    "text": "query CommentsQuery(\n  $id: ID!\n) {\n  link(id: $id) {\n    totalComments\n    description\n    id\n    url\n    comments {\n      edges {\n        node {\n          id\n          body\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "58ed14790e9632a1f60e40b1452cc3b5";

export default node;
