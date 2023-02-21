import Welcome from '../components/Welcome';
import { client } from '../sanity/sanity.client';
import { recentPostsQuery } from '../queries/posts';
import Recent from '../components/Recent';

async function Home() {
  const recent: Post[] = await client.fetch(recentPostsQuery);

  return (
    <div>
      <Welcome/>
      <Recent posts={recent}/>
    </div>
  )
}

export default Home