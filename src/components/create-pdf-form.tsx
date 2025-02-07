"use client"

import type React from "react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface TextInputProps {
  onConvert: (text: string) => void
}

export function CreatePdfForm({ onConvert }: TextInputProps) {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onConvert(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
        rows={10}
        className="w-full"
      />
      <Button type="submit" className="w-full">
        Convert to PDF
      </Button>
    </form>
  )
}

