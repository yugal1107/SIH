import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <TrainTrackIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">RailMADAD + IRCTC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/complaint" className="hover:underline" prefetch={false}>
            File Complaints
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Check Schedules
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Book Tickets
          </Link>
          <Link href="/feedback" className="hover:underline" prefetch={false}>
            Feedback
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Seamless Train Travel Experience
                </h1>
                <p className="text-muted-foreground md:text-xl lg:text-2xl">
                  Combining the best features of RailMADAD and IRCTC for a
                  hassle-free journey.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/complaint"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    File Complaints
                  </Link>
                  <Link
                    href="/complaint"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Check Complaint Status
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Card className="w-full max-w-md mx-auto">
                  <CardHeader className="flex flex-row items-center">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          Rail Assistant
                        </p>
                        <p className="text-sm text-muted-foreground">
                          railassistant@example.com
                        </p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="ml-auto rounded-full"
                    >
                      <PlusIcon className="w-4 h-4" />
                      <span className="sr-only">New message</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                        Hi, how can I assist you today?
                      </div>
                      <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                        I need to file a complaint about a recent train delay.
                      </div>
                      <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                        Okay, let&aposs get started. Can you please provide the
                        details of your journey?
                      </div>
                      <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                        Sure, I was traveling from Delhi to Mumbai on train
                        number 12345 on June 15th. The train was delayed by over
                        2 hours.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <form className="flex items-center w-full space-x-2">
                      <Input
                        id="message"
                        placeholder="Type your message..."
                        className="flex-1"
                        autoComplete="off"
                      />
                      <Button type="submit" size="icon">
                        <SendIcon className="w-4 h-4" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </form>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  width={550}
                  height={310}
                  alt="Train Schedule"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <Link
                  href="#"
                  className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-primary-foreground transition-colors hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Check Train Schedules
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    IRCTC Integration
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Seamless Ticket Booking
                  </h2>
                  <p className="text-muted-foreground md:text-xl lg:text-2xl">
                    Easily book train tickets with our IRCTC integration. Manage
                    your bookings and view your travel history.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="https://www.irctc.co.in/nget/train-search"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book Tickets
                  </Link>
                  <Link
                    href="https://enquiry.indianrail.gov.in/mntes/"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Train enquiry & Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    RailMADAD Integration
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Seamless Railway Logistics Solutions
                  </h2>
                  <p className="text-muted-foreground md:text-xl lg:text-2xl">
                    Effortlessly send, track, and manage your parcels and
                    freight with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Railways Freight Services
                  </Link>
                  <Link
                    href="https://parcel.indianrail.gov.in/"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Railways Parcel Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  width={550}
                  height={310}
                  alt="File Complaints"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <Link
                  href="#"
                  className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-primary-foreground transition-colors hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  prefetch={false}
                >
                  File Complaints
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  width={550}
                  height={310}
                  alt="Feedback"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <Link
                  href="#"
                  className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-bold text-primary-foreground transition-colors hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Provide Feedback
                </Link>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Feedback
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Help Us Improve
                  </h2>
                  <p className="text-muted-foreground md:text-xl lg:text-2xl">
                    Share your feedback and suggestions to help us enhance your
                    train travel experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Provide Feedback
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Check Feedback Status
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground px-4 md:px-6 py-4 flex items-center justify-between">
        <p className="text-sm">
          &copy; 2024 RailMADAD + IRCTC. All rights reserved.
        </p>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function TrainTrackIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </svg>
  );
}
