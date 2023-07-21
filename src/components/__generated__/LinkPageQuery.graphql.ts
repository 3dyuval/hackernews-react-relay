/**
 * @generated SignedSource<<eb9fcb324d722f9a84025281b2cde15e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkPageQuery$variables = {
  id: string;
};
export type LinkPageQuery$data = {
  readonly link: {
    readonly comments: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly body: string;
          readonly id: string;
          readonly parentId: string | null;
        } | null;
      } | null> | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"LinkFragment">;
  } | null;
};
export type LinkPageQuery = {
  response: LinkPageQuery$data;
  variables: LinkPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
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
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "body",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "parentId",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "link",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LinkFragment"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LinkPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "linkId",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fcbf5f1e731a84b437ae3d8a344002ad",
    "id": null,
    "metadata": {},
    "name": "LinkPageQuery",
    "operationKind": "query",
    "text": "query LinkPageQuery(\n  $id: ID!\n) {\n  link(id: $id) {\n    ...LinkFragment\n    comments {\n      edges {\n        node {\n          id\n          body\n          parentId\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment LinkFragment on Link {\n  totalComments\n  linkId\n  description\n  url\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "080a45563cc27cef32d51b6592e9157e";

export default node;
