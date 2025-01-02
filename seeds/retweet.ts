import { DB, db } from "@/server/db";
import { InsertRetweet, retweet } from "@/server/schema";
import { faker } from "@faker-js/faker";

const likeMock = async () => {
  const posts = await db.query.posts.findMany();
  const randomPosts = faker.helpers.arrayElements(posts);
  const data: InsertRetweet[] = randomPosts.map((post) => {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      retweetId: post.id,
    };
  });

  return data;
};

export async function seed(db: DB) {
  const insertData = await likeMock();
  await db.insert(retweet).values(insertData).returning();
}
