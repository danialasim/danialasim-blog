import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostSlugs() {
  return await fs.readdir(postsDirectory)
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true }
  })

  const readingTime = Math.ceil(content.split(/\s+/).length / 200) // Assuming 200 words per minute reading speed

  return { 
    slug: realSlug, 
    frontmatter: {
      title: data.title,
      excerpt: data.excerpt,
      tags: data.tags || [],
      category: data.category,
      ...data,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      featureImage: data.featureImage?.url || '/placeholder.svg?height=400&width=800',
      readingTime
    }, 
    content: content
  }
}

export async function getAllPosts() {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return posts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1))
}

