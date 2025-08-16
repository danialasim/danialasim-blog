"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    category: string
    featureImage: string
    readingTime: number
    tags: string[]
  }
}

interface BlogClientProps {
  allPosts: BlogPost[]
  categories: string[]
}

export function BlogClient({ allPosts, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.frontmatter.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || post.frontmatter.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        My chatter about life and the tech realm
      </h1>
      
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-8">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold mb-2">Categories</h2>
                <Button
                  variant={selectedCategory === null ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Posts
                  <Badge variant="secondary" className="ml-auto">
                    {allPosts.length}
                  </Badge>
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    <Badge variant="secondary" className="ml-auto">
                      {allPosts.filter(post => post.frontmatter.category === category).length}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="grid md:grid-cols-[2fr_3fr] gap-6">
                  <Image
                    src={post.frontmatter.featureImage}
                    alt={post.frontmatter.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full rounded-l-lg"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.frontmatter.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.frontmatter.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontmatter.tags.map((tag: string) => (
                        <Badge 
                          key={`${post.slug}-${tag}`}
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US')}
                      </div>
                      <span className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1">
                        Read more
                        <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
