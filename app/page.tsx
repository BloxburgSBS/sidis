import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Server,
  HardDrive,
  Cpu,
  CheckCircle,
  Users,
  Shield,
  MemoryStickIcon as Memory,
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
                  Your IT Hardware Partner in the UAE
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  SIDIS FZ-LLC provides complete IT hardware solutions including servers, storage, networking, and
                  premium components.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#services">
                  <Button className="bg-[#40148c] hover:bg-[#40148c]/90">Our Services</Button>
                </Link>
                {/*
                <a
                  href="https://sidis.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#40148c] font-medium hover:underline"
                >
                  Visit Our Store
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>*/}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="https://i.imgur.com/9sC45Xm.png"
                  alt="SIDIS FZ-LLC IT Hardware Solutions"
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
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                SIDIS FZ-LLC is a leading IT hardware solutions provider based in Ras Al Khaimah, UAE. We help
                businesses and organizations build robust IT infrastructure.
              </p>
            </div>
            <div className="grid max-w-4xl gap-8 py-8 md:grid-cols-2">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#40148c]/10">
                  <Clock className="h-6 w-6 text-[#40148c]" />
                </div>
                <h3 className="text-xl font-bold">Our Experience</h3>
                <p className="text-muted-foreground">
                  With specialized expertise in server and IT hardware solutions, we've built a reputation for
                  reliability and excellence in helping businesses build robust IT infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#40148c]/10">
                  <MapPin className="h-6 w-6 text-[#40148c]" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  We're dedicated to providing top-tier IT hardware components and server solutions to businesses across
                  the UAE, with a focus on quality, reliability, and expert support.
                </p>
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
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Server Solutions</h3>
                <p className="text-muted-foreground text-center">
                  Complete server solutions from leading brands including Supermicro, HPE, Dell, and Lenovo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <HardDrive className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Storage Solutions</h3>
                <p className="text-muted-foreground text-center">
                  Enterprise-grade SSDs, HDDs, and storage systems from Samsung, Seagate, Western Digital, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">CPU & Components</h3>
                <p className="text-muted-foreground text-center">
                  Premium processors and components from Intel, AMD, and other leading manufacturers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#40148c]">
                  <Memory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Memory Solutions</h3>
                <p className="text-muted-foreground text-center">
                  High-performance server and desktop memory from Samsung, Micron, Kingston, and other trusted brands.
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
                We've helped numerous businesses build robust IT infrastructure across the UAE
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 grid-cols-2 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={1000} suffix="+" />
                </div>
                <p className="text-muted-foreground text-center font-medium">Orders Completed</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={99} suffix="%" />
                </div>
                <p className="text-muted-foreground text-center font-medium">Customer Satisfaction</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={200} suffix="+" />
                </div>
                <p className="text-muted-foreground text-center font-medium">Active Clients</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="text-4xl font-bold text-[#40148c]">
                  <CounterAnimation end={8} />
                </div>
                <p className="text-muted-foreground text-center font-medium">Years of Experience</p>
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
                Our streamlined process makes IT hardware procurement simple and efficient
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  1
                </div>
                <Cpu className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">Consultation</h3>
                <p className="text-muted-foreground text-center">
                  Our experts work with you to understand your IT infrastructure needs and recommend the right
                  solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  2
                </div>
                <Server className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">Procurement</h3>
                <p className="text-muted-foreground text-center">
                  We source high-quality hardware components from trusted manufacturers and perform technical testing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-6 shadow-sm bg-background relative">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#40148c] text-white font-bold">
                  3
                </div>
                <Shield className="h-10 w-10 text-[#40148c]" />
                <h3 className="text-xl font-bold">Support & Warranty</h3>
                <p className="text-muted-foreground text-center">
                  We provide ongoing technical support and warranty services to ensure your hardware performs optimally.
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
                    <p className="text-sm text-muted-foreground">IT Director, Financial Services</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "SIDIS has transformed our data center infrastructure. Their server solutions and technical expertise
                  have significantly improved our system performance and reliability."
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
                    <p className="text-sm text-muted-foreground">CTO, Tech Startup</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "Their hardware procurement team helped us find high-quality components at competitive prices. Our
                  systems are running 40% faster since upgrading with SIDIS hardware."
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
                    <p className="text-sm text-muted-foreground">System Administrator</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-left">
                  "The storage solutions SIDIS provided have transformed our data management capabilities. Their
                  technical support team is responsive and knowledgeable, making them a trusted partner."
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
                Find answers to common questions about our IT hardware services
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:gap-8">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 shadow-sm bg-background">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#40148c]" />
                  </div>
                  <div className="flex flex-col space-y-2 text-left">
                    <h3 className="text-xl font-bold">What brands do you offer?</h3>
                    <p className="text-muted-foreground">
                      We offer hardware from leading manufacturers including Intel, AMD, Samsung, Seagate, Western
                      Digital, Supermicro, HPE, Dell, Lenovo, and many more.
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
                    <h3 className="text-xl font-bold">Do you provide warranty and technical support?</h3>
                    <p className="text-muted-foreground">
                      Yes, all our hardware comes with manufacturer warranty, and we provide additional technical
                      support to ensure your systems run optimally throughout their lifecycle.
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
                    <h3 className="text-xl font-bold">Can you help with custom server configurations?</h3>
                    <p className="text-muted-foreground">
                      Our team of experts can help design and build custom server configurations tailored to your
                      specific workload requirements, whether you need high-performance computing, storage-optimized
                      systems, or specialized solutions.
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
                    <h3 className="text-xl font-bold">Do you offer hardware for data centers?</h3>
                    <p className="text-muted-foreground">
                      Yes, we specialize in data center hardware including servers, storage systems, networking
                      equipment, and all the components needed to build and maintain enterprise-grade IT infrastructure.
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
                Ready to upgrade your IT infrastructure? Get in touch with us today to discuss how we can help.
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
                        <option value="servers">Server Solutions</option>
                        <option value="storage">Storage Solutions</option>
                        <option value="components">CPU & Components</option>
                        <option value="memory">Memory Solutions</option>
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
                        placeholder="Tell us about your IT hardware needs"
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
