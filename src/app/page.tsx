"use client"

import Particles from "@/components/ui/particles";
import { ArrowRightIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import { submitForm } from "@/app/actions";
import { useState } from "react";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div>
      <main>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-red-100 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Image src="/logo.svg" alt="RedNote Pro" width={32} height={32} />
                <div className="flex items-center gap-6">
                  <a href="/" className="text-red-500 font-medium hover:text-red-600 transition-colors">
                    Home
                  </a>
                  <a href="/blogs" className="text-gray-600 font-medium hover:text-red-500 transition-colors">
                    Blogs
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="flex flex-col md:flex-row items-center max-w-[1200px] justify-between w-full mx-auto px-4 md:px-0">
          <div className="flex-1 text-center md:text-left mr-12">
            <Image src="/logo.svg" alt="RedNote Pro" width={100} height={100} className="mx-auto md:mx-0" />
            <h1 className="text-4xl md:text-6xl text-red-500 font-extrabold my-4">RedPro</h1>
            <p className="text-xl md:text-2xl text-red-400">Want to grow your business on RedNote (Xiaohongshu)? <br className="hidden md:block"/> We are here to help.</p>
            <a href="#contact" className="inline-flex bg-red-500 shadow-md text-white px-4 py-2 my-8 md:my-12 w-[200px] rounded-lg items-center justify-center gap-2 hover:gap-4 hover:opacity-80 transition-all duration-300">Let's Talk<ArrowRightIcon className="w-4 h-4"/></a>
          </div>
          <div className="flex-2 h-[400px] md:h-[730px] flex items-center justify-center">
            <Image
              src="/hero-screen.png"
              alt="RedNote Pro Dashboard"
              width={800}
              height={800}
              className="object-cover w-full md:w-auto"
              priority
            />
        </div>
          <Particles
            className="absolute inset-0 z-0"
            quantity={150}
            ease={40}
            color={"#ff0000"}
            refresh
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-red-500">What We Provide</h2>
          <div className="flex flex-col items-center justify-center w-full mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100 hover:border-red-300 transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Localized Audience Growth</h3>
                <p className="text-gray-600">Don't speak Chinese? We'll help you grow your audience on RedNote with our localized account management.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100 hover:border-red-300 transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Marketing Strategy</h3>
                <p className="text-gray-600">Want to grow your business on RedNote but don't know where to start? We'll help you design a plan.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100 hover:border-red-300 transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Influencer Matching</h3>
                <p className="text-gray-600">We will help you find the right local influencers to collaborate with, and help you with the negotiation process.</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mt-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-lg border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800">For English Speakers</h3>
                </div>
                <p className="text-gray-600">
                  Our team consists of bilingual members who have years of experience in the Xiaohongshu community. We'll design a tailored plan for you to develop your business on RedNote with <b>high SEO</b> and <b>low account penalty risk</b>.
                </p>
              </div>
              
              <div className="flex-1 p-6 bg-white rounded-lg shadow-lg border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800">适用于中文用户</h3>
                </div>
                <p className="text-gray-600">
                  为小红书内容创作者提供专业的数据分析和优化建议。我们的平台提供完整的中文界面和支持，帮助您更好地了解受众，优化内容策略，提升账号影响力。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-red-500">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-12 w-full max-w-6xl">
            <div className="flex-1">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Inquiry Below</h3>
                    <p className="text-gray-600">After submitting your inquiry, we will get back to you within 24 hours. We will discuss your needs and assign a dedicated team member to assist you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Localized Account Management</h3>
                    <p className="text-gray-600">A dedicated account manager will help you manage your Xiaohongshu account, including content creation, community engagement, audience growth, and analytics. We'll also provide you with a plan to monetize your account.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Influencer Marketing</h3>
                    <p className="text-gray-600">We will help you find the right local influencers to collaborate with, and help you with the negotiation process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <Image
                src="/feed.png"
                alt="RedNote Pro Dashboard Steps"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div id="contact" className="flex flex-col items-center justify-center w-full mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-red-500">Step 1: Submit Your Inquiry</h2>
          <form
            action={async (formData) => {
              await submitForm(formData);
              setShowSuccess(true);
              setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
            }}
            className="w-full max-w-lg mt-8 space-y-6"
          >
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email" 
                id="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="(Optional) Want to leave a message?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity duration-200 flex items-center gap-4 justify-center"
            >
              Send Message <SendIcon className="w-4 h-4"/>
            </button>
          </form>
        </div>
      </main>
      <footer className="w-full bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} All rights reserved
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-600 hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
