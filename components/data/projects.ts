export interface ProjectStats {
  [key: string]: string | number
}

export interface Project {
  title: string
  description: string
  image: string
  longDescription: string
  tags: string[]
  github?: string
  huggingface?: string
  liveDemo?: string
  stats: ProjectStats
}

export const projects: Project[] = [
  {
    title: "AI Image Recognition",
    description: "Deep learning model for real-time object detection using state-of-the-art computer vision techniques.",
    image: "/placeholder.svg?height=300&width=600",
    longDescription: "A state-of-the-art computer vision system that can detect and classify objects in real-time using deep learning. Built with PyTorch and optimized for edge devices. Features include multi-object tracking, pose estimation, and real-time performance optimization.",
    tags: ["PyTorch", "Computer Vision", "Deep Learning", "YOLO"],
    github: "https://github.com",
    huggingface: "https://huggingface.co",
    stats: {
      accuracy: "98%",
      speed: "30 FPS",
      models: 5
    }
  },
  {
    title: "NLP Chatbot",
    description: "Advanced conversational AI using transformer models and context-aware response generation.",
    image: "/placeholder.svg?height=300&width=600",
    longDescription: "An intelligent chatbot powered by transformer models, capable of understanding context and generating human-like responses. Features include multi-turn conversations, emotion detection, and integration with various platforms.",
    tags: ["Transformers", "NLP", "PyTorch", "BERT"],
    github: "https://github.com",
    huggingface: "https://huggingface.co",
    stats: {
      accuracy: "95%",
      languages: 10,
      users: "1000+"
    }
  },
  {
    title: "Portfolio Website",
    description: "End-to-end automated machine learning pipeline for model training, testing, and deployment.",
    image: "/projects/web-project.png",
    longDescription: "A modern portfolio website built with React, Next.js, and TailwindCSS. Features include responsive design, server-side rendering, and continuous deployment with Vercel. Optimized for performance and SEO.",
    tags: ["React", "Next.js", "TailwindCSS", "Vercel"],
    github: "https://github.com/danialasim/danialasim-blog",
    huggingface: "https://www.danialasim.com/",
    stats: {
      deployments: 100,
      uptime: "99.9%",
      performance: "100%"
    }
  }
] 