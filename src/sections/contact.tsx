"use client";

import { motion } from "motion/react";
import { Control } from "@/components/control";
import { SectionHead } from "@/components/section-head";
import { contactChannels, identity } from "@/content/portfolio";
import { easePlot } from "@/lib/motion";

export function Contact() {
  const primary = contactChannels.find((channel) => channel.primary) ?? contactChannels[0];

  return (
    <section id="sht-5" aria-labelledby="contact-title" className="plate scroll-mt-6 pb-28">
      <SectionHead
        sheet="Issue record · 05"
        title="Issue to"
        note="If any of this fits what you are hiring for, the fastest route is email. I answer within a day."
      />

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.7, ease: easePlot }}
        >
          <a
            href={primary.href}
            className="sheet-wide block text-[clamp(1.5rem,4.2vw,3rem)] font-semibold uppercase leading-[1.05] tracking-[-0.035em] text-ink underline decoration-rule-strong decoration-1 underline-offset-[0.14em] transition-colors duration-300 hover:text-redline-ink hover:decoration-redline-ink"
          >
            {primary.value.includes("@")
              ? (() => {
                  const [local, domain] = primary.value.split("@");
                  return (
                    <>
                      <span className="inline-block">{local}@</span>
                      <span className="inline-block">{domain}</span>
                    </>
                  );
                })()
              : primary.value}
          </a>
          <p className="measure mt-8 text-base leading-relaxed text-ink-2">{identity.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Control href={primary.href} variant="redline" note="REPLY 24H">
              Send an email
            </Control>
            <Control
              href={identity.resume}
              download={`${identity.firstName} ${identity.lastName} CV.png`}
              newTab
            >
              Download CV
            </Control>
          </div>
        </motion.div>

        <motion.dl
          className="border-t border-rule-strong md:col-span-5 md:col-start-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {contactChannels.map((channel) => (
            <div
              key={channel.label}
              className="flex items-baseline justify-between gap-6 border-b border-rule py-4"
            >
              <dt className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
                {channel.label}
              </dt>
              <dd className="min-w-0">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="block truncate text-[0.9375rem] text-ink underline decoration-rule-strong underline-offset-4 transition-colors duration-300 hover:text-redline-ink hover:decoration-redline-ink"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
            <dt className="mono-tight text-[0.5625rem] uppercase tracking-[0.2em] text-ink-3">
              Based in
            </dt>
            <dd className="text-[0.9375rem] text-ink">{identity.location}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
