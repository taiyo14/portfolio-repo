import LayoutContainer from "@/components/layouts/layout-container";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gutter">
        <LayoutContainer className="border border-pink-700">
          <header className="w-full border border-amber-500">
            <nav className="flex content-end justify-between">
              <div>
                <Link href="/" className="w-fit text-2xl">
                  Kimtaiyo Mech
                </Link>
              </div>
              <div>Contact</div>
            </nav>
          </header>
          {children}
        </LayoutContainer>
      </body>
    </html>
  );
}
