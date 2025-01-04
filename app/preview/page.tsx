"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PreviewPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const handlePreview = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    window.open(url, '_blank')
  }

  return (
    <div className="container py-8 md:py-12">
      <Card className="max-w-md mx-auto p-6">
        <form onSubmit={handlePreview} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">Enter URL to Preview</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://your-site.vercel.app"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading Preview..." : "Preview Site"}
          </Button>
        </form>
      </Card>
    </div>
  )
}

