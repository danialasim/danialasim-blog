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
      "• 100 Days of Code: The Complete Python Pro Bootcamp by Angela Yu (2024)",
      "• Machine Learning Specialization by Andrew Ng (2024)", 
      "• TensorFlow for Deep Learning Bootcamp by Zero to Mastery (2024)"
    ]
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "• Freelance AI/ML Engineer – Upwork (2023–Present)\nDesigned and implemented custom AI solutions, including hand gesture control software and object detection systems, tailored to client needs.",
      "• Frontend and WordPress Developer – Fiverr (2019–2022)\nCreated responsive websites and user interfaces for diverse clients.",
      "• AI-Powered Website Design – Healing Lounge (2024)\nDelivered a custom website for a therapist, combining intuitive features with modern aesthetics."
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
              src="/images/about-page.webp"
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
              Hello! I'm an AI/ML Engineer passionate about developing innovative solutions that bridge the gap between technology and human interaction. With expertise in AI, machine learning, and software development, I've worked on diverse projects ranging from natural language processing to computer vision applications.
            </p>
            <p className="text-muted-foreground">
              My journey in AI was shaped by extensive learning through programs like Angela Yu's 100 Days of Code: The Complete Python Pro Bootcamp and Andrew Ng's Machine Learning Specialization. These experiences laid the foundation for impactful projects, including hand gesture control software that leverages computer vision for intuitive control and an object detection system designed for real-world applications.
            </p>
            <p className="text-muted-foreground">
              When I’m not building intelligent systems, I focus on open-source contributions, showcasing my projects on GitHub, and exploring the latest advancements in AI to create meaningful solutions.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 md:grid-cols-2">
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
                  <Link href="mailto:danialasimbashir@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

