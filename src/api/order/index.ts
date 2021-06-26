/** @format */
import { Order } from "../../models";
import { firestoreClient } from "../init";

const workspaceCollectionId = `workspace-${"abc-123-321-cba"}`;

export async function Retrieve() {
  const res = await firestoreClient
    .collection("workspace-abc-123-321-cba")
    .get();

  console.log(res.docs.forEach((d) => console.log(d.data())));
}
