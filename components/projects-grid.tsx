"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectDialog } from "./project-dialog"
import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'
import { Project } from "./data/projects"

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className="cursor-pointer group overflow-hidden h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between">
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
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                  {project.tags
                    .filter(tag => tag.length <= 12)
                    .slice(0, 5)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  {(project.tags.length > 5 || project.tags.some(tag => tag.length > 12)) && (
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm whitespace-nowrap">
                      +{project.tags.length - project.tags.filter(tag => tag.length <= 12).slice(0, 5).length}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-base sm:text-lg font-bold">{value}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground capitalize">{key}</div>
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
