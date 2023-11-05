import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Video } from "@/components/Video"
import { Contact } from "@/components/Contact"
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="overflow-hidden">
    <Header />
    <Stats />
    <About />
    <Video />
    <Contact />
    </div>
  );
}
