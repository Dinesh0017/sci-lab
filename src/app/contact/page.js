"use client";
import React from "react";

export default function ContactUs() {
  return (
    <section
      className="mx-20 bg-blue-200/80 rounded-2xl shadow-lg p-10 text-foreground min-h-screen"
    >
      <h2 className="flex text-3xl md:text-4xl font-extrabold text-textprimary mb-6 justify-center"
        style={{ textShadow: "2px 2px 6px rgba(147, 197, 253, 0.7)" }}>
        Get in Touch
      </h2>
      <form className="space-y-6 max-w-xl mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-100 text-foreground border border-gray-300 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-100 text-foreground border border-gray-300 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-100 text-foreground border border-gray-300 focus:ring-primary focus:border-primary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
