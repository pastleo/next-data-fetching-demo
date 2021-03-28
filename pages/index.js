import { incrementAndGet } from '../lib/increment-data-source.js';

export default function Home({ visitedCnt }) {
  console.log('Home page component', { visitedCnt });

  return (
    <div>
      <h1>Next.js Data Fetching DEMO</h1>
      <hr />
      <h2>visited { visitedCnt } times.</h2>
    </div>
  );
}

// SSR/Server mode
export async function getServerSideProps(context) {
  const visitedCnt = incrementAndGet();
  console.log('Home getServerSideProps', { visitedCnt });
  return {
    props: { visitedCnt }, // will be passed to the page component as props
  };
}

// SSG / `next export`
//export async function getStaticProps(context) {
  //console.log('Home getStaticProps');
  //return {
    //props: { visitedCnt: Math.floor(Math.random() * 1000) }, // no server, cannot remember and increment visitedCnt
  //};
//}
