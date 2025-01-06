import { DB } from "@/server/db";
import { IsertUser, users } from "@/server/schema";
import { faker, simpleFaker } from "@faker-js/faker";

const mock = async () => {
  const data: IsertUser[] = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      email: faker.internet.email(),
      id: simpleFaker.string.uuid(),
      image: faker.image.avatar(),
      name: faker.person.fullName(),
    });
  }

  return data;
};

export async function seed(db: DB) {
  const insertData = await mock();
  await db.insert(users).values(insertData).returning().execute();
}
