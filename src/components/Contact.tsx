import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/contact-interior.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you — message received.",
      description: "We'll respond within one business day.",
    });
    setForm({ name: "", email: "", phone: "", type: "", message: "" });
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
              Your project,
              <br />
              <span className="italic text-gold">led with care.</span>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/70 leading-relaxed">
              MPG provides owner-side leadership designed to keep your project
              aligned from day one. Tell us about your vision — we'll be in touch
              within a business day.
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
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">Office</div>
                  <div className="font-serif text-lg">Fort Lauderdale, FL</div>
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
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                    Project type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
                  >
                    <option value="" className="bg-forest-deep">Select…</option>
                    <option value="residential" className="bg-forest-deep">Luxury residential</option>
                    <option value="hospitality" className="bg-forest-deep">Hospitality</option>
                    <option value="workplace" className="bg-forest-deep">Workplace / Office</option>
                    <option value="mixed-use" className="bg-forest-deep">Mixed-use / Development</option>
                    <option value="other" className="bg-forest-deep">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Location, scope, timeline…"
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
                    Send Message
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
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
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
      className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors duration-500 font-serif text-lg"
    />
  </div>
);

export default Contact;
