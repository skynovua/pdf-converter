"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface TextInputProps {
  onConvert: (text: string) => Promise<void>;
}

export const CreatePdfForm = ({ onConvert }: TextInputProps) => {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (text.trim()) {
        await onConvert(text);
        setText("");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
        rows={10}
        className="w-full"
      />
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Convert to PDF
      </Button>
    </form>
  );
};
