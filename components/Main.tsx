"use client";
import { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";

export default function Main() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (files: File[]) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        "https://hsitosnap-server.onrender.com/process",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const pdfBlobUrl = URL.createObjectURL(blob);
      setPdfUrl(pdfBlobUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <div className="w-full max-w-2xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
        <FileUpload onChange={handleFileUpload} />
        <div className="flex justify-center mt-4">
          <button
            onClick={handleUpload}
            disabled={loading || !selectedFile}
            className={`px-6 py-2 rounded text-white ${
              loading || !selectedFile
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#2563eb] hover:bg-[#1e40af]"
            }`}
          >
            {loading ? "Summarzing Image... " : "Start Summarizing"}
          </button>
        </div>
        <p className="text-sm text-center text-gray-700 mt-4">
          <strong>Note:</strong> If PDF generation is taking longer than
          expected, the backend may be sleeping or busy. You can check its
          status directly at:{" "}
          <a
            href="https://hsitosnap-server.onrender.com/process"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://hsitosnap-server.onrender.com/process
          </a>
        </p>
      </div>

      {pdfUrl && (
        <div className="mt-6 w-full max-w-2xl">
          <iframe src={pdfUrl} className="w-full h-[600px] border rounded" />
          <div className="mt-4 flex justify-center">
            <a
              href={pdfUrl}
              download="generated.pdf"
              className="bg-[#2563eb] hover:bg-[#1e40af] text-white px-4 py-2 rounded"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
