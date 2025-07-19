import "@/app/globals.css";
import HomeContextProvider from "@/context/home.context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeContextProvider>{children}</HomeContextProvider>
    </>
  );
}
