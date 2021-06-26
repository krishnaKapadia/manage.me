/** @format */
import { Order } from "../../models";
import { firestoreClient } from "../init";

const workspaceCollectionId = `workspace-${"abc-123-321-cba"}`;

export async function Retrieve() {
  const res = await firestoreClient
    .collection(`workspaces/${workspaceCollectionId}/orders`)
    .get();

  const data = res.docs.map((d) => d.data());
  console.log("API", data);

  return Promise.resolve(data);
}

// TODO add error handling here to make things more robust.
export async function Create(order: Order) {
  const res = await firestoreClient
    .collection(`workspaces/${workspaceCollectionId}/orders`)
    .doc(`${order.id}`)
    .set(order);

  return Promise.resolve(res);
}
