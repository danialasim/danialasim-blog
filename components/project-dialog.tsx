"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Project } from "./data/projects"

interface ProjectDialogProps {
  isOpen: boolean
  onClose: () => void
  project: Project
}

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row max-h-[85vh] md:max-h-none">
          <div className="relative w-full md:w-1/2 h-[160px] sm:h-[200px] md:h-auto shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground text-sm md:text-base">{project.longDescription}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-2 md:p-3 bg-muted rounded-lg">
                    <div className="text-sm md:text-lg font-bold">{value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.github && (
                  <Button size="sm" className="flex-1 md:flex-none h-8 md:h-10 text-sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.huggingface && (
                  <Button size="sm" className="flex-1 md:flex-none h-8 md:h-10 text-sm" asChild>
                    <Link href={project.huggingface} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

