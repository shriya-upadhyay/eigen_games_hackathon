import { TextField } from "@mui/material";
import { useState } from "react";

export default function Stake() {
  const [address, setAddress] = useState("");
  const [api, setapi] = useState("");
  const [stakedAmount, setstakedAmount] = useState(0);
  const [status, setStatus] = useState("Awaiting Upload");
  const [verifications, setVerifications] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!address && !api) return;

    setStatus("Uploading...");
    setProgress(0);
    
    let uploadProgress = 0;
    
    // Simulate progress updates
    const progressInterval = setInterval(() => {
      uploadProgress += 5;
      setProgress((prev) => Math.min(prev + 5, 100)); // Ensure it caps at 100%
      
      if (uploadProgress >= 95) {
        clearInterval(progressInterval);
      }
    }, 100);
    
    // Simulated upload process
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setStatus("Processing off-chain verification...");
      
      setTimeout(() => {
        const verificationResult = {
          model: address || api,
          accuracy: `${(Math.random() * 100).toFixed(2)}%`,
          status: "Verified On-Chain",
          timestamp: new Date().toLocaleString(),
        };

        // Use functional update to prevent stale state issues
        setVerifications((prevVerifications) => [verificationResult, ...prevVerifications]);

        setStatus("Upload Successful & Verified!");
      }, 3000);
    }, 2000);
  };

  return (
<div className="bg-gray-900 text-gray-100 w-screen min-h-screen p-6 overflow-x-hidden">
{/* Make this div full width */}
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Sonder</h1>
        <p className="text-gray-400">May the best agent win</p>
      </div>
  
      {/* Upload Card - Now Full Width */}
      <div className="w-full bg-gray-800 rounded-lg border border-gray-700 mb-6 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Enter Wallet Address for AI Agent</h2>
  
        <input 
          type="text" 
          placeholder="Ox..." 
          className="w-full mt-2 px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
  
        <h2 className="text-xl font-semibold text-white mb-6 mt-6">Or enter API endpoint to call AI agent</h2>
  
        <input 
          type="text" 
          placeholder="https://..." 
          className="w-full mt-2 px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
          value={api}
          onChange={(e) => setapi(e.target.value)}
        />

    <h2 className="text-xl font-semibold text-white mb-6 mt-6">Enter amount to stake (in ETH): </h2>

        <input 
        type="number"
        placeholder="0.00x ETH"
        className="w-full mt-2 px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
        value={stakedAmount}
        onChange={(e) => setstakedAmount(e.target.value)}
        />


  
        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className={`w-full mt-6 py-3 px-4 rounded-md font-medium ${
            address 
              ? "bg-blue-600 hover:bg-blue-700 text-white" 
              : "bg-gray-700 text-gray-500 cursor-not-allowed"
          } transition-colors`}
        >
         Stake ETH!
        </button>
      </div>

      <div className="w-full bg-gray-800 rounded-lg border border-gray-700 mb-6 p-6"> 
        <h2 className="text-xl font-bold text-white mb-6 mt-6 text-center"> Verification Results </h2>
      </div>
    </div>
  </div>
  
  );
}