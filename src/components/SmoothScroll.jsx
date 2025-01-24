import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScroll = ({ children }) => {
  const scrollbarRef = useRef(null);
  const scrollbarInstance = useRef(null);

  useEffect(() => {
    scrollbarInstance.current = Scrollbar.init(scrollbarRef.current, {
      damping: 0.07,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
    });

    // Expose scrollbar instance to window for global access
    window.smoothScrollbar = scrollbarInstance.current;

    return () => {
      if (scrollbarInstance.current) scrollbarInstance.current.destroy();
    };
  }, []);

  return (
    <div ref={scrollbarRef} style={{ height: "100vh", width: "100vw" }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
