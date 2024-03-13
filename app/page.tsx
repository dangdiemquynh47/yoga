import { Metadata } from "next";
import LandingPage from "./components/landingpage";

export const metadata: Metadata = {
  title: "Mala Yoga",
  description:
    "If you`re here and read a little about me, I believe the universe is connecting us Surely you are also a Yogi/Yogini or the universe has sent a signal for you to touch your finger to touch Yoga Hope my sharing will help you in this journey Namaste",
    openGraph: {
      title: "Mala Yoga",
      description: "",
      url: "https://malayoga.vn/",
      type: "website",
      locale: "vi_VN",
      siteName: "MALA YOGA",
      images: [
        {
          url: "/images/malayoga/IMG_0802.jpg",
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