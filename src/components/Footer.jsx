"use client"

import { ArrowUp } from "lucide-react"
import { useState } from "react"

const Github = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Linkedin = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM3.555 20.452V9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
)

const Facebook = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function Footer() {
const [email,setEmail] = useState("")
const handleSubmit = (e) => {
  e.preventDefault()
  if(!email) return

  const subject = encodeURIComponent("Newsletter Subscribe")
  const body = encodeURIComponent(`Email: ${email}`)

 window.location.href = `mailto:sobujmadbor660@gmail.com?subject=${subject}&body=${body}`

 setEmail("")
}



  return (
    <footer className="bg-[#030712] text-white pt-20 pb-10 border-t border-white/5  text-center md:text-left">
      <div className="px-[5%] grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

        {/* Brand */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            
            <span className="font-syne font-bold text-3xl">PawAdopt</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
           We connect lovable pets with caring people. Adopt  don's shop.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">
            <a
              href="https://github.com/MDSOBUJMADBOR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue transition-all"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/md-sobuj-madbor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue transition-all"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.facebook.com/share/1PDgKKfk12/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {["Home", "All Pets", "My Requests","Add Pet"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-blue">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-8">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {["Email: sobujmadbor660@gmail.com", "Phone: +8801826140440", "Dhaka,Bangladesh", ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-blue">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8">Newsletter</h4>



<form onSubmit={handleSubmit} className="space-y-4">
<p>Subscribe to get updates</p>
      <input
        type="email"
        name="email"
        value={email}
        // onChange={handleChange}
         onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter Your email"
        className="w-full bg-white/5 border border-white/30 rounded-xl p-4 text-sm text-gray-300 focus:border-blue outline-none"
      />

      <button
        type="submit"
        className="px-10 py-4 bg-green-500  text-black rounded-xl font-bold text-sm cursor-pointer"
      >
        Subscribe
      </button>
    </form>




        </div>
      </div>

      {/* Bottom */}
      <div className="px-[5%] pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © 2026 PawAdopt All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue hover:text-white"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}





