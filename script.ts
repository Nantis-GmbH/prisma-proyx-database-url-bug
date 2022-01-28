import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ["query", "error"],
  datasources: {
    db: {
      url: "prisma://aws-eu-central-1.prisma-data.com/?api_key=ABC"
    }
  }
})

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  // use `console.dir` to print nested objects
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
