import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from 'next/head';
import {Date} from "../../components/date";
import utilStyles from './../../styles/utils.module.css'
import Layout from "../../components/layout";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData?.title}</h1>
        <div className={utilStyles.lightText}>
          {postData?.date && <Date dateString={postData?.date} />}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
      </article>
    </Layout>
  );
}
