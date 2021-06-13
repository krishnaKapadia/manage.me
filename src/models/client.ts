/** @format */

export class Client {
  id: string;
  workspaceId: string;

  name: string;
  createdOn?: string;

  primaryContactName?: string;
  primaryContactEmail?: string;
  primaryContactPhone?: string;
  notes?: string;

  isEmpty() {
    return this.id && this.workspaceId && this.createdOn;
  }
}
