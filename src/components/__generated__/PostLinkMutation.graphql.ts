/**
 * @generated SignedSource<<79160f57fad1a63e4f1140a225a110b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PostLinkMutation$variables = {
  description: string;
  url: string;
};
export type PostLinkMutation$data = {
  readonly postLink: {
    readonly linkId: string;
  };
};
export type PostLinkMutation = {
  response: PostLinkMutation$data;
  variables: PostLinkMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "postLink",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "linkId",
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
    "name": "PostLinkMutation",
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
    "name": "PostLinkMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4169a4e7ea09645e507675a701432bb9",
    "id": null,
    "metadata": {},
    "name": "PostLinkMutation",
    "operationKind": "mutation",
    "text": "mutation PostLinkMutation(\n  $url: String!\n  $description: String!\n) {\n  postLink(url: $url, description: $description) {\n    linkId\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef0e653078922317b37a8046077c2647";

export default node;
