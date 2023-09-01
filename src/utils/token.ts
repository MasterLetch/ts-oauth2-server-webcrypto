//import crypto from "node:crypto";
import * as crypto from "crypto";


export function generateRandomToken(len = 80) {
  return crypto.randomBytes(len / 2).toString("hex");
}
