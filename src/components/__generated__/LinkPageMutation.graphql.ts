/**
 * @generated SignedSource<<b0f47a67d6f998a14c6a5b6826c84062>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LinkPageMutation$variables = {
  body: string;
  link: string;
  parentId?: string | null;
};
export type LinkPageMutation$data = {
  readonly postCommentOnLink: {
    readonly id: string;
  };
};
export type LinkPageMutation = {
  response: LinkPageMutation$data;
  variables: LinkPageMutation$variables;
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
    "name": "LinkPageMutation",
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
    "name": "LinkPageMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d3aee7389018aa961b4ab1ad3b09eb70",
    "id": null,
    "metadata": {},
    "name": "LinkPageMutation",
    "operationKind": "mutation",
    "text": "mutation LinkPageMutation(\n  $link: ID!\n  $body: String!\n  $parentId: String\n) {\n  postCommentOnLink(linkId: $link, body: $body, parentId: $parentId) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9eeecd0837af3211a91a4f7e4628a9e9";

export default node;
