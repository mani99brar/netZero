import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { Contact } from "@/components/Contact";
import { Stats } from "@/components/Stats";

export default function Home() {
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const contactRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    switch (scroll) {
      case 1:
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        setScroll(0);
        break;
      case 2:
        videoRef.current?.scrollIntoView({ behavior: 'smooth' });
        setScroll(0);
        break;
      case 3:
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        setScroll(0);
        break;
      default:
        break;
    }
  }, [scroll]);

  return (
    <div className="overflow-hidden">
      <Header setScroll={setScroll} />
      <Stats />
      <div ref={aboutRef}><About /></div>
      <div ref={videoRef}><Video /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}
