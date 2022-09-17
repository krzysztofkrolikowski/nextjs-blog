import Layout from "./../../components/layout";
import {getAllPostIds, getPostData} from "./../../lib/posts";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const postData = getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
