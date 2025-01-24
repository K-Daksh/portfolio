import { useRef, useEffect, useState } from "react";
import ProfilePic from "./assets/PF2.jpg";
import Schedulo from "./assets/schedulo.png";
import uber1 from "./assets/uber1.png";
import uber2 from "./assets/uber2.png";
import Altcode from "./assets/Altcode.png";
import uber3 from "./assets/uber3.png";
import {
  enableGlobalCustomCursorYellow,
  enableGlobalCustomCursorBlue,
  enableGlobalCustomCursorBlack,
  enableGlobalCustomCursorFunk,
  enableGlobalCustomCursorHappy,
} from "./cursorUtils";
import gsap from "gsap";
import SmoothScroll from "./components/SmoothScroll";
import MobileWarning from "./components/MobileWarning";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const handEmoji = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);
  const dockRef = useRef(null);

  const scrollToSection = (ref) => {
    if (window.smoothScrollbar) {
      const targetPosition = ref.current.offsetTop;
      window.smoothScrollbar.scrollTo(0, targetPosition, 1000); // 1000ms duration
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .set(handEmoji.current, { transformOrigin: "bottom right" })
      .to(handEmoji.current, {
        rotation: 25,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(handEmoji.current, {
        rotation: -13,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(handEmoji.current, {
        rotation: 5,
        duration: 0.4,
        ease: "power1.inOut",
      });
  }, [handEmoji]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (dockRef.current) {
          dockRef.current.style.opacity = entry.isIntersecting ? "0" : "1";
          dockRef.current.style.transform = entry.isIntersecting
            ? "translateY(100px)"
            : "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 800); // Consider anything less than 1024px as mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <>
      <div
        ref={dockRef}
        className="fixed flex justify-center bottom-[2vw] w-full z-[9999] transition-all duration-300"
      >
        <div
          style={{
            backgroundColor: "rgba(197, 196, 196, 0.26)",
            backdropFilter: "blur(6px) saturate(180%)",
          }}
          className="p-[2.5vh] rounded-lg"
        >
          <span
            onClick={() => scrollToSection(homeRef)}
            className="text-[3vh] p-[1vh] m-[0.5vh] hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
          >
            HOME
          </span>
          <span
            onClick={() => scrollToSection(projectsRef)}
            className="text-[3vh] p-[1vh] m-[0.5vh] hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
          >
            PROJECTS
          </span>
          <span
            onClick={() => scrollToSection(skillsRef)}
            className="text-[3vh] p-[1vh] m-[0.5vh] hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
          >
            SKILLS
          </span>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1IWjSyA9tl66X81qXuxQlt7Jr90AgnbJl/view?usp=sharing"
          >
            <span className="text-[3vh] p-[1vh] m-[0.5vh] hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors">
              RESUME
            </span>
          </a>
        </div>
      </div>

      <SmoothScroll>
        <div className="relative">
          <div
            ref={homeRef}
            className="h-screen w-screen flex items-start relative"
          >
            <div className="h-[70%] flex flex-col justify-around items-start w-1/2 ml-[12vh] p-[2vh] mt-[10vh]">
              <div>
                <span className="text-[7.5vh] font-semibold">Hello</span>

                <span
                  className="text-[7.5vh] inline-block ml-[0.5vh]"
                  ref={handEmoji}
                >
                  👋
                </span>
              </div>
              <div className="text-[5vh] font-thin">
                <span>I'm </span>
                <span className="font-bold text-blue-600">Daksh Kitukale</span>
                <span>
                  , a full-stack developer based in India. I enjoy solving
                  problems and creating cool stuff.
                </span>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-[2vh]">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daksh-kitukale-824843235/"
                >
                  <i
                    title="Visit LinkedIn Profile"
                    className="ri-linkedin-box-fill ri-xl hover:bg-blue-200 cursor-pointer"
                  ></i>
                </a>

                <a target="_blank" href="https://github.com/K-Daksh/">
                  <i
                    title="Visit GitHub Profile"
                    className="ri-github-fill ri-xl hover:bg-blue-200 cursor-pointer"
                  ></i>
                </a>

                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1IWjSyA9tl66X81qXuxQlt7Jr90AgnbJl/view?usp=sharing"
                >
                  <i
                    title="View Resume"
                    className="ri-file-text-fill hover:bg-blue-200 ri-xl cursor-pointer"
                  ></i>
                </a>

                <a target="_blank" href="https://leetcode.com/u/K-Daksh/">
                  <img
                    title="LeetCode Profile"
                    className="w-[3.2vh] cursor-pointer hover:bg-blue-200"
                    src="https://static-00.iconduck.com/assets.00/leetcode-icon-430x512-6l72chsk.png"
                    alt="LeetCode"
                  />
                </a>
              </div>
              <div>
                <span className="text-[2.4vh]">Get in touch </span>
                <a
                  href="mailto:dakshkitukale03@gmail.com"
                  target="_blank"
                  className=" font-thin text-[3.6vh] px-[0.8vh] hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                >
                  dakshkitukale03@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-full">
              <img
                title="Profile Picture"
                onPointerEnter={() => enableGlobalCustomCursorHappy()}
                onPointerLeave={() => enableGlobalCustomCursorBlack()}
                className="w-[50vh] rounded-full"
                src={ProfilePic}
                alt="profilePic"
              />
            </div>
          </div>
          <div className="w-full h-[0.3vh] bg-blue-200"></div>
          <div
            ref={skillsRef}
            onPointerEnter={() => enableGlobalCustomCursorYellow()}
            onPointerLeave={() => enableGlobalCustomCursorBlack()}
          >
            <h1 className="text-[7vh] font-semibold text-blue-500 text-center mt-[10vh] ">
              SKILLS
            </h1>
            <div className="ml-[5vh]">
              <div className="h-full w-screen mt-[5vh] mb-[10vh]">
                <div className="flex flex-row justify-start items-center py-[1vh] pl-[3vh]">
                  <div className="w-1/4 text-[5vh] text-blue-500">
                    Languages
                  </div>
                  <div className="w-1/2 text-[3vh] font-thin">
                    C, C++, Python, JavaScript, Golang, TypeScript
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center py-[1vh] pl-[3vh]">
                  <div className="w-1/4 text-[5vh] text-blue-500">
                    Frameworks/Libs
                  </div>
                  <div className="w-1/2 text-[3vh] font-thin">
                    React.js, Next.js, Node.js, Express.js, TailwindCSS,
                    Bootstrap, Flask, EJS, Hono
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center py-[1vh] pl-[3vh]">
                  <div className="w-1/4 text-[5vh] text-blue-500">
                    Databases
                  </div>
                  <div className="w-1/2 text-[3vh] font-thin">
                    MongoDb, MySQL, Firebase, Redis
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center py-[1vh] pl-[3vh]">
                  <div className="w-1/4 text-[5vh] text-blue-500">Tools</div>
                  <div className="w-1/2 text-[3vh] font-thin">
                    Git, Postman, Figma, GCP, RabbitMQ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.3vh] bg-blue-200"></div>
          {/* Project section */}
          <div ref={projectsRef} className="h-full w-screen">
            <h1 className="text-[7vh] font-semibold text-blue-500 text-center mt-[10vh] ">
              PROJECTS
            </h1>
            <div
              onPointerEnter={() => enableGlobalCustomCursorFunk()}
              onPointerLeave={() => enableGlobalCustomCursorBlack()}
              className="flex flex-col justify-start items-start w-full ml-[5vh]"
            >
              <div className="mt-[10vh] w-5/6">
                <div className="flex flex-row justify-start items-center h-full w-full">
                  <img
                    className="w-[60vh] h-auto mx-[3vh]"
                    src={Schedulo}
                    alt=""
                  />
                  <div className="pl-[1vh] w-full h-full flex flex-col items-start justify-between">
                    <div>
                      <h2 className="text-[5vh] text-blue-500">Schedulo</h2>
                      <span className="text-[2.5vh]  w-full">
                        Next.js, TailwindCSS, TypeScript, JavaScript, Node.js,
                        MongoDb, Redis, Express.js, Email.js, GCP App Engine
                      </span>
                    </div>

                    <h3 className="text-[3.2vh] font-thin w-full my-[2vh]">
                      A modern event scheduling platform that streamlines the
                      scheduling process, user signup, event creation, and
                      registration processes.
                    </h3>
                    <div>
                      <div>
                        <i className="ri-github-line pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://github.com/K-Daksh/Schedulo"
                        >
                          https://github.com/K-Daksh/Schedulo
                        </a>
                      </div>
                      <div>
                        <i className="ri-links-fill pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://schedulo-eight.vercel.app/"
                        >
                          https://schedulo-eight.vercel.app/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[8vh] w-5/6 h-full">
                <div className="flex flex-row justify-start items-center h-full w-full">
                  <img className="w-[19vh] ml-[3vh]" src={uber1} alt="uber1" />
                  <img
                    className="w-[19vh] mx-[1.5vh]"
                    src={uber2}
                    alt="uber2"
                  />

                  <img className="w-[19vh] mr-[3vh]" src={uber3} alt="uber3" />

                  <div className="pl-[1vh] w-[100%]  h-full flex flex-col items-start justify-between">
                    <div>
                      <h2 className="text-[5vh] text-blue-500">Uber Clone</h2>
                      <span className="text-[2.5vh]  w-full">
                        React.js, TailwindCSS, JavaScript, Node.js, MongoDb,
                        Socket.io, Express.js, Google Maps API, GCP App Engine
                      </span>
                    </div>

                    <h3 className="text-[3.2vh] font-thin w-full my-[2vh]">
                      This is a full-stack ride-hailing application inspired by
                      Uber. It demonstrates real-time location tracking, live
                      ride updates, driver assignments, and more.
                    </h3>
                    <div>
                      <div>
                        <i className="ri-github-line pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://github.com/K-Daksh/UberClone"
                        >
                          https://github.com/K-Daksh/UberClone
                        </a>
                      </div>
                      <div>
                        <i className="ri-links-fill pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://uber-clone-app-bay.vercel.app/"
                        >
                          https://uber-clone-app-bay.vercel.app/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-[8vh] mb-[18vh] w-5/6">
                <div className="flex flex-row justify-start items-center h-full w-full">
                  <img
                    className="w-[60vh] h-auto mx-[3vh]"
                    src={Altcode}
                    alt=""
                  />
                  <div className="pl-[1vh] w-full h-full flex flex-col items-start justify-between">
                    <div>
                      <h2 className="text-[5vh] text-blue-500">AltCode</h2>
                      <span className="text-[2.5vh]  w-full">
                        JavaScript, Node.js, ffmpeg, Jimp, ffmpeg-fluent,
                        express-fileupload
                      </span>
                    </div>

                    <h3 className="text-[3.2vh] font-thin w-full">
                      This is a web application that can convert any type of
                      file into a video and then can be uploaded to Youtube and
                      therefore getting unlimited cloud storage.
                    </h3>
                    <div>
                      <div>
                        <i className="ri-github-line pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://github.com/K-Daksh/altcode"
                        >
                          https://github.com/K-Daksh/altcode
                        </a>
                      </div>
                      <div>
                        <i className="ri-links-fill pr-[2vh]"></i>
                        <a
                          className="font-thin hover:text-blue-500 active:text-blue-700 cursor-pointer transition-colors"
                          target="_blank"
                          href="https://altcode-qrrate.onrender.com/"
                        >
                          https://altcode-qrrate.onrender.com/
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div
              ref={footerRef}
              className="h-[30vh] w-full bg-blue-500 text-white flex flex-col justify-center items-center"
            >
              <div>
                <span>Created By </span>
                <span className="text-[4vh] font-thin pl-[1vh]">
                  Daksh Kitukale
                </span>
              </div>
              <div className="text-[2.5vh] font-thin">
                Please feel free to react out. I am always open to new
                opportunities
              </div>
            </div>
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
