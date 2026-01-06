"use client"
import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'

export default function WaitlistForm({ source = "homepage" }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, source }]) // Now we track WHERE they signed up!

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setEmail('')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 font-bold animate-bounce">
        🚀 You're on the list! We'll email you soon.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500 transition-all"
      />
      <button
        disabled={status === 'loading'}
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining...' : 'Get Early Access'}
      </button>
    </form>
  )
}