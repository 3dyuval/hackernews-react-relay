/**
 * @generated SignedSource<<c16eb183b39d5c06a93e7a849aacbbc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentFragment$data = {
  readonly body: string;
  readonly createdAt: number;
  readonly id: string;
  readonly link: {
    readonly description: string;
    readonly linkId: string;
  } | null;
  readonly " $fragmentType": "CommentFragment";
};
export type CommentFragment$key = {
  readonly " $data"?: CommentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
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
      "concreteType": "Link",
      "kind": "LinkedField",
      "name": "link",
      "plural": false,
      "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "e820e56cdd1b532a71d3a148e534db50";

export default node;
