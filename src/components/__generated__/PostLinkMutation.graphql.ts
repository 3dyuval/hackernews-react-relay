/**
 * @generated SignedSource<<0f2727f759ff1e22eef04bf7d9c1cbe5>>
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "linkId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "postLink",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
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
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "postLink",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "4e7ed5c9e8f8acd17099f0da0f04d6e9",
    "id": null,
    "metadata": {},
    "name": "PostLinkMutation",
    "operationKind": "mutation",
    "text": "mutation PostLinkMutation(\n  $url: String!\n  $description: String!\n) {\n  postLink(url: $url, description: $description) {\n    linkId\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef0e653078922317b37a8046077c2647";

export default node;
