import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#40148c] text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo-white.png" alt="SIDIS FZ-LLC" width={100} height={33} />
            </Link>
            <p className="text-sm text-white/80">
              Your trusted partner for innovative e-commerce solutions in the UAE.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-white/80 hover:text-white">
                Home
              </Link>
              <Link href="#about" className="text-sm text-white/80 hover:text-white">
                About Us
              </Link>
              <Link href="#services" className="text-sm text-white/80 hover:text-white">
                Our Services
              </Link>
              <Link href="#contact" className="text-sm text-white/80 hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#services" className="text-sm text-white/80 hover:text-white">
                Warehousing
              </Link>
              <Link href="#services" className="text-sm text-white/80 hover:text-white">
                COD Remit
              </Link>
              <Link href="#services" className="text-sm text-white/80 hover:text-white">
                Fulfillment
              </Link>
              <Link href="#services" className="text-sm text-white/80 hover:text-white">
                Product Sourcing
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-white/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 shrink-0 text-white mt-1" />
                <span>
                  Industrial Zone-FZ - Office No. A2-202 Building no. A1 - Al Jazeera Al Hamra - Ras Al Khaimah - UAE
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-5 w-5 text-white" />
                <span>+971 55 121 1436</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="h-5 w-5 text-white" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <span>+971 58 585 6343</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-white" />
                <span>info@sidis.ae</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-8 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-bold">Payment Methods</h3>
            <div className="flex items-center justify-center space-x-6">
              {/* Visa */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
              </div>

              {/* Mastercard */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
              </div>

              {/* Tabby */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-tabby"><title id="pi-tabby">Tabby</title><path opacity=".07" fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#5AFEAE" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><g fill="#292929"><path d="M29.696 9.498l-1.74 6.638v.021h1.362l1.738-6.639h-1.361zM8.208 13.267c-.21.105-.419.146-.65.146-.48 0-.753-.083-.796-.48V9.538l-1.214.147c.817-.168 1.277-.796 1.277-1.445v-.398h-1.36v1.865l-.084.02v3.435c.042.963.691 1.55 1.717 1.55.378 0 .775-.084 1.09-.23l.02-1.215z"/><path d="M8.592 9.117l-3.812.587v.963l3.812-.586v-.964zm0 1.425l-3.812.586v.92l3.812-.585v-.921zm4.272.44c-.063-1.069-.733-1.718-1.822-1.718-.629 0-1.151.25-1.508.712s-.544 1.13-.544 1.948.189 1.486.544 1.947.88.691 1.508.691c1.089 0 1.76-.628 1.822-1.716v1.612h1.362V9.39l-1.362.209v1.382zm.083.942c0 .942-.502 1.57-1.277 1.57-.796 0-1.277-.586-1.277-1.57s.481-1.571 1.277-1.571c.378 0 .712.146.943.44.209.272.334.67.334 1.13zm5.237-2.66c-1.09 0-1.76.628-1.823 1.717V7.903L15 8.113v6.345h1.361v-1.613c.063 1.089.733 1.717 1.823 1.717 1.277 0 2.051-.984 2.051-2.638s-.774-2.66-2.051-2.66zm-.608 4.23c-.775 0-1.277-.607-1.277-1.57 0-.461.125-.859.334-1.13.231-.295.545-.441.943-.441.796 0 1.277.586 1.277 1.57s-.48 1.571-1.277 1.571zm6.345-4.23c-1.088 0-1.76.628-1.821 1.717V7.903l-1.362.21v6.345H22.1v-1.613c.062 1.089.733 1.717 1.821 1.717 1.278 0 2.053-.984 2.053-2.638s-.775-2.66-2.052-2.66zm-.607 4.23c-.775 0-1.278-.607-1.278-1.57 0-.461.126-.859.335-1.13.232-.295.545-.441.943-.441.796 0 1.278.586 1.278 1.57s-.482 1.571-1.278 1.571zm2.66-4.125h1.444l1.174 5.089h-1.3l-1.32-5.089zm6.367.524v-.4h-.169V9.41h.44v.084h-.168v.398h-.103zm.292 0V9.39h.168l.084.23c.02.063.042.084.042.104 0-.02.02-.04.041-.104l.084-.23h.168v.502h-.105v-.398l-.146.398h-.106l-.125-.398v.398h-.105z"/></g></svg>
              </div>

              {/* Bank transfer */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="38" height="24" role="img" aria-labelledby="pi-netbanking"><title id="pi-netbanking">NetBanking</title><rect x=".5" y=".5" width="37" height="23" rx="3" ry="3" fill="#fff" stroke="#000" stroke-opacity=".07"/><path d="M19 4.5l-7.5 5.63h15L19 4.5zm6.56 13.13H12.44a.94.94 0 0 0-.94.94v.93h15v-.94a.94.94 0 0 0-.94-.93zm-5.62-6.57h1.88v5.63h-1.88zm3.75 0h1.88v5.63h-1.88zm-7.5 0h1.88v5.63h-1.88zm-3.75 0h1.88v5.63h-1.88z"/></svg>
              </div>
              {/* Cash on delivery */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} SIDIS FZ-LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
