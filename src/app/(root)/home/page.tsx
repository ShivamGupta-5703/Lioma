"use client"
import { ImageBox } from "@/components/image-box"
import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../globals.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="mb-72">
      <div className="text-center ">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">Lioma</span> - Lungs
            Disease Detection
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Helping <span className="gradient-text">Protect Lungs</span> with
            Machine Learning
          </h2>
        </div>
        <div className="mb-auto">
          <ImageBox />
        </div>
        <div className="relative flex py-5 items-center justify-center">
          <span className="flex-shrink  ml-12 mx-4 text-gray-900">---------------------  OR  ---------------------</span>
        </div>
      </div>
      
      
      <div className="mt-72">
      <DiagnosForm/>
      </div>
    </main>
  )
}


function DiagnosForm() {
  const navigate = useRouter();
  const [NAME, setNAME] = useState<any>("");
  const [AGE, setAGE] = useState<any>(0);
  const [GENDER, setGENDER] = useState<any>("Male"); 
  const [SMOKING, setSMOKING] = useState<any>(1); 
  const [YELLOW_FINGERS, setYELLOW_FINGERS] = useState<any>(1); 
  const [ANXIETY, setANXIETY] = useState<any>(1); 
  const [PEER_PRESSURE, setPEER_PRESSURE] = useState<any>(1); 
  const [CHRONIC_DISEASE, setCHRONIC_DISEASE] = useState<any>(1); 
  const [FATIGUE, setFATIGUE] = useState<any>(1); 
  const [ALLERGY, setALLERGY] = useState<any>(1); 
  const [WHEEZING, setWHEEZING] = useState<any>(1); 
  const [ALCOHOL_CONSUMING, setALCOHOL_CONSUMING] = useState<any>(1); 
  const [COUGHING, setCOUGHING] = useState<any>(1); 
  const [SHORTNESS_OF_BREATH, setSHORTNESS_OF_BREATH] = useState<any>(1); 
  const [SWALLOWING_DIFFICULTY, setSWALLOWING_DIFFICULTY] = useState<any>(1); 
  const [CHEST_PAIN, setCHEST_PAIN] = useState<any>(1); 

  const handleFormSubmit = async (e : any) => {
    e.preventDefault();

    const formData = {
      NAME,
      AGE,
      GENDER,
      SMOKING,
      YELLOW_FINGERS,
      ANXIETY,
      PEER_PRESSURE,
      CHRONIC_DISEASE,
      FATIGUE,
      ALLERGY,
      WHEEZING,
      ALCOHOL_CONSUMING,
      COUGHING,
      SHORTNESS_OF_BREATH,
      CHEST_PAIN,
    };
    //navigate("/results");

    try {
      const response = await fetch("http://54.174.166.149:8000/api/health-recommendation/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      const responseData = await response.json(); 


      toast.success("Request for Assistance Submitted!", {
        position: "top-center",
      });

      navigate.push   ("/results", { state: { responseData } });
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
              value={NAME}
              onChange={(e) => setNAME(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Please enter your AGE:
            <input
              type="number"
              value={AGE}
              onChange={(e) => setAGE(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Please select your GENDER:
            <select
              value={GENDER}
              onChange={(e) => setGENDER(e.target.value)}
              required
            > 
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>
          </label>
          <br />

          <label>
            Please select your SMOKING Level:
            <select
              value={SMOKING}
              onChange={(e) => setSMOKING(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your YELLOW FINGERS Level:
            <select
              value={YELLOW_FINGERS}
              onChange={(e) => setYELLOW_FINGERS(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your ANXIETY Level:
            <select
              value={ANXIETY}
              onChange={(e) => setANXIETY(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your PEER_PRESSURE Level:
            <select
              value={PEER_PRESSURE}
              onChange={(e) => setPEER_PRESSURE(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your CHRONIC DISEASE Level:
            <select
              value={CHRONIC_DISEASE}
              onChange={(e) => setCHRONIC_DISEASE(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your FATIGUE Level:
            <select
              value={FATIGUE}
              onChange={(e) => setFATIGUE(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your ALLERGY Level:
            <select
              value={ALLERGY}
              onChange={(e) => setALLERGY(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your WHEEZING Level:
            <select
              value={WHEEZING}
              onChange={(e) => setWHEEZING(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your ALCOHOL CONSUMING Level:
            <select
              value={ALCOHOL_CONSUMING}
              onChange={(e) => setALCOHOL_CONSUMING(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your COUGHING Level:
            <select
              value={COUGHING}
              onChange={(e) => setCOUGHING(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your SHORTNESS OF BREATH Level:
            <select
              value={SHORTNESS_OF_BREATH}
              onChange={(e) => setSHORTNESS_OF_BREATH(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your SHORTNESS OF BREATH Level:
            <select
              value={SWALLOWING_DIFFICULTY}
              onChange={(e) => setSWALLOWING_DIFFICULTY(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <label>
            Please select your CHEST PAIN Level:
            <select
              value={CHEST_PAIN}
              onChange={(e) => setCHEST_PAIN(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <br />

          <button type="submit" className="text-appointment-btn">
            Get Results
          </button>
        </form>
      </div>
    </div>
  );
}
