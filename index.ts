import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // //create a new user
  // const user =await prisma.user.create({
  //     data:{
  //         name: 'john Doe',
  //         email: 'john@xyz.com',
  //     }
  // });
  //   //create user and join with user
  //   const article = await prisma.articles.create({
  //     data: {
  //       title: "article 1 ",
  //       body: "this is 1st article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   //create user with an article
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "john Arc",
  //       email: "johnarc@xyz.com",
  //       articles: {
  //         create: {
  //           title: "sarah article 1",
  //           body: "this is 1st article of sarah",
  //         },
  //       },
  //     },
  //   });
  //   const article = await prisma.articles.create({
  //     data: {
  //       title: "article 2 of john Arc",
  //       body: "this is 2nd article of john Arc",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

//   //update Data
//   const Article = await prisma.articles.update({
//     where :{
//         id : 1,
//     },
//     data:{
//         title: "john Doe Article 1",
//         body : "this is 1st article of john Doe"
//     }
//   });

//delete Data 

// const article = await prisma.articles.delete({
//     where:{
//         id:3,
//     }
// })

  //   //get all the users
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //   //get all the articles
  //   const articles = await prisma.articles.findMany();
  //   console.log(articles);

    // get all the users and their articles
      const users = await prisma.user.findMany({
        include: {
          articles: true,
        },
      });
    users.forEach((user) => {
      console.log(`Users : ${user.name} , Email : ${user.email}`);
      console.log("Articles");
      user.articles.forEach((articles) => {
        console.log(`Title : ${articles.title}`);
        console.log(`Body : ${articles.body}`);
        console.log("\n");
      });
    });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
