import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Shivtej's Portfolio</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Home</h3>
              <a href="/" className="text-sm text-muted-foreground">
                Changelog
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">About Me</h3>
              <a href="/" className="text-sm text-muted-foreground">
                Education
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Experience
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Portfolio
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Social Links</h3>
              <a href="/" className="text-sm text-muted-foreground">
                Linkedln
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                HackerRank
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Github
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Shivtej Sonawane. All rights reserved</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
