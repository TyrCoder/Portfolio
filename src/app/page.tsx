import { SheetFrame } from "@/components/sheet-frame";
import { TitleBlock } from "@/components/title-block";
import { Contact } from "@/sections/contact";
import { Masthead } from "@/sections/masthead";
import { Materials } from "@/sections/materials";
import { Revisions } from "@/sections/revisions";
import { Work } from "@/sections/work";
import { contactChannels, identity, revisions, site } from "@/content/portfolio";
import { sheetSet } from "@/lib/sheets";

function issueDate() {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date())
    .toUpperCase();
}

export default function Page() {
  const fullName = `${identity.firstName} ${identity.lastName}`;
  const email = contactChannels.find((channel) => channel.href.startsWith("mailto:"));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fullName,
    jobTitle: identity.role,
    description: identity.summary,
    url: site.url,
    email: email?.value,
    address: { "@type": "PostalAddress", addressLocality: identity.location },
    alumniOf: { "@type": "EducationalOrganization", name: identity.school },
    knowsAbout: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Python"],
    sameAs: contactChannels
      .filter((channel) => channel.href.startsWith("http"))
      .map((channel) => channel.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <a
        href="#sht-2"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-redline focus:px-5 focus:py-3 focus:text-[0.6875rem] focus:uppercase focus:tracking-[0.16em] focus:text-on-redline"
      >
        Skip to the work
      </a>
      <SheetFrame />
      <main className="flex-1 pb-12">
        <Masthead />
        <Work />
        <Materials />
        <Revisions />
        <Contact />
      </main>
      <TitleBlock
        drawnBy={fullName}
        issued={issueDate()}
        revision={revisions[0]?.rev ?? "A"}
        sheets={sheetSet}
        action={{ label: "Email", href: email?.href ?? "#sht-5" }}
      />
    </>
  );
}
