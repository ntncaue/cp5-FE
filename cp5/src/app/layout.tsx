import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worlds in Collision",
  description: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
