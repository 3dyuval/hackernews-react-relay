/**
 * @generated SignedSource<<14500b1de75a37d72ed4ae68c851fb20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkFragment$data = {
  readonly createdAt: number;
  readonly description: string;
  readonly linkId: string;
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
    }
  ],
  "type": "Link",
  "abstractKey": null
};

(node as any).hash = "267fb69d97fe4958f81af88d67b2e369";

export default node;
