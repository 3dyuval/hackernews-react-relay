/**
 * @generated SignedSource<<a69861e4ec75d4cf2ae5beffc3f71634>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkFragment$data = {
  readonly createdAt: string;
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

(node as any).hash = "7723c1b2125b5b69dffdde04e1a154de";

export default node;
