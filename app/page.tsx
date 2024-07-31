
import PostCard from "@/components/PostCard";
import { db } from "./lib/db";

async function getPosts() {
  const response = await db.post.findMany({
    select:{
      id:true,
      title:true,
      content:true,
      tag:true,
    },
    orderBy:{
      createdAt:'desc'
    }
  });
  return response;
}


export default  async function Home() {
  const posts = await getPosts ();
  console.log(posts);


  return (
    <main className='grid items-center justiy-center md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
      {posts.map(post => (
        <PostCard key={post.id} post ={post}/>
      ))}
    </main>
  );
}
