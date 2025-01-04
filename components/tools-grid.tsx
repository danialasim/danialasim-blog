"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "TensorFlow",
    emoji: "🧠",
    category: "Deep Learning"
  },
  {
    name: "PyTorch",
    emoji: "🔥",
    category: "Deep Learning"
  },
  {
    name: "Python",
    emoji: "🐍",
    category: "Programming"
  },
  {
    name: "Scikit-learn",
    emoji: "🤖",
    category: "Machine Learning"
  },
  {
    name: "Keras",
    emoji: "⚡",
    category: "Deep Learning"
  },
  {
    name: "NLTK",
    emoji: "📚",
    category: "NLP"
  },
  {
    name: "spaCy",
    emoji: "🔤",
    category: "NLP"
  },
  {
    name: "OpenAI",
    emoji: "🌟",
    category: "AI"
  },
  {
    name: "Hugging Face",
    emoji: "🤗",
    category: "NLP"
  },
  {
    name: "NumPy",
    emoji: "🔢",
    category: "Data Science"
  }
]

export function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden border-none bg-background/50 transition-colors hover:bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl mb-3" role="img" aria-label={tool.name}>
                {tool.emoji}
              </span>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

