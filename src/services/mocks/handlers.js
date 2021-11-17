import { rest } from 'msw'
import { apiConfig } from '../config';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.status(404),
      ctx.delay(2000),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
  rest.get(apiConfig.postsList, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: [{
          id: 1,
          fields: {
            title: "Post 1",
            intro: "intro 1",
          },
        }, {
          id: 3,
          fields: {
            title: "Post 3",
            intro: "intro 3",
          },
        }]
      }),
    );
  }),
]