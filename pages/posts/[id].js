import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import ImageLightBox from '../../components/image-light-box'

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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: var(--primary-color-desaturated);
        }
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
          padding: 10px;
          /* background: var(--background-color); */
        }
        /* .content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        } */
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
        .photo-grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 360px));
          grid-auto-rows: 50vh;
          margin: 10px;
          justify-content: center;
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image > img:hover {
          opacity: 0.7;
        }
        img {
          width: 50vw;
          height: auto;
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
