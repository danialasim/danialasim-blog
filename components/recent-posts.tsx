"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

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
    <div className="container mx-auto px-4 space-y-6 sm:space-y-8">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl sm:text-4xl font-bold">Recent Articles</h2>
        <p className="text-lg sm:text-xl text-muted-foreground">Latest insights and tutorials in AI & ML</p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Link href="/blog" className="block w-full">
              <Card className="w-full transition-colors hover:bg-muted/50">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-3 sm:p-4">
                  <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <p className="mb-4 text-sm sm:text-base text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center sm:justify-start">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
