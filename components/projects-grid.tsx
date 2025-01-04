"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectDialog } from "./project-dialog"
import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'
import { Project, projects } from "./data/projects"

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="cursor-pointer group overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
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
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </>
  )
}

