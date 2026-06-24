import Tabs from "@/components/Tabs";
import Footer from "@/components/Footer";
import React from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Tabs />
      {children}
      <Footer />
    </>
  );
}
