import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import livingRoomImg from "@/assets/reno-living-room.png";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined;

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  location: "",
  type: "",
  budget: "",
  startDate: "",
  message: "",
  referral: "",
  website: "", // honeypot
};

type FormData = typeof INITIAL_FORM;

async function sendContactForm(form: FormData) {
  if (!APPS_SCRIPT_URL) throw new Error("Contact form is not configured yet.");
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      type: form.type,
      budget: form.budget,
      startDate: form.startDate,
      message: form.message.trim(),
      referral: form.referral,
      website: form.website,
    }),
  });
  const text = await res.text();
  let data: { ok?: boolean; error?: string } = {};
  try { data = JSON.parse(text) as { ok?: boolean; error?: string }; }
  catch { throw new Error("Could not send your message."); }
  if (!data.ok) throw new Error(data.error || "Could not send your message.");
}

const RenoContact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (form.website.trim()) {
      setSubmitted(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSubmitted(false), 4000);
      return;
    }
    setSubmitting(true);
    try {
      await sendContactForm(form);
      setSubmitted(true);
      toast({
        title: "Thank you — we've received your project details.",
        description: "A member of the MPG team will review your submission and respond within one business day.",
      });
      setForm(INITIAL_FORM);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast({
        variant: "destructive",
        title: "We couldn't send your message",
        description: `${message} If the issue persists, please email office@monsterprojectgroup.com directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#1A3EFF] font-semibold">Get Started</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#121C24] leading-[1.05] mb-6">
              Let's talk about{" "}
              <span className="italic font-light text-[#42687B]">your project.</span>
            </h2>
            <p className="text-[#54595F] leading-relaxed mb-10 text-lg">
              Tell us about your renovation goals. We'll reach out within one business day with a plan of action — no obligation.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:office@monsterprojectgroup.com"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-[#1A3EFF]/8 flex items-center justify-center group-hover:bg-[#1A3EFF] transition-colors duration-300">
                  <Mail className="h-4 w-4 text-[#1A3EFF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium">Email Us</div>
                  <div className="font-semibold text-[#121C24] group-hover:text-[#1A3EFF] transition-colors duration-300">
                    office@monsterprojectgroup.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#1A3EFF]/8 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-[#1A3EFF]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium">Service Area</div>
                  <div className="font-semibold text-[#121C24]">Miami-Dade · Broward · Palm Beach</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#1A3EFF]/8 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-[#1A3EFF]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium">Response Time</div>
                  <div className="font-semibold text-[#121C24]">Within 1 business day</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src={livingRoomImg}
                alt="Beautiful renovated living room by Monster Project Group"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F7F5F2] rounded-2xl p-8 md:p-12 border border-[#CACAC5]/30"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#121C24]">Free Project Estimate</h3>
                <p className="text-[#54595F] text-sm mt-1">Fill out the form and we'll be in touch shortly.</p>
              </div>

              {/* Honeypot */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
                <label htmlFor="reno-website">Website</label>
                <input type="text" id="reno-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <RenoField label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                <RenoField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                <RenoField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(305) 000-0000" />
                <RenoField label="Project Location" name="location" value={form.location} onChange={handleChange} required placeholder="City, County, or Address" />

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
                    Project Type <span className="text-[#1A3EFF]">*</span>
                  </label>
                  <select name="type" value={form.type} onChange={handleChange} required className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200">
                    <option value="">Select…</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="home-refresh">Home Refresh</option>
                    <option value="full-renovation">Full Home Renovation</option>
                    <option value="exterior">Exterior Update</option>
                    <option value="new-construction">New Construction</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
                    Approximate Budget
                  </label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200">
                    <option value="">Select…</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-100k">$50K–$100K</option>
                    <option value="100k-250k">$100K–$250K</option>
                    <option value="250k-500k">$250K–$500K</option>
                    <option value="500k-1m">$500K–$1M</option>
                    <option value="1m-plus">$1M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
                    Estimated Start Date
                  </label>
                  <select name="startDate" value={form.startDate} onChange={handleChange} className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200">
                    <option value="">Select…</option>
                    <option value="already-started">Already started</option>
                    <option value="within-3-months">Within 3 months</option>
                    <option value="3-6-months">3–6 months</option>
                    <option value="6-12-months">6–12 months</option>
                    <option value="planning">Planning phase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
                    How did you hear about MPG?
                  </label>
                  <select name="referral" value={form.referral} onChange={handleChange} className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200">
                    <option value="">Select…</option>
                    <option value="google">Google</option>
                    <option value="referral">Referral</option>
                    <option value="social-media">Social Media</option>
                    <option value="drive-by">Drive-by / Signage</option>
                    <option value="real-estate-agent">Real Estate Agent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
                  Tell us about your project <span className="text-[#1A3EFF]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Describe your project — what you're hoping to achieve, where you are in the process, and any specific challenges or requirements."
                  className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm placeholder:text-[#A99F8F] focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={submitting || submitted}
                className="mt-8 group w-full inline-flex items-center justify-center gap-3 bg-[#1A3EFF] text-white text-[11px] uppercase tracking-[0.22em] font-bold py-4 rounded-full transition-all duration-300 hover:bg-[#1533CE] hover:shadow-lg hover:shadow-blue-500/30 disabled:bg-[#CACAC5] disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <><Check className="h-4 w-4" /> Sent! We'll be in touch soon</>
                ) : submitting ? (
                  <>Sending…</>
                ) : (
                  <>
                    Request My Free Estimate
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[10px] text-[#A99F8F]">
                No obligation. We respond within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const RenoField = ({
  label, name, value, onChange, type = "text", required = false, placeholder = "",
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string;
}) => (
  <div>
    <label className="block text-[10px] uppercase tracking-[0.22em] text-[#A99F8F] font-medium mb-2">
      {label}{required && <span className="text-[#1A3EFF] ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-white border border-[#CACAC5] rounded-lg px-4 py-3 text-[#121C24] text-sm placeholder:text-[#A99F8F] focus:border-[#1A3EFF] focus:outline-none focus:ring-2 focus:ring-[#1A3EFF]/20 transition-all duration-200"
    />
  </div>
);

export default RenoContact;
