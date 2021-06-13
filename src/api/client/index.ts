/** @format */

import * as Models from "../../models";
import { apiClient } from "../init";

export async function Create(client: Models.Client): Promise<boolean> {
  const { data, error } = await apiClient.from("client").insert([client]);

  if (error) {
    throw error;
  }

  return Promise.resolve(!!data);
}

export async function Retrieve(): Promise<Models.Client[]> {
  const { data, error } = await apiClient.from("client").select("*");

  if (error) {
    throw error;
  }

  return Promise.resolve(data);
}

export async function Update(client: Models.Client): Promise<boolean> {
  const { data, error } = await apiClient
    .from("client")
    .update(client)
    .match({ id: client.id });

  console.log(data);

  if (error) {
    throw error;
  }

  return Promise.resolve(!!data);
}
