/**
 * @generated SignedSource<<45c42381b2991decf44fcf4a43312fa7>>
 * @relayHash dce562b240e60e6fc3c43b4ab7e0b7e6
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ea2a4b3e2fa33409a28e20cb05c54a5befe363fc706b558058ab137108e15522

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PostLinkMutation$variables = {
  description: string;
  url: string;
};
export type PostLinkMutation$data = {
  readonly postLink: {
    readonly id: string;
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
    "id": "ea2a4b3e2fa33409a28e20cb05c54a5befe363fc706b558058ab137108e15522",
    "metadata": {},
    "name": "PostLinkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "63add3752dd45dfc0da63b10dacf532b";

export default node;
