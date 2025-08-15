import Link from "next/link";
import { Github, Linkedin, Code2, Instagram, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} BHUPENDER. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#about" className="hover:text-foreground">About</Link>
          <Link href="#projects" className="hover:text-foreground">Projects</Link>
          <Link href="#contact" className="hover:text-foreground">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-1" /> CV
            </a>
          </Button>
          <Link href="https://github.com/" target="_blank" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/bhupender23/" target="_blank" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://leetcode.com/u/Bhupender23/" target="_blank" aria-label="LeetCode" className="hover:text-foreground">
            <Code2 className="h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/ibhux_/" target="_blank" aria-label="Instagram" className="hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#contact" aria-label="Email" className="hover:text-foreground">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}


