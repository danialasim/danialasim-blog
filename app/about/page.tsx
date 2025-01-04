"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, BookOpen, Award, Briefcase, Download } from 'lucide-react'
import { SocialLinks } from "@/components/social-links"

// Custom Hugging Face icon component
function HuggingFaceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5c.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32zm4 0c.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32z"/>
    </svg>
  )
}

const achievements = [
  {
    icon: Award,
    title: "Awards & Recognition",
    items: [
      "Best AI Paper Award - ICML 2023",
      "Top AI Researcher - Tech Magazine",
      "Innovation Excellence Award"
    ]
  },
  {
    icon: BookOpen,
    title: "Publications",
    items: [
      "Deep Learning Architectures (2023)",
      "Advanced NLP Techniques (2022)",
      "Computer Vision Systems (2021)"
    ]
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "Senior AI Engineer - Tech Corp",
      "ML Researcher - AI Lab",
      "Data Scientist - StartupX"
    ]
  }
]

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "PyTorch",
  "TensorFlow",
  "MLOps",
  "Data Science"
]

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[280px_1fr]">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground/20 animate-pulse" />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-background relative z-10"
              priority
            />
          </div>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <SocialLinks />
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-gray dark:prose-invert">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Hello! I'm an AI/ML Engineer passionate about pushing the boundaries of artificial intelligence
              and machine learning. With over 5 years of experience in the field, I've worked on various
              cutting-edge projects ranging from computer vision to natural language processing.
            </p>
            <p className="text-muted-foreground">
              My journey in AI began during my graduate studies, where I focused on deep learning
              architectures and their applications. Since then, I've been fortunate to work with
              amazing teams and contribute to groundbreaking projects that have made real-world impact.
            </p>
            <p className="text-muted-foreground">
              When I'm not training models or optimizing algorithms, you can find me writing technical
              blogs, contributing to open-source projects, or speaking at AI conferences. I'm particularly
              interested in making AI more accessible and ethical.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-4">{achievement.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {achievement.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-primary/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interested in collaboration?</h3>
                  <p className="text-muted-foreground">Let's work together on your next AI project.</p>
                </div>
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

