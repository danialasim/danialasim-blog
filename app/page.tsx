import { getAllPosts } from '@/utils/mdx'
import { HomeClient } from '@/components/home-client'

export default async function Home() {
  const recentPosts = (await getAllPosts()).slice(0, 3)
  const categories = Array.from(new Set((await getAllPosts()).flatMap(post => post.frontmatter.category)))

  return <HomeClient recentPosts={recentPosts} />
}

