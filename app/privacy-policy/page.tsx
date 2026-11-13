import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="To be confirmed"
      sections={[
        { h: "Information we collect", p: "When you contact us through this website, we collect the details you provide — such as your name, organisation, email address, phone number and the content of your message." },
        { h: "How we use information", p: "We use these details only to respond to your enquiry, to communicate about our services where you have asked us to, and to meet legal obligations. We do not sell personal information." },
        { h: "Data retention", p: "Enquiry information is retained only for as long as necessary to respond and maintain appropriate business records, after which it is securely deleted." },
        { h: "Your rights", p: "You may request access to, correction of, or deletion of your personal information in line with the Digital Personal Data Protection Act, 2023 and other applicable law." },
        { h: "Contact", p: `For privacy-related requests, please write to ${company.email}.` },
      ]}
    />
  );
}
