import { getAllPosts } from '@/utils/mdx'
import { BlogClient } from '@/components/blog-client'

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const categories = Array.from(new Set(allPosts.flatMap(post => post.frontmatter.category)))

  return <BlogClient allPosts={allPosts} categories={categories} />
}

