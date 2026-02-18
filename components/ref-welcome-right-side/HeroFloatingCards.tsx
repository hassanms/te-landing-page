import React from 'react'
/**
 * HeroFloatingCards — Standalone floating UI mockup animation
 *
 * USAGE:
 *   import { HeroFloatingCards } from './components/HeroFloatingCards'
 *   <HeroFloatingCards />
 *
 * REQUIREMENTS:
 *   1. npm install framer-motion
 *   2. Tailwind CSS configured in your project
 *   3. Add the CSS from "hero-floating-cards.css" to your stylesheet
 *   4. Place inside a relative container (the component is relatively positioned)
 */

import { motion } from 'framer-motion'
function FloatingCard({
  className,
  animClass,
  children,
}: {
  className?: string
  animClass: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`absolute rounded-2xl p-4 ${animClass} ${className || ''}`}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {children}
    </div>
  )
}
export function HeroFloatingCards() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      }}
      className="relative h-[520px]"
    >
      {/* ── Card 1: Revenue Dashboard ── */}
      <FloatingCard className="top-8 left-8 w-72" animClass="hero-float">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-teal-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200">
              Revenue Dashboard
            </div>
            <div className="text-[10px] text-slate-500">
              Real-time analytics
            </div>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-16 mt-2">
          <div
            className="flex-1 bg-teal-500/20 rounded-sm"
            style={{
              height: '40%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/30 rounded-sm"
            style={{
              height: '65%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/20 rounded-sm"
            style={{
              height: '45%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/40 rounded-sm"
            style={{
              height: '80%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/30 rounded-sm"
            style={{
              height: '55%',
            }}
          />
          <div
            className="flex-1 bg-gradient-to-t from-teal-500/50 to-cyan-400/50 rounded-sm"
            style={{
              height: '95%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/35 rounded-sm"
            style={{
              height: '70%',
            }}
          />
          <div
            className="flex-1 bg-teal-500/25 rounded-sm"
            style={{
              height: '50%',
            }}
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-[10px] text-slate-500">Jan</span>
          <span className="text-xs font-semibold text-teal-400">+24.5%</span>
        </div>
      </FloatingCard>

      {/* ── Card 2: Code Snippet ── */}
      <FloatingCard
        className="top-36 right-4 w-60"
        animClass="hero-float-delayed"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
          </div>
          <span className="text-[10px] text-slate-500 ml-1">agent.ts</span>
        </div>
        <div className="font-mono text-[11px] leading-relaxed space-y-1">
          <div>
            <span className="text-violet-400">const</span>{' '}
            <span className="text-cyan-300">agent</span>{' '}
            <span className="text-slate-500">=</span>{' '}
            <span className="text-teal-400">new</span>{' '}
            <span className="text-yellow-300">AIAgent</span>
            <span className="text-slate-500">(&#123;</span>
          </div>
          <div className="pl-3">
            <span className="text-slate-300">model</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-green-400">"gpt-4o"</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="pl-3">
            <span className="text-slate-300">tools</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-slate-500">[</span>
            <span className="text-green-400">search</span>
            <span className="text-slate-500">]</span>
          </div>
          <div>
            <span className="text-slate-500">&#125;)</span>
          </div>
        </div>
      </FloatingCard>

      {/* ── Card 3: Mobile Frame ── */}
      <FloatingCard
        className="bottom-12 left-16 w-44"
        animClass="hero-float-slow"
      >
        <div className="w-full aspect-[9/16] rounded-xl bg-gradient-to-b from-[#111118] to-[#0d0d14] border border-white/[0.06] flex flex-col items-center p-3 relative overflow-hidden">
          <div className="w-12 h-1 rounded-full bg-white/10 mb-3" />
          <div className="w-full space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
          </div>
          <div className="mt-3 w-full grid grid-cols-2 gap-1.5">
            <div className="aspect-square rounded-lg bg-teal-500/10" />
            <div className="aspect-square rounded-lg bg-cyan-500/10" />
            <div className="aspect-square rounded-lg bg-violet-500/10" />
            <div className="aspect-square rounded-lg bg-teal-500/10" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d0d14] to-transparent" />
        </div>
      </FloatingCard>

      {/* ── Card 4: Stats Pill ── */}
      <FloatingCard
        className="bottom-32 right-12 w-48"
        animClass="hero-float-delayed"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center">
            <span className="text-sm font-bold text-teal-400">99%</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200">
              Client Satisfaction
            </div>
            <div className="text-[10px] text-slate-500">
              Based on 50+ projects
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* ── Decorative glow orb ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-teal-500/[0.06] blur-[80px] hero-glow-pulse pointer-events-none" />
    </motion.div>
  )
}
