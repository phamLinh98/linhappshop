export default function RootLayout({
  children, header, footer
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"> 
        <header>{header}</header>
        {children}
        <footer>{footer}</footer>
      </body>
    </html>
  );
}
