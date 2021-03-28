import { useState } from 'react';

export default function Counter({ startCnt }) {
  const [count, setCount] = useState(startCnt);
  console.log('Counter page component', { startCnt, count });

  return (
    <div>
      <h1>Next.js Data Fetching & Dynamic routes DEMO</h1>
      <hr />
      <p>{ count }</p>
      <button onClick={() => setCount(c => c+1)}>INC</button>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('Counter getStaticProps', context.params);
  return {
    props: { startCnt: parseInt(context.params.n) || 0 }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  console.log('Counter getStaticPaths');
  return {
    paths: [
      { params: { n: '1' } }
    ],
    // https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required

    // SSR/Server mode
    fallback: 'blocking',

    // SSG / `next export`
    //fallback: false,
    // but only /counter/1 will work, other /counter/[n] become 404
  };
}
