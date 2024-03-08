import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] });
const prisma = new PrismaClient();

async function main() {
  //Prisma Queries
  //Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Pele",
  //     },
  //   });
  //   console.log(user);
  //Get all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //Delete all clean database
  //   await prisma.user.deleteMany();
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Tiradentes",
  //       email: "tira@dentes.com",
  //       age: 33,
  //       isAdmin: false,
  //       userPreference: {
  //         create: {
  //           emailUpdates: true,
  //         },
  //       },
  //     },
  //     //INCLUDE brings the Relation
  //     // include: {
  //     //   userPreference: true,
  //     // },
  //     //SELECT bring only the fields set to true. YOU CAN'T USE TOGETHER WITH 'INCLUDE'
  //     select: {
  //       name: true,
  //       userPreference: {
  //         select: {
  //           //Nested select option
  //           id: true,
  //         },
  //       },
  //     },
  //   });
  // console.log(user);
  //Create many
  //   const users = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Tiradentes 3",
  //         email: "tira@dentes3.com",
  //         age: 43,
  //         isAdmin: false,
  //       },
  //       {
  //         name: "Saci 3",
  //         email: "saci@perere3.com",
  //         age: 28,
  //         isAdmin: false,
  //       },
  //     ],
  //   });
  //   console.info(users);
  //Find Unique
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       //   email: "tira@dentes.com",
  //       //email_name is defined in the schema @@uniqque([email, name])
  //       email_name: {
  //         email: "saci@perere.com",
  //         name: "Saci",
  //       },
  //     },
  //   });
  //   console.log(user);
  //Find first
  //   const user = await prisma.user.findFirst({
  //     where: {
  //       name: "Saci",
  //     },
  //   });
  //   console.log(user);
  //Find Many
  //Conditions = where, and, or, not, contains, lt, lte, gt, gte, distinct, orderby, take, skip and much more
  //   const users = await prisma.user.findMany({
  //     // where: {
  //     //   //   name: "Saci",
  //     //   //   name: {
  //     //   //     contains: "Saci",
  //     //   //   },
  //     //   name: {
  //     //     not: {
  //     //       contains: "Saci",
  //     //     },
  //     //   },
  //     //   age: {
  //     //     //less than
  //     //     // lt: 35,
  //     //     //Greater than
  //     //     // gt: 30,
  //     //     //Greater than or equal
  //     //     gte: 34,
  //     //   },
  //     // },
  //     where: {
  //       //   AND: [
  //       //     { email: { endsWith: "@dentes.com" } },
  //       //     { name: { contains: "Tira" } },
  //       //   ],
  //       //   OR: [{ email: { endsWith: "@dentes.com" } }, { age: { gte: 34 } }],
  //       NOT: { email: { contains: "@dentes" } },
  //     },
  //     // distinct: ["name", "age"], //Find the first that matches
  //     //For pagination. Use Take and Skip. Now you ca grab a slice of the data
  //     // take: 2,
  //     // skip: 1,
  //     orderBy: {
  //       name: "desc",
  //     },
  //   });
  //   console.log(users);

  //Update
  //   const user = await prisma.user.update({
  //     data: {
  //       email: "tiradentes@clinica.com",
  //     },
  //     where: {
  //       email: "tira@dentes.com",
  //     },
  //   });
  //   console.log(user);

  //Update Many
  //   const users = await prisma.user.updateMany({
  //     where: {
  //       name: {
  //         contains: "Saci",
  //       },
  //     },
  //     data: {
  //       name: "Saci Perere",
  //     },
  //   });
  //   console.log(users);

  //Update - INCREMENT, DECREMENT, MULTIPLY and DIVIDE
  //   const user = await prisma.user.update({
  //     where: {
  //       email: "tiradentes@clinica.com",
  //     },
  //     data: {
  //       age: {
  //         // increment: 2,
  //         // decrement: 1,
  //         // multiply: 2,
  //         divide: 3,
  //       },
  //     },
  //   });
  //   console.log(user);

  //Delete
  //   const user = await prisma.user.delete({
  //     where: {
  //       email: "tiradentes@clinica.com",
  //     },
  //   });
  //   console.log(user);

  //Delete many
  const users = await prisma.user.deleteMany({
    where: {
      age: {
        gte: 33,
      },
    },
  });
  console.log(users);
}

main()
  .catch(async (e) => {
    console.error(e.message);
    await prisma.$disconnect();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
