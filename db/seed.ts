import * as seeds from "@/seeds";
import { db } from "@/server/db";

async function main() {
  await seeds.users(db);
  await seeds.posts(db);
  await seeds.comment(db);
  await seeds.likes(db);
  await seeds.retweet(db);
}

main();
