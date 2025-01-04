"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

const recentPosts = [
  {
    title: "The Future of AI in 2024",
    excerpt: "Exploring the latest trends and predictions in artificial intelligence.",
    date: "January 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Machine Learning Best Practices",
    excerpt: "Essential tips and techniques for building robust ML models.",
    date: "January 10, 2024",
    readTime: "8 min read"
  },
  {
    title: "Deep Learning Architecture Patterns",
    excerpt: "Understanding common patterns in deep learning model design.",
    date: "January 5, 2024",
    readTime: "6 min read"
  }
]

export function RecentPosts() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tighter">Recent Posts</h2>
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            View all posts
            <ArrowRight className="h-4 w-4" />
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
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

