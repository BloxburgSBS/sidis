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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 1000 324">
                  <path
                    d="M651.3,0.2h-118c-18.4,0.5-34.3,10.8-41.9,27.8L363.5,302.9h118.2c0,0,15.6-41.8,19.1-50.9c10.4,0,103.7,0.1,116.9,0.1c2.7,12.2,11.1,50.8,11.1,50.8h104.3L651.3,0.2z M529.7,188.9c7.5-19.6,36.1-93.3,36.1-93.3c-0.5,0.8,7.4-19.7,12-32.6l6.1,29.1c0,0,17.3,80.5,21,96.8H529.7z"
                    fill="#00579f"
                  />
                  <path
                    d="M321.1,202.9l-56.2-202.7H183.5c-17.5,0.5-32.9,10.3-38.9,27.2L12.2,302.9h118.7l18.8-50.3h115.1L321.1,202.9z M177.7,188.9l47.7-133.6l26.9,133.6H177.7z"
                    fill="#00579f"
                  />
                  <path
                    d="M854.4,302.9h109.8L897.7,0.2H809.9c-16.8,0-31,9.3-37.5,24.1L681.7,302.9h118.2l13.1-35.9h80.2L854.4,302.9z M833.5,188.9c0,0,19.5-53.3,23.9-65.2c12.3,0,49.1,0,55.2,0c3.2,14.6,13.4,65.2,13.4,65.2H833.5z"
                    fill="#00579f"
                  />
                  <path
                    d="M0,0.2l0.9,5.2c0,0,34.7,7,66.3,18.8c31.6,11.7,42.1,18.7,42.1,18.7l-0.1-42.7L0,0.2z"
                    fill="#faa61a"
                  />
                </svg>
              </div>

              {/* Mastercard */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 146.8 120.41">
                  <path
                    d="M36.35,10.86A54.11,54.11,0,0,0,15.53,33.33a60,60,0,0,0-6.82,27.92,60.09,60.09,0,0,0,6.82,28,54.11,54.11,0,0,0,20.81,22.47,55.1,55.1,0,0,0,28.3,7.74,55.12,55.12,0,0,0,28.3-7.74,54.19,54.19,0,0,0,20.82-22.47,60.09,60.09,0,0,0,6.82-28,60,60,0,0,0-6.82-27.92A54.19,54.19,0,0,0,92.94,10.86a55.12,55.12,0,0,0-28.3-7.74A55.1,55.1,0,0,0,36.35,10.86Z"
                    fill="#231f20"
                    opacity="0.07"
                  />
                  <path
                    d="M73.3,17.94A50.29,50.29,0,0,0,40.45,34.56,52.13,52.13,0,0,0,28.84,61.25a52.08,52.08,0,0,0,11.6,26.68A50.29,50.29,0,0,0,73.3,104.54a50.29,50.29,0,0,0,32.85-16.61,52.08,52.08,0,0,0,11.6-26.68,52.13,52.13,0,0,0-11.6-26.69A50.29,50.29,0,0,0,73.3,17.94Z"
                    fill="#231f20"
                    opacity="0.05"
                  />
                  <path
                    d="M121.07,61.25a49,49,0,0,1-10.93,25.1A47.59,47.59,0,0,1,79.5,101.92a47.59,47.59,0,0,1-30.64-15.57A49,49,0,0,1,37.93,61.25a49,49,0,0,1,10.93-25.1A47.59,47.59,0,0,1,79.5,20.58a47.59,47.59,0,0,1,30.64,15.57A49,49,0,0,1,121.07,61.25Z"
                    fill="#231f20"
                    opacity="0.05"
                  />
                  <path
                    d="M73.3,25.33a43.5,43.5,0,0,0-28.48,10.4A44.9,44.9,0,0,0,32.17,61.25a44.9,44.9,0,0,0,12.65,25.52A43.5,43.5,0,0,0,73.3,97.17a43.5,43.5,0,0,0,28.48-10.4A44.9,44.9,0,0,0,114.43,61.25a44.9,44.9,0,0,0-12.65-25.52A43.5,43.5,0,0,0,73.3,25.33Z"
                    fill="#231f20"
                    opacity="0.05"
                  />
                  <rect x="54.64" y="0.15" width="37.02" height="60.2" fill="#ff5f00" />
                  <path
                    d="M56.61,30.25a38.27,38.27,0,0,1,14.66-30.1,38.25,38.25,0,1,0,0,60.2A38.27,38.27,0,0,1,56.61,30.25Z"
                    fill="#eb001b"
                  />
                  <path
                    d="M146.8,30.25a38.25,38.25,0,0,1-61.8,30.1,38.25,38.25,0,0,0,0-60.2A38.25,38.25,0,0,1,146.8,30.25Z"
                    transform="translate(-15.5)"
                    fill="#f79e1b"
                  />
                </svg>
              </div>

              {/* Tabby */}
              <div className="bg-white rounded-md p-2 h-10 flex items-center justify-center">
                <svg width="60" height="18" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.95 0H0V17.58H7.95V0Z" fill="#191919" />
                  <path d="M20.04 0H12.09V17.58H20.04V0Z" fill="#191919" />
                  <path d="M36.09 0H24.18V17.58H36.09V0Z" fill="#191919" />
                  <path d="M7.95 21.6H0V24H7.95V21.6Z" fill="#191919" />
                  <path d="M20.04 21.6H12.09V24H20.04V21.6Z" fill="#191919" />
                  <path d="M36.09 21.6H24.18V24H36.09V21.6Z" fill="#191919" />
                  <path d="M44.61 5.7H41.58V17.58H44.61V5.7Z" fill="#191919" />
                  <path d="M44.61 0H41.58V3.03H44.61V0Z" fill="#191919" />
                  <path
                    d="M54.09 5.46C51.24 5.46 49.35 7.53 49.35 10.38C49.35 13.23 51.24 15.3 54.09 15.3C55.44 15.3 56.61 14.82 57.42 13.95V15.06H60.27V5.7H57.42V6.81C56.61 5.94 55.44 5.46 54.09 5.46ZM54.63 12.69C53.1 12.69 52.2 11.7 52.2 10.38C52.2 9.06 53.1 8.07 54.63 8.07C56.16 8.07 57.06 9.06 57.06 10.38C57.06 11.7 56.16 12.69 54.63 12.69Z"
                    fill="#191919"
                  />
                  <path
                    d="M67.83 5.46C66.48 5.46 65.31 5.94 64.5 6.81V5.7H61.65V15.06H64.5V13.95C65.31 14.82 66.48 15.3 67.83 15.3C70.68 15.3 72.57 13.23 72.57 10.38C72.57 7.53 70.68 5.46 67.83 5.46ZM67.29 12.69C65.76 12.69 64.86 11.7 64.86 10.38C64.86 9.06 65.76 8.07 67.29 8.07C68.82 8.07 69.72 9.06 69.72 10.38C69.72 11.7 68.82 12.69 67.29 12.69Z"
                    fill="#191919"
                  />
                  <path d="M80 5.7H76.77V2.31H73.92V5.7H72.21V8.13H73.92V15.06H76.77V8.13H80V5.7Z" fill="#191919" />
                </svg>
              </div>
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
