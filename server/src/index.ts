import { Elysia } from 'elysia'
import { apollo, gql } from '@elysiajs/apollo'
import { prisma } from './lib/prisma'

const app = new Elysia()
  .use(
    apollo({
      typeDefs: gql`
        type Post {
          id: String
          name: String
          age: Int
          weight: Float
          pic_url: String
        }

        type Query {
          posts: [Post]
        }
      `,
      resolvers: {
        Query: {
          posts: async () => {
            const posts = await prisma.post.findMany()

            return posts
          },
        },
      },
    }),
  )
  .listen(8080)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
)
