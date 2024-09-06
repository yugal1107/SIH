"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { analyzeRailwayWithGemini } from "@/lib/geminiApi.js";

function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    console.log("API Key in component:", apiKey); // This should show the key

    if (!apiKey) {
      console.error("API key is not available");
      setIsLoading(false);
      return;
    }

    try {
      const response = await analyzeRailwayWithGemini(imageFile, apiKey);
      // Instead of using setRailwayData, we'll pass the data through the router
      router.push({
        pathname: "/railway-details",
        query: { data: JSON.stringify(response) },
      });
    } catch (error) {
      console.error("Error analyzing railway image:", error);
      alert(
        "An error occurred while analyzing the railway image. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Analyze Railway Passenger Area
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="railwayImage"
          >
            Railway Passenger Area Image
          </label>
          <input
            type="file"
            id="railwayImage"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {imageFile && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Railway area preview"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading || !imageFile}
          >
            {isLoading ? "Analyzing..." : "Analyze Railway Area"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
