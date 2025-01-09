"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar } from 'lucide-react'

const recentPosts = [
  {
    title: "The Future of AI in 2024",
    excerpt: "Exploring the latest trends and predictions in artificial intelligence, from large language models to multimodal AI systems.",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "AI Trends",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Deep Learning Architecture Patterns",
    excerpt: "A comprehensive guide to modern deep learning architectures and their applications in solving complex problems.",
    date: "January 10, 2024",
    readTime: "8 min read",
    category: "Deep Learning",
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "MLOps Best Practices",
    excerpt: "Essential practices and tools for implementing effective MLOps in your organization.",
    date: "January 5, 2024",
    readTime: "6 min read",
    category: "MLOps",
    image: "/placeholder.svg?height=200&width=400"
  }
]

export function RecentBlogs() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">Recent Articles</h2>
          <p className="text-muted-foreground mt-2">Latest insights and tutorials in AI & ML</p>
        </div>
        <Button variant="ghost" className="hidden sm:flex" asChild>
          <Link href="/blog" className="group">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="block h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="ghost" className="sm:hidden" asChild>
          <Link href="/blog" className="group">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
