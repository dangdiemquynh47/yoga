import { Metadata } from "next";
import LandingPage from "./components/landingpage";

export const metadata: Metadata = {
  title: "Mala Yoga",
  description: "Discover balance, strength, and peace through mindful movement and breathwork with me!",
  metadataBase: new URL("https://malayoga.vn"),
  keywords:
    "Trắc nghiệm dosha, malayoga, Mala Yoga, Yoga Mala",
  openGraph: {
    title: "Mala Yoga",
    description: "Discover balance, strength, and peace through mindful movement and breathwork with me!",
    url: "https://malayoga.vn",
    type: "website",
    locale: "vi_VN",
    siteName: "Mala Yoga",
    images: [
      {
        url: "/images/malayoga/IMG_0857.jpg",
        alt: "Mala Yoga",
      },
    ],
  },
};
export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingPage />
    </main>
  );
}

// export const revalidate = 60;
//
