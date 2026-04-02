import { FileText, Download } from "lucide-react";

/*
  Resume — a simple call-to-action section for downloading the PDF.

  Design: centered text with a prominent download button.
  The slightly different background (bg-card) visually separates this
  CTA from adjacent content sections, drawing the eye.

  The PDF file lives at public/resume.pdf — Next.js serves files
  in public/ at the root URL, so /resume.pdf just works.
*/

export default function Resume() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-card p-8 text-center sm:p-12">
          <FileText className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">Want the full picture?</h2>
          <p className="mt-2 text-muted">
            Download my resume for a quick overview, or my full CV for
            a detailed look at my experience, education, and skills.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
