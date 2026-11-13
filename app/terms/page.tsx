import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions", robots: { index: false } };

export default function TermsPage() {
  return (
    <LegalPage
      title={"Terms & Conditions"}
      updated="To be confirmed"
      sections={[
        { h: "Use of this website", p: "This website provides general information about Haritvanta and its services. By using it, you agree to these terms." },
        { h: "Information accuracy", p: "We aim to keep information current and accurate, but it does not constitute a binding offer. Service scope and terms are agreed separately in writing." },
        { h: "Intellectual property", p: "The Haritvanta name, logo, text and design of this website are the property of Haritvanta unless stated otherwise. Photography is used under applicable licences." },
        { h: "External links", p: "Links to third-party websites are provided for convenience. We are not responsible for their content or practices." },
        { h: "Governing law", p: "These terms are governed by the laws of India." },
      ]}
    />
  );
}
