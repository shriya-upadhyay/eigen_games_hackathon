import { useState } from "react";

export default function AIModelUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Awaiting Upload");
  const [verifications, setVerifications] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setStatus("Uploading...");
    let uploadProgress = 0;
    
    // Simulate progress updates
    const progressInterval = setInterval(() => {
      uploadProgress += 5;
      if (uploadProgress > 95) {
        clearInterval(progressInterval);
      } else {
        setProgress(uploadProgress);
      }
    }, 100);
    
    // Simulated upload
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setStatus("Processing off-chain verification...");
      setTimeout(() => {
        const verificationResult = {
          model: file.name,
          accuracy: `${(Math.random() * 100).toFixed(2)}%`,
          status: "Verified On-Chain",
          timestamp: new Date().toLocaleString(),
        };
        setVerifications([verificationResult, ...verifications]);
        setStatus("Upload Successful & Verified!");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AI Model Verification</h1>
          <p className="text-gray-400">Secure on-chain verification for your models</p>
        </div>
        
        {/* Upload Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 mb-6 p-5">
          <h2 className="text-xl font-semibold text-white mb-6">Upload AI Model</h2>
          
          {/* File Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Model File
            </label>
            <div 
              className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => document.getElementById('file-input').click()}
            >
              {!file ? (
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="text-gray-400">Click to browse or drag and drop</p>
                </div>
              ) : (
                <div className="py-3">
                  <p className="text-blue-400 font-medium mb-1">{file.name}</p>
                  <p className="text-gray-500 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              )}
              <input id="file-input" type="file" className="hidden" onChange={handleFileChange} />
            </div>
          </div>
          
          {/* Progress bar */}
          {status !== "Awaiting Upload" && status !== "Upload Successful & Verified!" && (
            <div className="mb-6">
              <div className="h-1 w-full bg-gray-700 rounded">
                <div 
                  className="h-full bg-blue-500 rounded transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs mt-2 text-gray-400">
                <span>{status}</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}
          
          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!file}
            className={`w-full py-3 px-4 rounded-md font-medium ${
              file 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            } transition-colors`}
          >
            Upload & Verify
          </button>
          
          {/* Status Display */}
          {status && (
            <div className="mt-4 text-center">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                status === "Upload Successful & Verified!" 
                  ? "bg-green-900/40 text-green-400 border border-green-800" 
                  : status === "Awaiting Upload"
                    ? "bg-gray-800 text-gray-400 border border-gray-700"
                    : "bg-yellow-900/40 text-yellow-400 border border-yellow-800"
              }`}>
                <span className={`w-2 h-2 mr-2 rounded-full ${
                  status === "Upload Successful & Verified!" 
                    ? "bg-green-500" 
                    : status === "Awaiting Upload"
                      ? "bg-gray-500"
                      : "bg-yellow-500"
                }`}></span>
                {status}
              </div>
            </div>
          )}
        </div>
        
        {/* Verification Results Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-5">
          <h2 className="text-xl font-semibold text-white mb-6">Verification Results</h2>
          
          {verifications.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No verifications yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {verifications.map((result, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-md bg-gray-700/50 border border-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-white">{result.model}</h3>
                      <p className="text-xs text-gray-400 mt-1">Verified on {result.timestamp}</p>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="ml-1 text-blue-400 font-mono">{result.accuracy}</span>
                      </div>
                    </div>
                    <div className="bg-green-900/40 text-green-400 px-2 py-1 rounded-full text-xs font-medium border border-green-800">
                      {result.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}