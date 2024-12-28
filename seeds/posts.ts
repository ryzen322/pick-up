import { DB } from "@/server/db";
import { InsterPost, posts } from "@/server/schema";
import { faker } from "@faker-js/faker";

const mock = async () => {
  const data: InsterPost[] = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      content: faker.lorem.sentence(),
      title: faker.lorem.sentence(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    });
  }

  return data;
};

export async function seed(db: DB) {
  const insertData = await mock();
  await db.insert(posts).values(insertData).returning().execute();
}
