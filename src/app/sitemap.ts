import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://viralclipper-ai.vercel.app'

  const games = [
    'valorant','fortnite','league-of-legends','gta-v','grand-theft-auto-v','counter-strike-2','warzone','call-of-duty-warzone','apex-legends','minecraft','roblox','overwatch-2','elden-ring','path-of-exile-2','rust','escape-from-tarkov','rocket-league','ea-sports-fc-26','teamfight-tactics','dota-2','world-of-warcraft','pubg','rainbow-six-siege','dead-by-daylight','hearthstone','marvel-rivals','starcraft-2','grand-theft-auto-vi','gta-6','gta-vi','resident-evil-requiem','resident-evil-9','marvels-wolverine','fable','crimson-desert','forza-horizon-6','007-first-light','highguard','phantom-blade-zero','nioh-3','arc-raiders','slay-the-spire-2','monster-hunter-stories-3-twisted-reflection','pokemon-pokopia','fire-emblem-fortunes-weave','code-vein-2','mortal-shell-2','tomb-raider-legacy-of-atlantis','stardew-valley-successor','the-elder-scrolls-vi','cyberpunk-2077-rewired','star-wars-outlaws-2','horizon-3-rise-of-gaia','marvel-tokon-fighting-souls','dune-awakening'
  ]

  const gameUrls = games.map((game) => ({
    url: `${baseUrl}/tools/${game}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...gameUrls,
  ]
}