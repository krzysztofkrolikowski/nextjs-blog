import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());

  return {
    props: {
      todo: response
    }
  };
}

const MyComponent = ({todo}) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json());console.log("useEffect");
    setData(response);
  }, []);


  return (
    <Layout>
      <Head>
        <title>First user title</title>
      </Head>
      TODO: {JSON.stringify(data)}
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => {
        console.log("facebook script lazyOnload")
      }} />
      {/*<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="afterInteractive" onLoad={() => {*/}
      {/*  console.log("facebook script afterInteractive")*/}
      {/*}} />*/}
      {/*<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="beforeInteractive" onLoad={() => {*/}
      {/*  console.log("facebook script beforeInteractive")*/}
      {/*}} />*/}
      <Link href="/posts/first-post">First post</Link>
      <p>First user component</p>
      {/*Add additional attributes only to a not to Link*/}
      <Link href="/">
        <a className="foo" target="_blank" rel="noopener noreferrer">
          Hello World
        </a>
      </Link>
      <img src="/images/profile.jpeg" alt="profile" style={{display: 'block'}}/>
      <Image src="/images/profile.jpeg" width={100} height={100}></Image>
    </Layout>
  );
};

export default MyComponent;
