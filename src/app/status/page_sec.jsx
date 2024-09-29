"use client";
import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const CheckComplaintStatus = () => {
  const [complaintId, setComplaintId] = useState("");
  const [complaintData, setComplaintData] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckStatus = async () => {
    try {
      // Simulate fetching complaint data
      const data = {
        status: "in progress",
        message: "Your complaint has been raised and is in progress.",
      };
      setComplaintData(data);
      setError(null);
    } catch (err) {
      setComplaintData(null);
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🔍 Check Complaint Status</h2>
      <input
        type="text"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
        placeholder="Enter Complaint ID"
        className="border p-2 mb-4 w-full rounded"
      />
      <button
        onClick={handleCheckStatus}
        className="p-2 rounded bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:shadow-outline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Check Status
      </button>
      {error && (
        <div className="text-red-500 mt-4 flex items-center">
          <FaExclamationCircle className="mr-2" />
          {error}
        </div>
      )}
      {complaintData && (
        <div className="mt-4 p-4 bg-green-100 rounded shadow">
          <h3 className="text-xl font-semibold flex items-center">
            <FaCheckCircle className="mr-2 text-green-600" />
            Complaint Details
          </h3>
          <p className="mt-2">{complaintData.message} 🚀</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-primary h-4 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div>Progress : 25% {"(complaint received)"}</div>

          <p className="mt-2">Thank you for using us! 🙏</p>
        </div>
      )}
    </div>
  );
};

export default CheckComplaintStatus;
