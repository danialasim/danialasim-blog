"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, ArrowDown, ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { ToolsGrid } from "@/components/tools-grid"
import { ProjectsGrid } from "@/components/projects-grid"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface HomeClientProps {
  recentPosts: any[]
  categories: string[]
}

export function HomeClient({ recentPosts, categories }: HomeClientProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="flex flex-col space-y-4 text-center lg:text-left order-2 lg:order-1 lg:pl-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto lg:mx-0"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit">
                  <Brain className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                </div>
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                AI/ML Engineer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                Hello! I'm a passionate AI/ML Engineer with expertise in developing cutting-edge solutions 
                using machine learning and deep learning technologies.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/projects">
                    View Projects
                    <ArrowDown className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[300px] sm:h-[400px] lg:h-[550px] order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/images/hero-section.webp"
                alt="AI/ML Engineer"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Tech Stack
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Tools & Technologies</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto px-4">
              Leveraging cutting-edge tools and frameworks in AI, Machine Learning, and Natural Language Processing.
            </p>
          </motion.div>
          <ToolsGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Portfolio
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto px-4">
              Explore some of my recent work in AI and machine learning.
            </p>
          </motion.div>
          <ProjectsGrid />
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
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
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={post.frontmatter.featureImage}
                      alt={post.frontmatter.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.frontmatter.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.frontmatter.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {new Date(post.frontmatter.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {`${Math.ceil(post.frontmatter.readingTime)} min read`}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Categories</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category} href={`/blog?category=${category}`}>
                <Card className="hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {recentPosts.filter(post => post.frontmatter.category === category).length} posts
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="rounded-2xl bg-primary/10 p-6 md:p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
              Let's Build Something Amazing Together
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg mt-4">
              Ready to transform your ideas into reality? Let's collaborate and create innovative AI solutions.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

