"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Project, projects } from "@/components/data/projects"

interface ProjectDialogProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[300px] md:h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-lg font-bold">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Button asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.huggingface && (
                <Button asChild>
                  <Link href={project.huggingface} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-2 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
        <p className="text-muted-foreground">
          A showcase of my recent work in AI and machine learning.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer group overflow-hidden h-full flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.huggingface && (
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 mb-4 overflow-hidden">
                  {project.tags
                    .filter(tag => tag.length <= 12)
                    .slice(0, 5)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-sm whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  {(project.tags.length > 5 || project.tags.some(tag => tag.length > 12)) && (
                    <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-sm whitespace-nowrap">
                      +{project.tags.length - project.tags.filter(tag => tag.length <= 12).slice(0, 5).length}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t mt-auto">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

