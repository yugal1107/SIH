"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  Droplet,
  Wrench,
  Trash,
  Zap,
  Construction,
  HelpCircle,
} from "lucide-react";

function RailwayDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [railwayData, setRailwayData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/storeData?id=${id}`)
        .then((response) => response.json())
        .then((data) => setRailwayData(data))
        .catch((error) => console.error("Error fetching railway data:", error));
    }
  }, [id]);

  const handleCopyId = () => {
    navigator.clipboard.writeText(id).then(() => {
      alert("Complaint ID copied to clipboard!");
    });
  };

  if (!railwayData) {
    return (
      <div className="text-center text-gray-600">No railway data available</div>
    );
  }

  const categoryIcons = {
    Cleanliness: Droplet,
    Plumbing: Wrench,
    Electrical: Zap,
    Structural: Construction,
    Garbage: Trash,
    Safety: AlertTriangle,
    Other: HelpCircle,
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        Railway Analysis Results
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">
          Detected Problems
        </h3>
        <ul className="space-y-2">
          {railwayData.problems &&
            railwayData.problems.map((problem, index) => {
              const [problemKey, description] = Object.entries(problem)[0];
              const Icon = categoryIcons[problem.Category] || HelpCircle;
              return (
                <li key={index} className="flex items-start">
                  <Icon className="w-5 h-5 mr-2 mt-1 text-blue-500" />
                  <div>
                    <span className="font-semibold">{problemKey}:</span>{" "}
                    {description}
                    <span className="ml-2 text-sm text-gray-500">
                      ({problem.Category})
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Summary</h3>
        <p className="text-gray-700">{railwayData.summary}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Complaint ID</h3>
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">{id}</span>
          <button
            onClick={handleCopyId}
            className="bg-secondary-foreground text-background hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline"
          >
            Copy ID
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RailwayDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RailwayDetails />
    </Suspense>
  );
}
