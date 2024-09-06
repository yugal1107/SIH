import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, TrainTrackIcon } from "lucide-react";


const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground px-4 md:px-6 py-3 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <TrainTrackIcon className="w-6 h-6" />
        <span className="text-lg font-semibold">RailMADAD + IRCTC</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link href="https://railway-complaint-analyzer.vercel.app/" className="hover:underline" prefetch={false}>
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
  );
};

export default Navbar;
