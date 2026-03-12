import "./globals.css";

export const metadata = {
  title: "Rahul Verma | Product Manager",
  description: "Product Manager building fintech onboarding systems"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}