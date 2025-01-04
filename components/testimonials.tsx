"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Working with this AI engineer has transformed our business processes. The solutions provided were innovative and highly effective.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at AI Innovations",
    content: "Exceptional understanding of machine learning concepts and their practical applications. Delivered outstanding results.",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DataTech",
    content: "The AI solutions implemented have significantly improved our product's performance and user experience.",
    image: "/placeholder.svg?height=40&width=40"
  }
]

export function Testimonials() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
        <p className="mt-4 text-muted-foreground">What others say about my work</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

