import { BSON } from "realm-web";

export interface Task {
  _id: string | BSON.ObjectId;
  code: string;
  name: string;
  is_closed: boolean;
}
