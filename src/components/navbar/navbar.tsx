'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full m-0 h-16 px-8 flex items-center justify-between bg-[rgba(0,0,0,0.49)] shadow-[0_1px_32px_16px_#000]">
      <span className="text-white font-inter text-sm">LOGO</span>

      {/* Links - só aparecem em telas médias pra cima */}
      <div className="hidden md:flex gap-6">
        {['Home', 'Sobre Mim', 'Galeria', 'Serviços'].map((item) => (
          <a key={item} href="#" className="text-white text-sm hover:underline">
            {item}
          </a>
        ))}
      </div>

      {/* Botão hambúrguer - aparece só no mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
        {isOpen ? <X color='white' size={24}/> : <Menu />}
      </button>

      {/* Menu mobile - dropdown simples */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.49)] flex flex-col items-center py-4 gap-4 md:hidden z-10 sh">
          {['Home', 'Sobre Mim', 'Galeria', 'Serviços'].map((item) => (
            <a key={item} href="#" className="text-white text-base hover:underline">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
