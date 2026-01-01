"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    requestDemo: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "", requestDemo: false });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="default" className="max-w-2xl mx-auto hover:shadow-colored transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 dark:bg-gray-800 dark:text-white resize-none"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="requestDemo"
              checked={formData.requestDemo}
              onChange={(e) => setFormData({ ...formData, requestDemo: e.target.checked })}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
            />
            <label htmlFor="requestDemo" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Request Demo
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
              Something went wrong. Please try again later.
            </div>
          )}

          <Button type="submit" variant="gradient" size="lg" className="w-full" isLoading={isSubmitting}>
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

