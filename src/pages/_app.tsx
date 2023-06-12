import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { trpc } from "../utils/trpc";

import "../styles/main.scss";
import { Navigation } from "../components/Navigation";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  
  const containerRef = useRef(null);
  const ScrollOptions = {
    smooth: true,
    getSpeed: true,
    getDirection: true,
    lerp: 0.1,
  }

  return (
    
    <LocomotiveScrollProvider options={{smooth: true,}} watch={[]} containerRef={containerRef}>
      <SessionProvider session={session}>
        <Navigation title="💣" links={[{ href: "/projects", label: "Projects" },]}/>
        <div id="main" data-scroll-container ref={containerRef}>
          <Component {...pageProps} data-scroll-section />
        </div>
      </SessionProvider>
    </LocomotiveScrollProvider>
  );
};

export default trpc.withTRPC(MyApp);
