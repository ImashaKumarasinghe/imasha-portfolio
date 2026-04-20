"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

// Medium icon is not in lucide-react, so we use react-icons
import { FaMedium } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      alert("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-20">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#06070c]" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.25),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <div className="grid gap-6 md:gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Get in Touch
            </h2>

            <p className="mt-4 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/70">
              Whether you're looking for a skilled developer for your next
              project, want to collaborate on innovative solutions, or just want
              to say hello, I'd love to hear from you.
            </p>

            <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
              {/* Email */}
              <div className="group flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 p-3 md:p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-white">Email</p>
                  <p className="text-xs md:text-sm text-white/70 truncate">
                    imakumarasinghe00@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 p-3 md:p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-white">Phone</p>
                  <p className="text-xs md:text-sm text-white/70">+94 76 573 5091</p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 p-3 md:p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-white">Location</p>
                  <p className="text-xs md:text-sm text-white/70">Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-4 md:p-7 backdrop-blur-md lg:p-10">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Send me a message
            </h3>

            <form
              className="mt-5 md:mt-7 space-y-4 md:space-y-5"
              onSubmit={handleSubmit}
            >
              <Field label="Name">
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg md:rounded-xl border border-white/10 bg-black/30 px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg md:rounded-xl border border-white/10 bg-black/30 px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg md:rounded-xl border border-white/10 bg-black/30 px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </Field>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 md:px-5 py-2 md:py-3 text-xs md:text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:brightness-110 active:scale-[0.99]"
              >
                <Send className="h-4 w-4 transition group-hover:-translate-y-[1px]" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-white/70">
        {label}
      </span>
      {children}
    </label>
  );
}

function SocialIcon({
  href,
  label,
  icon,
  hover,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  hover: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition ${hover}`}
    >
      {icon}
    </Link>
  );
}