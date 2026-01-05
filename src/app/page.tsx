import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          ViralClipper AI
        </h1>
        <p className="text-2xl mb-8 text-gray-300">
          Turn 4-hour Twitch/Youtube VODs into <span className="text-white font-bold underline">10 Viral Reels/YT Shorts</span> in one click.
          AI powered face-tracking, auto-captions, and vertical cropping.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <input 
            type="email" 
            placeholder="Enter your email for early access"
            className="px-6 py-4 rounded-full bg-gray-900 border border-gray-700 text-white w-full md:w-80 outline-none focus:border-purple-500" 
            required
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
              Join the Waitlist!
            </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-400">
          <div>
            <h3 className="text-white font-bold mb-2">🚀 1-Click Viral</h3>
            <p>Our AI finds your most intense moments automatically.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">📸 Face Tracking</h3>
            <p>Never lose the webcam focus. AI keeps your face and gameplay centered.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">✍️ Smart Captions</h3>
            <p>Ready-to-post captions that keep viewers watching until the end.</p>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-gray-600">© 2026 ViralClipper.ai - Launching Soon - PS Applications</footer>
    </div>
  );
}
