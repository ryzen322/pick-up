import { DB, db } from "@/server/db";
import { InsertLike, likes } from "@/server/schema";
import { faker } from "@faker-js/faker";

const likeMock = async () => {
  const posts = await db.query.posts.findMany();
  const randomPosts = faker.helpers.arrayElements(posts);
  const data: InsertLike[] = randomPosts.map((post) => {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      likesId: post.id,
    };
  });

  return data;
};

export async function seed(db: DB) {
  const insertData = await likeMock();
  await db.insert(likes).values(insertData).returning();
}
