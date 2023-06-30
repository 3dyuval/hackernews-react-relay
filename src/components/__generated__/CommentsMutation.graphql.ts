/**
 * @generated SignedSource<<a9f3416c70ce52bc76b671e7714d5ed4>>
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
v2 = [
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentsMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0286eb04016900b551fa0fb0c9fbac6a",
    "id": null,
    "metadata": {},
    "name": "CommentsMutation",
    "operationKind": "mutation",
    "text": "mutation CommentsMutation(\n  $link: ID!\n  $body: String!\n) {\n  postCommentOnLink(linkId: $link, body: $body) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba1da09e15362b449e864add370bbf22";

export default node;
