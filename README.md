This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

### SSR/Server mode

```
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000)

### SSG / `next export`

toggle comments in `pages/index.js` and `pages/counter/[n].js`, then

```bash
npm run build
npm run export
```

static website will be generated at `out` directory, use static file server like [`http-server`](https://www.npmjs.com/package/http-server) to see result:

```
npm install -g http-server
http-server out
```

Then open [http://localhost:8080](http://localhost:8080)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
