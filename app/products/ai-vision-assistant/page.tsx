"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { 
  Eye,
  ArrowRight,
  CheckCircle2,
  Camera,
  Navigation,
  ShoppingCart,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";

export default function AIVisionAssistantPage() {
  const features = [
    {
      title: "Real-Time Object Recognition",
      description: "Advanced computer vision AI identifies objects, text, and scenes in real-time to help users navigate their environment.",
      icon: Camera,
    },
    {
      title: "Text Reading & OCR",
      description: "Reads text from documents, signs, labels, and screens aloud, making written information accessible.",
      icon: BookOpen,
    },
    {
      title: "Navigation Assistance",
      description: "Provides guidance for navigation, obstacle detection, and spatial awareness to help users move safely.",
      icon: Navigation,
    },
    {
      title: "Shopping Support",
      description: "Identifies products, reads prices, and helps users make informed shopping decisions independently.",
      icon: ShoppingCart,
    },
    {
      title: "Daily Life Activities",
      description: "Assists with everyday tasks like identifying food items, reading expiration dates, and recognizing faces.",
      icon: Users,
    },
    {
      title: "Fast & Accurate",
      description: "Leverages cutting-edge AI models for rapid, accurate recognition and description of visual content.",
      icon: Zap,
    },
  ];

  const benefits = [
    "Enhances independence and quality of life for visually impaired individuals",
    "Provides real-time assistance for daily activities and navigation",
    "Makes written information accessible through text-to-speech",
    "Supports shopping, reading, and social interactions",
    "Continuously improving accuracy through advanced AI technology",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
              AI Vision Assistant
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            An AI-based help app for blind and visually impaired people, serving as their eyes 
            for daily life chores and activities. Empowering independence through advanced 
            computer vision technology.
          </p>
        </div>

        {/* Overview Section */}
        <Card variant="default" className="mb-12 p-6 sm:p-8">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl mb-4">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                The AI Vision Assistant is a transformative accessibility solution designed to 
                empower blind and visually impaired individuals in their daily lives. Using 
                advanced computer vision and artificial intelligence, the app acts as a digital 
                pair of eyes, helping users navigate the world with greater confidence and independence.
              </p>
              <p>
                The application leverages state-of-the-art AI models to recognize objects, read 
                text, identify scenes, and provide real-time audio descriptions of the user&apos;s 
                environment. Whether it&apos;s reading a menu, identifying products while shopping, 
                or navigating unfamiliar spaces, the AI Vision Assistant provides the support 
                needed for independent living.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10  px-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
            {features.map((feature, index) => (
              <Card key={index} variant="default" className="p-4 sm:p-6 group hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <Card variant="default" className="mb-12 sm:mb-16 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card variant="default" className="mb-12 sm:mb-16 p-6 sm:p-8">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl mb-4">Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Reading & Documents:</span>{" "}
                Read menus, documents, signs, labels, and any printed or digital text aloud.
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Shopping:</span>{" "}
                Identify products, read prices, check expiration dates, and compare items while shopping.
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Navigation:</span>{" "}
                Get assistance with navigation, obstacle detection, and understanding spatial layouts.
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Daily Activities:</span>{" "}
                Help with everyday tasks like identifying food items, recognizing faces, and understanding scenes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center px-4 sm:px-6">
          <Card variant="default" className="p-6 sm:p-8">
            <CardContent>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 ">
                Interested in Learning More?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Contact us to learn more about the AI Vision Assistant and how it can enhance 
                independence and accessibility for visually impaired individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild variant="gradient" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto shadow-md">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[44px] sm:min-h-[48px] w-full sm:w-auto font-semibold">
                  <Link href="/products">View All Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

