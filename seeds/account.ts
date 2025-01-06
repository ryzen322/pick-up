import { db, DB } from "@/server/db";
import { accounts, IsertAccount } from "@/server/schema";
import { faker } from "@faker-js/faker";

const mock = async () => {
  const users = await db.query.users.findMany();
  const randomPosts = faker.helpers.arrayElements(users);
  const data: IsertAccount[] = randomPosts.map((user) => {
    return {
      userId: user.id,
      type: faker.helpers.arrayElement(["email", "oidc", "oauth", "webauthn"]),
      provider: faker.helpers.arrayElement([
        "facebook",
        "google",
        "github",
        "instagram",
      ]),
      providerAccountId: String(faker.number.bigInt({ min: 10000000000 })),
    };
  });
  return data;
};

export async function seed(db: DB) {
  const insertData = await mock();
  await db.insert(accounts).values(insertData).returning().execute();
}
