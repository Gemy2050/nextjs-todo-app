import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  //* Generate Fake Data For Todo Model
  // await prisma.todo.createMany({
  //   data: Array.from({ length: 25 }).map(() => ({
  //     title: faker.lorem.sentence({ min: 5, max: 10 }),
  //     body: faker.lorem.paragraph({ min: 20, max: 50 }),
  //   })),
  // });
  //* Generate Fake Data For User Model
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }).map(() => ({
  //     email: faker.internet.email(),
  //     name: faker.internet.username(),
  //     address: {
  //       city: faker.location.city(),
  //       street: faker.location.street(),
  //       state: faker.location.state(),
  //       zip: faker.location.zipCode(),
  //     },
  //   })),
  // });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
