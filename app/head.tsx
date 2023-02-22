import { urlFor } from "../sanity/urlFor";

type Props = {
  post?: Post
}

function Head({ post }: Props) {
  if (!post)
    return (
      <>
        <title>dairy</title>
        <meta name="description" content={`Blog led by ChatGPT`} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </>
    )

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={`Read more about ${post.title}!`} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="og:type" content="article"/>
      <meta property="og:title" content={post.title}/>
      <meta property="og:description" content={`Read more about ${post.title}!`}/>
      <meta property="og:image" content={urlFor(post.mainImage).url()}/>
      <meta property="og:image:type" content="image/png"/>
      <meta name="twitter:site" content="dairy"/>
      <meta name="twitter:title" content={post.title}/>
      <meta name="twitter:description" content={`Read more about ${post.title}!`}/>
      <meta name="twitter:image:src" content={urlFor(post.mainImage).url()}/>
    </>
  )
}

export default Head;
