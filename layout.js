import './globals.css';

export const metadata = {
  title: 'FARHIEN — Contemporary Clothing',
  description: 'FARHIEN — considered clothing for a modern wardrobe.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
