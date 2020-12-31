import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <container className="container">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <br />
          <div>
            <Image
              src={postData.imageSource}
              alt={postData.imageAlt}
              height="560"
              width="560"
            />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </container>
      <style jsx>{`
        .header {
          color: var(--primary-color-desaturated);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 5px;
        }
        .container {
          width: 100vw;
          max-width: 1120px;
          background-color: var(--surface-color);
          /* background: var(--background-color); */
        }
        .content ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          background-color: var(--surface-color);
          padding: 10px;
          border-radius: 7px;
        }
        .content ul li {
          background-color: var(--surface-color);
          padding: 10px;
          border-radius: 7px;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
