import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function News({ allPostsData }) {
  return (
    <Layout>
      <container className="container">
        <Head>
          <title>NEWS</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>NEWS</h2>
          <ul className={utilStyles.flexTripleList}>
            {allPostsData.map(({ id, date, title, imageSource, imageAlt }) => (
              <li className={utilStyles.flexTripleItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>
                    <Image
                      className="image"
                      alt={imageAlt}
                      src={imageSource}
                      height="240"
                      width="240"
                    />
                  </a>
                </Link>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </container>
      <style jsx>{`
        .container {
          width: 100vw;
          max-width: 1120px;
          background-color: var(--surface-color);
          /* background: var(--background-color); */
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .image {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Layout>
  )
}
