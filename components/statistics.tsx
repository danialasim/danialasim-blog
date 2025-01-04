"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Brain, Users, Code } from 'lucide-react'

const stats = [
  {
    title: "Projects Completed",
    value: "50+",
    icon: Code,
    description: "Successfully delivered AI solutions"
  },
  {
    title: "Research Papers",
    value: "15",
    icon: Brain,
    description: "Published in top conferences"
  },
  {
    title: "Happy Clients",
    value: "100+",
    icon: Users,
    description: "Across various industries"
  },
  {
    title: "Awards",
    value: "12",
    icon: Award,
    description: "Recognition for innovation"
  }
]

export function Statistics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
              >
                <stat.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="font-semibold">{stat.title}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

