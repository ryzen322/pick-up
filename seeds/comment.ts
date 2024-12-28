import { db, DB } from "@/server/db";
import { comments, insertComment } from "@/server/schema";
import { faker } from "@faker-js/faker";

const commentMock = async () => {
  const posts = await db.query.posts.findMany();
  const randomPosts = faker.helpers.arrayElements(posts);
  const data: insertComment[] = randomPosts.map((post) => {
    return {
      comment: faker.lorem.sentence(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      createdAt: faker.date.past(),
      CommentsId: post.id,
    };
  });

  return data;
};

export async function seed(db: DB) {
  const insertData = await commentMock();
  await db.insert(comments).values(insertData).returning();
}
