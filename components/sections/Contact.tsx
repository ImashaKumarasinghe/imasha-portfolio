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
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#06070c]" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.25),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">Get in Touch</div>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Whether you&apos;re looking for a skilled developer for your next
              project, want to collaborate on innovative solutions, or just want
              to say hello, I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="text-sm text-white/70">
                    imakumarasinghe00@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <p className="text-sm text-white/70">+94 76 573 5091</p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-blue-400/40 hover:bg-white/7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="text-sm text-white/70">Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Follow */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-white/90">Follow me on</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <SocialIcon
                  href="https://www.linkedin.com/in/imasha-kumarasinghe-8413b72b4/"
                  label="LinkedIn"
                  icon={<Linkedin className="h-5 w-5" />}
                />
                <SocialIcon
                  href="https://github.com/ImashaKumarasinghe"
                  label="GitHub"
                  icon={<Github className="h-5 w-5" />}
                />
                <SocialIcon
                  href="#"
                  label=""
                  icon={<Instagram className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>

          {/* RIGHT (FORM) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md lg:p-10">
            <h3 className="text-2xl font-semibold text-white">
              Send me a message
            </h3>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name  */}
              <div >
                <Field label="Name">
                  <input
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </Field>

              </div>

              {/* email */}
              <Field label="Email">
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </Field>

              {/* Message */}
              <Field label="Message">
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </Field>

              {/* Button */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:brightness-110 active:scale-[0.99]"
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
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-md transition hover:border-blue-400/50 hover:text-white hover:bg-white/10"
    >
      {icon}
    </Link>
  );
}