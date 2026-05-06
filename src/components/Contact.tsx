import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Check, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/contact-interior.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "",
    budget: "",
    startDate: "",
    message: "",
    referral: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you — we've received your project details.",
      description: "A member of the MPG team will review your submission and respond within one business day.",
    });
    setForm({ name: "", email: "", phone: "", location: "", type: "", budget: "", startDate: "", message: "", referral: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-forest-deep py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 gold-rule opacity-60" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: image + info */}
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow text-primary-foreground/70">Contact</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-primary-foreground text-balance">
              Let's talk about
              <br />
              <span className="italic text-gold">your project.</span>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/70 leading-relaxed">
              Tell us what you're building. We'll respond within one business day
              with a candid assessment and a clear path forward — no pressure, no
              sales pitch.
            </p>

            <div className="mt-10 image-reveal aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <img
                src={contactImg}
                alt="Refined construction interior with warm wood and natural light"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:office@monsterprojectgroup.com"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors duration-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">Email</div>
                  <div className="font-serif text-lg">office@monsterprojectgroup.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">Service Area</div>
                  <div className="font-serif text-lg">Miami-Dade · Broward · Palm Beach</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">Response Time</div>
                  <div className="font-serif text-lg">Within 1 business day</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.03] backdrop-blur-md p-8 md:p-12 shadow-elegant my-[130px] text-left"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif italic text-xl text-gold">Begin a conversation</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
                  Confidential
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(305) 000-0000" />
                <Field label="Project Location" name="location" value={form.location} onChange={handleChange} required placeholder="City, County, or Address" />

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    Project type <span className="text-accent">*</span>
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
                  >
                    <option value="" className="bg-forest-deep">Select…</option>
                    <option value="new-construction" className="bg-forest-deep">New Construction</option>
                    <option value="renovation" className="bg-forest-deep">Renovation</option>
                    <option value="commercial" className="bg-forest-deep">Commercial</option>
                    <option value="project-recovery" className="bg-forest-deep">Project Recovery</option>
                    <option value="other" className="bg-forest-deep">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    Approximate Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
                  >
                    <option value="" className="bg-forest-deep">Select…</option>
                    <option value="under-250k" className="bg-forest-deep">Under $250K</option>
                    <option value="250k-500k" className="bg-forest-deep">$250K–$500K</option>
                    <option value="500k-1m" className="bg-forest-deep">$500K–$1M</option>
                    <option value="1m-5m" className="bg-forest-deep">$1M–$5M</option>
                    <option value="5m-plus" className="bg-forest-deep">$5M+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    Estimated Start Date
                  </label>
                  <select
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
                  >
                    <option value="" className="bg-forest-deep">Select…</option>
                    <option value="already-started" className="bg-forest-deep">Already started</option>
                    <option value="within-3-months" className="bg-forest-deep">Within 3 months</option>
                    <option value="3-6-months" className="bg-forest-deep">3–6 months</option>
                    <option value="6-12-months" className="bg-forest-deep">6–12 months</option>
                    <option value="planning" className="bg-forest-deep">Planning phase</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    How did you hear about MPG?
                  </label>
                  <select
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
                  >
                    <option value="" className="bg-forest-deep">Select…</option>
                    <option value="google" className="bg-forest-deep">Google</option>
                    <option value="referral" className="bg-forest-deep">Referral</option>
                    <option value="social-media" className="bg-forest-deep">Social Media</option>
                    <option value="drive-by" className="bg-forest-deep">Drive-by</option>
                    <option value="other" className="bg-forest-deep">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                  Tell us about your project <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Describe your project — what you're building, where you are in the process, and any challenges you're facing."
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="mt-10 group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-gold transition-all duration-500 hover:bg-gold-soft disabled:bg-primary-foreground/20 disabled:text-primary-foreground"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    Send My Project Details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
      {label}
      {required && <span className="text-accent"> *</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
    />
  </div>
);

export default Contact;
