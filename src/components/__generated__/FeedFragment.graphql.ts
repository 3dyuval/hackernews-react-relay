/**
 * @generated SignedSource<<2deaf30fd189e830ff40c5b9275d8e18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeedFragment$data = {
  readonly feed: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"LinkFragment">;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "FeedFragment";
};
export type FeedFragment$key = {
  readonly " $data"?: FeedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LinkConnection",
      "kind": "LinkedField",
      "name": "feed",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LinkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Link",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LinkFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "a0cd437f1c1aef0ad4b57c27dcda0a1f";

export default node;
