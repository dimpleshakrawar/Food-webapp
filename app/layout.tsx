import Header from "@/components/Header";
import FoodDataProvider from "../context/allFoodContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FoodDataProvider>
          <Header />
          <div className="mt-[4rem]">{children}</div>
        </FoodDataProvider>
      </body>
    </html>
  );
}
