/**
 * @generated SignedSource<<e64b04f4089f7a76ad63af5c67a8c82c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkFragment$data = {
  readonly description: string;
  readonly id: string;
  readonly totalComments: number;
  readonly url: string;
  readonly " $fragmentType": "LinkFragment";
};
export type LinkFragment$key = {
  readonly " $data"?: LinkFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinkFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkFragment",
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
  "type": "Link",
  "abstractKey": null
};

(node as any).hash = "d2133960be41550c6b98f9cb6ca54c28";

export default node;
