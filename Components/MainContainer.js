import Head from 'next/head';
import Nav from './Nav';

export default function MainContainer({children, keywords=''}) {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta name="keywords" content={"nextjs next denis svistoplasov " + keywords} />
      </Head>

      <Nav />

      <div>
        {children}
      </div>
    </>
  );
}