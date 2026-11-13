"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { EASE } from "./motion";
import { services } from "@/lib/data";

type Fields = { name: string; organisation: string; email: string; phone: string; interest: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", organisation: "", email: "", phone: "", interest: "", message: "", consent: false };

export function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone && !/^[+\d][\d\s-]{7,15}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!f.interest) e.interest = "Please choose an enquiry type.";
  if (f.message.trim().length < 20) e.message = "Please share a little more detail (at least 20 characters).";
  if (!f.consent) e.consent = "Please confirm so we can respond to your enquiry.";
  return e;
}

export function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...f, [k]: v };
    setF(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(f));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, interest: true, message: true, consent: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setF(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Fields) => (touched[k] ? errors[k] : undefined);

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="border-t border-forest/15 pt-10"
          role="status"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
            <Check className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="mt-8 font-display text-3xl font-semibold text-forest">Thank you — we&rsquo;ve received your enquiry.</h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted">A member of our team will get back to you within two working days.</p>
          <button type="button" onClick={() => setStatus("idle")} className="link-line mt-8 text-sm font-medium text-forest">
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          <Field id="name" label="Full name" required error={err("name")}>
            <input id="cf-name" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} className={inputCls(!!err("name"))} aria-invalid={!!err("name")} aria-describedby={err("name") ? "cf-name-err" : undefined} />
          </Field>
          <Field id="organisation" label="Organisation">
            <input id="cf-organisation" autoComplete="organization" value={f.organisation} onChange={(e) => set("organisation", e.target.value)} className={inputCls(false)} />
          </Field>
          <Field id="email" label="Email address" required error={err("email")}>
            <input id="cf-email" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} className={inputCls(!!err("email"))} aria-invalid={!!err("email")} aria-describedby={err("email") ? "cf-email-err" : undefined} />
          </Field>
          <Field id="phone" label="Phone" error={err("phone")}>
            <input id="cf-phone" type="tel" autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} className={inputCls(!!err("phone"))} aria-invalid={!!err("phone")} aria-describedby={err("phone") ? "cf-phone-err" : undefined} />
          </Field>
          <Field id="interest" label="Enquiry type" required error={err("interest")} full>
            <select id="cf-interest" value={f.interest} onChange={(e) => set("interest", e.target.value)} onBlur={() => blur("interest")} className={`${inputCls(!!err("interest"))} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23173F32%22 stroke-width=%221.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_0_center] bg-no-repeat pr-8`} aria-invalid={!!err("interest")} aria-describedby={err("interest") ? "cf-interest-err" : undefined}>
              <option value="">Select an option</option>
              {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
              <option value="Integrated / multiple services">Integrated / multiple services</option>
              <option value="Partnership or vendor enquiry">Partnership or vendor enquiry</option>
              <option value="Other">Other</option>
            </select>
          </Field>
          <Field id="message" label="Tell us about your requirement" required error={err("message")} full>
            <textarea id="cf-message" rows={5} value={f.message} onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")} className={`${inputCls(!!err("message"))} resize-y`} aria-invalid={!!err("message")} aria-describedby={err("message") ? "cf-message-err" : undefined} />
          </Field>
          <div className="sm:col-span-2">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
              <input id="cf-consent" type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} onBlur={() => blur("consent")} className="mt-0.5 h-4 w-4 shrink-0 accent-forest" aria-invalid={!!err("consent")} />
              <span>I agree that Haritvanta may use these details to respond to my enquiry, as described in the <a href="/privacy-policy" className="text-forest underline underline-offset-2">Privacy Policy</a>.</span>
            </label>
            {err("consent") && <p className="mt-2 text-sm text-[#B4441B]">{err("consent")}</p>}
          </div>
          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative inline-flex w-fit items-center gap-3 overflow-hidden bg-forest px-8 py-4 font-medium text-white before:absolute before:inset-0 before:translate-y-full before:bg-bhagwa before:transition-transform before:duration-500 before:ease-expo hover:before:translate-y-0 disabled:opacity-70"
            >
              <span className="relative">{status === "sending" ? "Sending…" : "Send enquiry"}</span>
              {status === "sending" ? <Loader2 className="relative h-4 w-4 animate-spin" aria-hidden /> : <ArrowRight className="relative h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" aria-hidden />}
            </button>
            {status === "error" && (
              <p className="text-sm text-[#B4441B]" role="alert">Something went wrong. Please try again or email us directly.</p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function inputCls(invalid: boolean) {
  return `peer w-full border-0 border-b bg-transparent px-0 py-3 text-lg text-charcoal outline-none transition-colors duration-300 placeholder:text-muted/60 focus:ring-0 ${
    invalid ? "border-[#B4441B]" : "border-forest/25 focus:border-forest"
  }`;
}

function Field({ id, label, required, error, full, children }: { id: string; label: string; required?: boolean; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={`cf-${id}`} className="eyebrow block text-muted">
        {label} {required && <span className="text-bhagwa" aria-hidden>*</span>}
      </label>
      {children}
      {error && <p id={`cf-${id}-err`} className="mt-2 text-sm text-[#B4441B]">{error}</p>}
    </div>
  );
}
