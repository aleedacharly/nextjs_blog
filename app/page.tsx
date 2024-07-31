import Image from "next/image";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className='grid items-center justiy-center md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10'>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    </main>
  );
}
