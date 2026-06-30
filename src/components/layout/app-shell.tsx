import { type ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-32 pt-6 sm:px-6 sm:pt-10 md:pb-24">
        {children}
      </main>
      <WhatsAppFab />
      <MobileCtaBar />
      <Footer />
    </>
  );
}
