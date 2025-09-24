"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaPhone, FaDiscord } from "react-icons/fa"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormSchema = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: FormSchema) {
    setIsSubmitting(true)

    try {
      const response = await emailjs.sendForm(
        "service_185m7xb",
        "template_jhrfdll",
        formRef.current!,
        "OPzKfISUUk4p8vW-B"
      )

      if (response.status === 200) {
        console.log(values)
        reset()
        alert("Thank you for your message. We'll get back to you soon!")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Message failed to send. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918779677738"
    const message = "Hi! I'm coming from your portfolio website. I need website services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/ig.ashh__", 
      color: "hover:text-pink-500",
      description: "Follow my journey"
    },
    {
      name: "X",
      icon: FaTwitter,
      href: "https://linkedin.com/in/talaganaRajesh", 
      color: "hover:text-blue-500",
      description: "Professional network"
    },
    {
      name: "Discord",
      icon: FaDiscord,
      href: "https://discord.com/channels/@me", 
      color: "hover:text-purple-500",
      description: "Lets Connect on Discord"
    },
  ]

  return (
    <section className="bg-black text-white pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Get in Touch</h2>
          <p className="text-sm text-gray-400">
            Feel free to reach out, I'll get back to you soon.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="flex gap-5 max-w-4xl">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-80"
            >
              <div className="bg-zinc-950 border border-zinc-900 rounded-md p-6 hover:border-zinc-800 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Let's Connect</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Ready to start your project? Reach out through any of these channels.
                </p>

                {/* Phone Number */}
                <div className="mb-6">
                  <div 
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-3 p-3 bg-[#0f0f0f] rounded-md hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="bg-green-500/10 p-2 rounded-md group-hover:bg-green-500/20 transition-colors duration-300">
                      <FaPhone className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">WhatsApp</p>
                      <p className="text-gray-400 text-xs">+91 8779677738</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex-1">
                  <h4 className="text-base font-medium text-gray-200 mb-3">Follow Me</h4>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="mb-3"
                    > 
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-[#0f0f0f] rounded-md hover:bg-[#2a2a2a] transition-all duration-300 group"
                      >
                        <div className="bg-gray-800 p-2 rounded-md group-hover:bg-gray-700 transition-colors duration-300">
                          <social.icon className={`text-lg text-gray-400 group-hover:text-white ${social.color} transition-colors duration-300`} />
                        </div>
                        <div>
                          <p className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-sm">{social.name}</p>
                          <p className="text-gray-400 text-xs">{social.description}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-96 flex items-center"
            >
              <div className="w-full">
                <div className="bg-[#1a1a1a] border border-gray-700 rounded-md p-6 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Send a Message</h3>
                  <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="John Doe"
                        className="mt-1 block w-full py-3 px-4 bg-[#0f0f0f] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className="mt-1 block w-full py-3 px-4 bg-[#0f0f0f] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-300">Message</label>
                      <textarea
                        {...register("message")}
                        placeholder="Tell me about your project..."
                        className="mt-1 block w-full py-3 px-4 h-full min-h-[120px] bg-[#0f0f0f] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500 resize-none"
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-5 text-black cursor-pointer font-bold bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 py-3 px-6 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}