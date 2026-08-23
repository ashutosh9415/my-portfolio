import { useState } from "react";
import ThankYou from "./ThankYou";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formsubmit.co/ajax/vashutosh236@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong while sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return <ThankYou />;
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900/40 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a project, opportunity, or just want to say hello?
            Feel free to send me a message.
          </p>

        </div>

        {/* ================= CONTACT FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm md:p-8"
        >
          {/* FormSubmit Settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />
          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          {/* Name + Email */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

          </div>

          {/* Subject */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="What would you like to discuss?"
              required
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />

          </div>

          {/* Message */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
              className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            ></textarea>

          </div>

          {/* Send Button */}
          <div className="mt-6 flex justify-center md:justify-start">

            <button
              type="submit"
              disabled={sending}
              className="group rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              {sending ? "Sending..." : "Send Message"}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contact;