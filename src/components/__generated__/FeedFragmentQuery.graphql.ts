/**
 * @generated SignedSource<<c7e23ab87ac1a37c6675ceabb500f28f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeedFragmentQuery$data = {
  readonly feed: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly description: string;
        readonly id: string;
        readonly totalComments: number;
        readonly url: string;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "FeedFragmentQuery";
};
export type FeedFragmentQuery$key = {
  readonly " $data"?: FeedFragmentQuery$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeedFragmentQuery">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeedFragmentQuery",
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

(node as any).hash = "9467dc3b921f68721cbc49a4e594d67c";

export default node;
