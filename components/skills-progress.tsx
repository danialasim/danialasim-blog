"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Natural Language Processing", level: 85 },
  { name: "MLOps", level: 75 },
  { name: "Data Visualization", level: 80 },
]

export function SkillsProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

