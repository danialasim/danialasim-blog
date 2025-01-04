"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 md:p-6">
      <div className="text-center space-y-8">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-md mx-auto"
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto mt-8"
        >
          <div className="relative w-full h-48">
            <svg
              className="w-full h-full text-muted-foreground/20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
        </motion.div>

        {/* Additional Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm text-muted-foreground"
        >
          If you believe this is a mistake, please don&apos;t hesitate to{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact our support team
          </Link>
          .
        </motion.p>
      </div>
    </div>
  )
}

