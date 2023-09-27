import "./globals.scss";

export const metadata = {
  title: "Henrik's Lovely Kitchen App",
  description: "This is a bloody lovely app, made for Henrik's delicious cooking 🧑‍🍳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
