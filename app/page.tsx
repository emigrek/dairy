import Welcome from '../components/Welcome';
import { client } from '../sanity/sanity.client';
import { recentPostsQuery } from '../queries/posts';
import Recent from '../components/Recent';

async function Home() {
  const recent = await client.fetch(recentPostsQuery);

  return (
    <>
      <Welcome/>
      <Recent posts={recent}/>
    </>
  )
}

export default Home