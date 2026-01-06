import WaitlistForm from "@/components/WaitlistForm";

export default function GameSEOPage({params}:{params: {game: string}}){
    const gameName = params.game?.replace('-',' ') || 'Valorant'; //gameName?.replace('-', ' ') || 'Default Name'

    return(
        <div className="bg-[#0a0a0a] text-white min-h-screen">
            <nav className="p-6 border-b border-gray-800">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    ViralClipper AI
                </span>
            </nav>
            <main className="max-w-4xl mx-auto py-20 px-6 text-center">
                <h1 className="text-5xl font-extrabold capitalize leading-tight mb-6">
                    The Best AI {gameName} Clip Converter for Youtube Shorts & Reels
                </h1>
                <p className="text-xl text-gray-400 mt-6">
                    Stop manual editing. Our AI specifically understands {gameName} gameplay mechanics to find your best clutches and crop them for 9:16 vertical view.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-3">Auto-Facecam Tracking</h3>
                        <p className="text-gray-400 text-sm">We keep your webcam centered while showing the {gameName} kill-feed and action simultaneously.</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-3">Smart {gameName} Detection</h3>
                        <p className="text-gray-400 text-sm">Our AI detects the {gameName} UI to ensure your health bar and ammo are always visible in the vertical crop.</p>
                    </div>
                </div>
      <p className="text-xl text-gray-400 mb-12">
        Turn your {gameName} highlights into viral TikToks in seconds.
      </p>

      {/* The Reusable Form (Passing the game name as source) */}
      <WaitlistForm source={`seo-${params.game}`} />
      
            </main>
        </div>
    )
}