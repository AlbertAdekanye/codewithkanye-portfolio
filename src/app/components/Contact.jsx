"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  ArrowUpRight,
  LoaderCircle,
  Mail,
} from "lucide-react";

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully!");

      form.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      toast.error(
        "Message could not be sent. Please email me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Contact introduction */}
        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            04 — Contact
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Have an idea? Let&apos;s build something
            people enjoy using.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m open to frontend, full-stack,
            freelance, and collaborative opportunities.
            Tell me what you&apos;re working on.
          </p>

          <a
            href="mailto:adekanyealbert22@gmail.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:text-lime-200 sm:text-base"
          >
            <Mail size={18} />

            <span>adekanyealbert22@gmail.com</span>

            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Contact form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 rounded-3xl border border-white/10 bg-zinc-900/60 p-5 shadow-2xl shadow-black/20 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">
                Name
              </span>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/10"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">
                Email
              </span>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/10"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-zinc-300">
              Subject
            </span>

            <input
              type="text"
              name="subject"
              placeholder="What would you like to build?"
              required
              className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-zinc-300">
              Message
            </span>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell me a little about your project..."
              required
              className="w-full resize-y rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/10"
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-400 px-6 py-3.5 font-semibold text-zinc-950 transition hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSending ? (
              <>
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
                Sending...
              </>
            ) : (
              <>
                Send message
                <ArrowUpRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}