"use client"
import { ImageBox } from "@/components/image-box"
import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../globals.css"
import Result from "../../../components/result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="mb-72">
        <div className="text-center ">
          <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
            <span className="gradient-text">Lioma</span> - Lung Disease Detection
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Helping <span className="gradient-text">Protect Lungs</span> with Machine Learning
          </h2>
        </div>
        <div className="mb-auto">
          <ImageBox />
        </div>
        <div className="relative flex py-5 items-center justify-center">
          <span className="flex-shrink  ml-12 mx-4 text-gray-900">--------------------- OR ---------------------</span>
        </div>
      </div>
      
      <div className="mt-72">
        <DiagnosForm />
      </div>
      <ToastContainer />
    </main>
  )
}

function DiagnosForm() {
  const navigate = useRouter();
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({
    NAME: "",
    AGE: 0,
    GENDER: "Male",
    SMOKING: 1,
    YELLOW_FINGERS: 1,
    ANXIETY: 1,
    PEER_PRESSURE: 1,
    CHRONIC_DISEASE: 1,
    FATIGUE: 1,
    ALLERGY: 1,
    WHEEZING: 1,
    ALCOHOL_CONSUMING: 1,
    COUGHING: 1,
    SHORTNESS_OF_BREATH: 1,
    SWALLOWING_DIFFICULTY: 1,
    CHEST_PAIN: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/form-prediction/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      const data = await response.json();
      setResponseData(data);

      toast.success("Request for Assistance Submitted!", {
        position: "top-center",
      });

      // navigate.push("/results", { state: { responseData } });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">
          <span>Enter your MRI Results</span>
        </h2>
        <form className="form-content" onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Please enter your AGE:
            <input
              type="number"
              name="AGE"
              value={formData.AGE}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Please select your GENDER:
            <select
              name="GENDER"
              value={formData.GENDER}
              onChange={handleChange}
              required
            > 
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>
          </label>
          <br />

          {["SMOKING", "YELLOW_FINGERS", "ANXIETY", "PEER_PRESSURE", "CHRONIC_DISEASE", "FATIGUE", "ALLERGY", "WHEEZING", "ALCOHOL_CONSUMING", "COUGHING", "SHORTNESS_OF_BREATH", "SWALLOWING_DIFFICULTY", "CHEST_PAIN"].map((field) => (
            <div key={field}>
              <label>
                Please select your {field.replace("_", " ")} Level:
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
              <br />
            </div>
          ))}

          <button type="submit" className="text-appointment-btn">
            Get Results
          </button>
        </form>
        {responseData && <Result data={responseData} />}
      </div>
    </div>
  );
}
