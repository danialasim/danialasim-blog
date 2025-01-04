"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import { toast } from "sonner"

export default function ContactPage() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Message sent successfully!")
      const form = document.querySelector("form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
    setPending(false)
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Subject
                </label>
                <Input id="subject" name="subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
              <CardDescription>
                Available for meetings and calls during these hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm text-muted-foreground">9:00 AM - 5:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm text-muted-foreground">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Response</CardTitle>
              <CardDescription>
                Typical response time for inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Within 24 Hours</p>
                <p className="text-sm text-muted-foreground">For all business inquiries</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

