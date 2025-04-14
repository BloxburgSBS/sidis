"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SIDIS FZ-LLC" width={100} height={33} priority />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#40148c]">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-[#40148c]">
            About Us
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-[#40148c]">
            Contact Us
          </Link>
          {/*
          <a
            href="https://sidis.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#40148c] hover:underline flex items-center"
          >
            Our Store
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          */}
        </nav>
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-[#40148c]" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-[#40148c]"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-[#40148c]"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <a
              href="https://store.sidis.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#40148c] hover:underline flex items-center"
              onClick={toggleMenu}
            >
              Our Store
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
