import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)] py-8">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Alex Developer. All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-400">
          Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Alex
        </p>
      </div>
    </footer>
  );
}
