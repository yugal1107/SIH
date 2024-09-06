"use client";

import React from "react";
import { useRouter } from "next/navigation";

function RailwayDetails() {
  const router = useRouter();
  const { data } = router.query;

  // Display raw data if available
  if (!data) {
    return (
      <div className="text-center text-gray-600">No railway data available</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        Railway Analysis Results
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Response</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm text-gray-700 overflow-auto">
          {data}
        </pre>
      </div>
    </div>
  );
}

export default RailwayDetails;
