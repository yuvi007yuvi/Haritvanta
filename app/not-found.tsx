import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-end bg-forest-deep pb-20 pt-40 text-white">
      <div className="container-site">
        <p className="eyebrow text-bhagwa">Error 404</p>
        <h1 className="display-xl mt-6 max-w-[14ch]">This page could not be found.</h1>
        <p className="mt-8 max-w-md text-lg text-white/70">The page may have moved, or the link may be incorrect.</p>
        <div className="mt-10"><Button href="/">Back to home</Button></div>
      </div>
    </section>
  );
}
