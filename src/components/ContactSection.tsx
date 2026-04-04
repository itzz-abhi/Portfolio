import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// =====================================================
// SETUP STEPS (one-time, free):
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail recommended) → note your SERVICE_ID
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{message}}
//    → note your TEMPLATE_ID
// 4. Go to Account → API Keys → copy your PUBLIC_KEY
// 5. Replace the 3 constants below with your real values
// =====================================================
const EMAILJS_SERVICE_ID = "service_vjjlhou";
const EMAILJS_TEMPLATE_ID = "template_5ofrsid";
const EMAILJS_PUBLIC_KEY = "NIW9V4ML0Pb0SlVlW";

type Status = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg(
        error?.text || "Something went wrong. Please try again or email me directly."
      );
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">04 —</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
                disabled={isLoading}
              />
            </div>

            {/* Success Message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-500 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4" />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-500 text-sm font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                {errorMsg}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading || status === "success"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">itsabhi8433@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+91-8433153892</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Mathura, Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;