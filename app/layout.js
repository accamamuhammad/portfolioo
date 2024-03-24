import "./globals.css";

export const metadata = {
  title: "Accama Muhammad",
  description: "Built by accama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
