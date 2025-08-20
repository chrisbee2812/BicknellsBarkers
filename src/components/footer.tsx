import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Bicknell's Barkers. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/profile.php?id=61574947135337" target="_blank" aria-label="Facebook">
              <Facebook className="h-10 w-10" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/bicknells_barkers/" target="_blank" aria-label="Instagram">
              <Instagram className="h-10 w-10" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.tiktok.com/@bicknellsbarkers" target="_blank" aria-label="Twitter">
              <PiTiktokLogo className="h-10 w-10" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
