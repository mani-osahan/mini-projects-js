import Navbar from "./components/navbar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* <Navbar /> */}
      {children}
      </body>
    </html>
  );
}
