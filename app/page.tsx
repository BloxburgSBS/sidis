import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  ShoppingCart,
  Store,
  Truck,
  ExternalLink,
  CheckCircle,
  Users,
  Package,
} from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#40148c]/10 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your E-Commerce Partner in the UAE
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  SIDIS FZ-LLC provides complete e-commerce solutions including fulfillment, product sourcing, and
                  Shopify development.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#services">
                  <Button className="bg-[#40148c] hover:bg-[#40148c]/90">Our Services</Button>
                </Link>
                <a
                  href="https://store.sidis.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#40148c] font-medium hover:underline"
                >
                  Visit Our Store
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="/images/hero-ecommerce.jpg"
                  alt="SIDIS FZ-LLC E-Commerce Solutions"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SIDIS FZ-LLC is a leading e-commerce solutions provider based in Ras Al Khaimah, UAE. We help
                entrepreneurs and businesses succeed in the online marketplace.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 md:gap-8">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/warehouse.jpg"
                  alt="SIDIS Warehouse"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#40148c]/10">
                      <Clock className="h-6 w-6 text-[#40148c]" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">Our Experience</h3>
                    <p className="text-muted-foreground">
                      With specialized expertise in UAE e-commerce logistics, we've built a reputation for reliability
                      and excellence in helping businesses scale their online operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#40148c]/10">
                      <MapPin className="h-6 w-6 text-[#40148c]" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      We're dedicated to empowering e-commerce entrepreneurs with seamless logistics solutions, enabling
                      them to focus on growth while we handle the operational complexities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your Premier E-Commerce Solutions Provider in the UAE
              </p>
              <p className="max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-2">
                Accelerate your online business growth with SIDIS - delivering comprehensive e-commerce infrastructure
                and expertise tailored to the UAE market.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Warehousing</h3>
                <p className="text-muted-foreground text-center">
                  Strategic warehouse facilities across the UAE for optimal inventory management and distribution.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">COD Remit</h3>
                <p className="text-muted-foreground text-center">
                  Secure daily cash-on-delivery payments directly to your UAE bank account with transparent tracking.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Fulfillment</h3>
                <p className="text-muted-foreground text-center">
                  End-to-end order processing with premium packaging and expedited delivery throughout the Emirates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Product Sourcing</h3>
                <p className="text-muted-foreground text-center">
                  Strategic product identification and supplier negotiation to secure high-margin, trending products for
                  your store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've helped numerous businesses scale their e-commerce operations in the UAE
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={5000} suffix="+" />
                </div>
                <p className="text-muted-foreground text-center font-medium">Orders Fulfilled Monthly</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={98} suffix="%" />
                </div>
                <p className="text-muted-foreground text-center font-medium">On-Time Delivery Rate</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={100} suffix="+" />
                </div>
                <p className="text-muted-foreground text-center font-medium">Active Clients</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={7} />
                </div>
                <p className="text-muted-foreground text-center font-medium">Emirates Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined process makes e-commerce fulfillment simple and efficient
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  1
                </div>
                <Package className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">Send Your Inventory</h3>
                <p className="text-muted-foreground text-center">
                  Ship your products to our warehouse or let us source products for you. We'll handle the rest.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  2
                </div>
                <Store className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">We Store & Manage</h3>
                <p className="text-muted-foreground text-center">
                  Your inventory is stored in our secure facilities and managed through our advanced inventory system.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  3
                </div>
                <Truck className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">We Ship & You Grow</h3>
                <p className="text-muted-foreground text-center">
                  Orders are picked, packed, and shipped to your customers while you focus on growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-[#40148c]/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#40148c]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ahmed K.</h4>
                    <p className="text-sm text-muted-foreground">Fashion E-Commerce</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "SIDIS has transformed our logistics operations. Their COD service and next-day delivery have
                  significantly improved our customer satisfaction rates."
                </p>
                <div className="flex text-[#40148c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-[#40148c]/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#40148c]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sara M.</h4>
                    <p className="text-sm text-muted-foreground">Beauty Products</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "Their product sourcing team helped us find high-quality beauty products at competitive prices. Our
                  profit margins have increased by 30% since working with SIDIS."
                </p>
                <div className="flex text-[#40148c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-[#40148c]/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#40148c]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mohammed R.</h4>
                    <p className="text-sm text-muted-foreground">Electronics Store</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "The Shopify store SIDIS built for us has a 25% higher conversion rate than our previous site. Their
                  team understands e-commerce optimization and delivers results."
                </p>
                <div className="flex text-[#40148c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our e-commerce services
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:gap-8">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#40148c]" />
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">How quickly can you fulfill orders?</h3>
                    <p className="text-muted-foreground">
                      We offer next-day delivery within the UAE for orders placed before 2 PM. International shipping
                      times vary by destination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#40148c]" />
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">How does your COD service work?</h3>
                    <p className="text-muted-foreground">
                      We collect cash payments from your customers upon delivery and transfer the funds directly to your
                      UAE bank account on a daily basis, with detailed reporting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#40148c]" />
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">Can you help with product sourcing if I'm new to e-commerce?</h3>
                    <p className="text-muted-foreground">
                      Our product sourcing team can help identify trending products, negotiate with suppliers, and
                      ensure quality control for your new e-commerce venture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#40148c]" />
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">Do you integrate with my existing e-commerce platform?</h3>
                    <p className="text-muted-foreground">
                      Yes, we integrate with all major e-commerce platforms including Shopify, WooCommerce, Magento, and
                      custom solutions to ensure seamless order processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to grow your e-commerce business? Get in touch with us today to discuss how we can help.
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-5xl gap-6 py-8 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#40148c]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Industrial Zone-FZ - Office No. A2-202 Building no. A1 - Al Jazeera Al Hamra - Ras Al Khaimah
                          - United Arab Emirates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 flex-shrink-0">
                        <PhoneCall className="h-6 w-6 text-[#40148c]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-sm text-muted-foreground">+971 55 121 1436</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#40148c]" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold">Email</h3>
                        <p className="text-sm text-muted-foreground">info@sidis.ae</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <form className="flex flex-col space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="fulfillment">Fulfillment Services</option>
                        <option value="sourcing">Product Sourcing</option>
                        <option value="shopify">Shopify Development</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your e-commerce needs"
                      />
                    </div>
                    <Button className="bg-[#40148c] hover:bg-[#40148c]/90">Send Message</Button>
                  </form>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden h-[400px] md:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.5442482363756!2d55.798047600000004!3d25.686398399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60bbe79f66127%3A0xeab57066b03d3c65!2sSIDIS%20FZ-LLC!5e0!3m2!1sen!2sus!4v1744637054754!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SIDIS FZ-LLC Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
