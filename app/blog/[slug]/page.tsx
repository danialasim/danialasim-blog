import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from '@/components/newsletter-form'
import { Button } from "@/components/ui/button"
import { format } from 'date-fns'

interface PostFrontmatter {
  title: string
  date: string
  author: string
  tags: string[]
  excerpt: string
  category: string
  featureImage: string
  readingTime: number
}

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const { frontmatter, content } = await getPostBySlug(slug)
  const typedFrontmatter = frontmatter as PostFrontmatter
  const allPosts = await getAllPosts()
  const recentPosts = allPosts
    .filter(post => post.slug !== slug)
    .slice(0, 3)

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <Image
          src={typedFrontmatter.featureImage}
          alt={typedFrontmatter.title}
          priority={true}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-[800px]">
              <Button variant="outline" size="sm" className="mb-4 hover:bg-background" asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{typedFrontmatter.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={typedFrontmatter.date}>
                    {format(new Date(typedFrontmatter.date), 'MMMM d, yyyy')}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{typedFrontmatter.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{typedFrontmatter.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_300px]">
          <article className="prose prose-gray dark:prose-invert max-w-none overflow-hidden">
            <MDXRemote source={content} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {Array.from(new Set(allPosts.flatMap(post => post.frontmatter.tags))).map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag}`}>
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-secondary/70"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <NewsletterForm />
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Recent Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <Image
                    src={post.frontmatter.featureImage}
                    alt={post.frontmatter.title}
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {post.frontmatter.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
