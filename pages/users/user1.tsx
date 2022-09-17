import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'
import Layout from './../../components/layout';

const MyComponent = () => {
  const [data, setData] = useState();

  useEffect( () => {
      (() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(res => {
            setData(res);
        })
    })()
  }, []);


  return (
    <Layout>
      <Head>
        <title>First user title</title>
      </Head>
      TODO: {JSON.stringify(data)}
      <br/>
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
