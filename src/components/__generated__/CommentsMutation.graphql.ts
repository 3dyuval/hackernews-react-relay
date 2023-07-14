/**
 * @generated SignedSource<<a948691def70ad185ba738efd1b7f79b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentsMutation$variables = {
  body: string;
  link: string;
  parentId?: string | null;
};
export type CommentsMutation$data = {
  readonly postCommentOnLink: {
    readonly id: string;
  };
};
export type CommentsMutation = {
  response: CommentsMutation$data;
  variables: CommentsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "body"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "link"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "parentId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "body",
        "variableName": "body"
      },
      {
        "kind": "Variable",
        "name": "linkId",
        "variableName": "link"
      },
      {
        "kind": "Variable",
        "name": "parentId",
        "variableName": "parentId"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "postCommentOnLink",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentsMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "50418516fbed569043a758b8604e6c58",
    "id": null,
    "metadata": {},
    "name": "CommentsMutation",
    "operationKind": "mutation",
    "text": "mutation CommentsMutation(\n  $link: ID!\n  $body: String!\n  $parentId: String\n) {\n  postCommentOnLink(linkId: $link, body: $body, parentId: $parentId) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1575f115eebb79f7cc458061f956ab12";

export default node;
