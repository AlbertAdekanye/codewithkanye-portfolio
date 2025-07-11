'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jouf2l5',
        'template_28phohc',
        form.current,
        'svPfhxmJcIUl7G9gV'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact" className="px-6 md:px-24 py-20 text-center bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8">Contact Me</h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-12">
        Have a project idea or just want to say hi? Let’s connect.
      </p>

      <div className="max-w-xl mx-auto bg-gray-800/40 p-6 rounded-xl shadow-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-full text-white font-medium"
          >
            🚀 Send Message
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-400">
          or email me directly at{" "}
          <a href="mailto:albertadekanye.dev@gmail.com" className="text-purple-400 hover:underline">
            adekanyealbert22@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
