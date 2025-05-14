"use client";

export default function About() {
  return (
    <section className="w-full px-6 py-16 flex flex-col items-center">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black">
        About HistoSnap
      </h1>

      {/* About Box */}
      <div className="bg-[#1E3A8A] text-white rounded-[32px] max-w-5xl w-full p-10 text-lg leading-relaxed shadow-md">
        <p className="mb-4">
          <strong>HistoSnap</strong> is a powerful AI-driven tool built to
          simplify the way handwritten medical prescriptions are interpreted and
          recorded. Designed for doctors, clinics, and healthcare professionals,
          HistoSnap uses cutting-edge language models to extract key information
          like patient details, diagnosis, medications, and doctor advice
          directly from scanned or photographed prescriptions.
        </p>

        <p className="mb-4">
          Instead of struggling with unreadable handwriting or manually typing
          out reports, users can now upload an image and instantly receive a
          clean, structured PDF summary. This not only saves time but also
          reduces human error and improves medical record-keeping.
        </p>

        <p className="mb-4">
          HistoSnap is powered by <strong>Gemini AI</strong> (by Google), and
          continues to evolve with planned features like multi-language
          translation and smarter, more adaptive formatting options. Whether
          you&apos;re in a busy clinic or working remotely, HistoSnap makes
          prescription digitization effortless.
        </p>

        <p className="italic text-sm text-neutral-200 mt-6">
          &quot;Taking care of your health is our top priority.&quot;
        </p>
      </div>
    </section>
  );
}
