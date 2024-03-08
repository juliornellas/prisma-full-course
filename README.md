# Prisma Full Course

All you need to know about Prisma.

## First steps

1. Install the packages:
   <code>
   npm init - && npm i --save-dev prisma typescript ts-node @types/node nodemon
   </code>

2. Initialize Prisma:
   <code>
   npx prisma init --datasource-provider sqlite
   </code>

3. Install the Prisma Client:
   <code>
   npm -i @prisma/client
   </code>

Or, manually:
<code>
npx prisma generate
</code>

4. And create a file (named as you wish) in the root folder.
   E.g.: script.ts
   And put into the file this code:
   <code>
   import {PrismaClient} from '@prisma/client'
   const prisma = new PrismaClient()
   </code>

5. Create a model:

E.g.:
<code>
model User {
id Int @id @default(autoincrement())
name String
}
</code>

And migrate to the database
<code>
npx prisma migrate dev --name init
</code>

## Watching changes with nodemon

<code>
"start": "nodemon script.ts"
</code>
