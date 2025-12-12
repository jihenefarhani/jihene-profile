"use client"
import { Moon, Sun, Terminal, Briefcase, Rocket } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"

export function FloatingNav() {
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    {
      icon: theme === "dark" ? Moon : Sun,
      onClick: toggleTheme,
      bgColor: "bg-gray-400/20 hover:bg-gray-400/30",
      iconColor: "text-gray-300",
    },
    {
      icon: Terminal,
      href: "#projects",
      bgColor: "bg-green-500/20 hover:bg-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: Briefcase,
      href: "#experience",
      bgColor: "bg-purple-500/20 hover:bg-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: Rocket,
      href: "#contact",
      bgColor: "bg-red-500/20 hover:bg-red-500/30",
      iconColor: "text-red-400",
    },
  ]

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {navItems.map((item, index) => {
        const Icon = item.icon
        const content = <Icon key={index} className={`h-5 w-5 ${item.iconColor}`} />

        return item.href ? (
          <a
            key={index}
            href={item.href}
            className={`w-14 h-14 rounded-full ${item.bgColor} backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10`}
          >
            {content}
          </a>
        ) : (
          <button
            key={index}
            onClick={item.onClick}
            className={`w-14 h-14 rounded-full ${item.bgColor} backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10`}
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}
