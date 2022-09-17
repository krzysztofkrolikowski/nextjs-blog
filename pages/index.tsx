import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from './../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "./../lib/posts";
import {Date} from "../components/date";

export const getStaticProps = async () => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I am Kris</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <Date dateString={date}/>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
