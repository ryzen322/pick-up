import { db, DB } from "@/server/db";
import { InsterPost, posts } from "@/server/schema";
import { faker } from "@faker-js/faker";

const mock = async () => {
  const users = await db.query.users.findMany();
  const randomPosts = faker.helpers.arrayElements(users);
  const data: InsterPost[] = randomPosts.map((user) => {
    return {
      content: faker.lorem.sentence(),
      title: faker.lorem.sentence(),
      name: user.name as string,
      email: user.email as string,
      image: user.image,
    };
  });
  return data;
};

export async function seed(db: DB) {
  const insertData = await mock();
  await db.insert(posts).values(insertData).returning().execute();
}
