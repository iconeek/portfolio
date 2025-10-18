import { EmailSchema } from "@/schema/emailSchema";
import * as React from "react";

interface EmailTemplateProps {
  values: EmailSchema;
}

export function EmailTemplate({ values }: EmailTemplateProps) {
  return (
    <div
      className="bg-gray-50 font-sans text-gray-800 p-6"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-t-xl px-6 py-4">
        <h1 className="text-2xl font-semibold">New Message from Qoogle</h1>
      </div>

      {/* Body */}
      <div className="bg-white p-6 rounded-b-xl">
        <p className="text-gray-700 text-base mb-4">
          You&apos;ve received a new contact form submission:
        </p>

        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Name
            </p>
            <p className="text-xl font-medium">{values.username}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Email
            </p>
            <p className="text-xl font-medium">{values.email}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Message
            </p>
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {values.message}
            </p>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-sm text-gray-500">
          <p>Sent from the Qoogle contact form 🚀</p>
        </div>
      </div>
    </div>
  );
}
