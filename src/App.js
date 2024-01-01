import "./App.css";
import Nav from "./components/nav";

function App() {
  return (
    <div className="bg-black font-ULTRA">
      <Nav />

      <div class="w-[100%] h-[100%] overflow-hidden bg-black">
        <video
          controls=""
          controlslist="nodownload noremoteplayback"
          class="hero__video"
          kind="captions"
          type="video/mp4"
          src="https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4"
          poster="https://www.pepsi.com/en-us/refresh082123/media/LoadVideo_1920.png"
          autoplay="true"
          loop="true"
          playsinline="true"
          muted="true"
        ></video>
        {/* <div class="fixed m-0 w-[100%] flex flex-col -mt-[50px] h-screen cursor-pointer bg-transparent items-center justify-center">
          <button
            class="cursor-pointer mx-auto flex-row text-white text-6xl"
            aria-label="SCROLL"
          >
            ▽
          </button>
        </div> */}
      </div>
      <div className="text-white text-center font-extrabold">
        <h1 className="text-[4rem]">CELEBRATING 125 YEARS</h1>
        <h2 className="text-[2.5rem]">OF PEPSI FOR 125 DAYS.</h2>
      </div>
      <div className="bg-[#0025FF] w-[35rem] text-center text-white mx-auto py-6 mt-12 mb-12 text-[2.5rem]">
        <p>FOLLOW ALONG</p>
      </div>

      <img
        srcset="https://www.pepsi.com/en-us/refresh082123/images/PEP_125_MegaMix_KV_16x9@3x.png 1200w,
                     https://www.pepsi.com/en-us/refresh082123/images/PEP_MegaMix_3x4@3x.png 700w"
        sizes="(max-width: 400px) 300px, 1024px"
        src="https://www.pepsi.com/en-us/refresh082123/images/PEP_MegaMix_Mobile@3x.png"
        loading="lazy"
        width="auto"
        height="100%"
        alt="125 Years of Pepsi"
      ></img>
      <div class="other__video-container">
        <video
          controls=""
          controlslist="nodownload noremoteplayback"
          class="other__video"
          kind="captions"
          type="video/mp4"
          src="https://www.pepsi.com/en-us/refresh082123/media/Titan_TR_Digital_30_PETD3091000H_CreativeX_sm.mp4"
          poster="https://www.pepsi.com/en-us/refresh082123/media/titan_vid.png"
          autoplay="true"
          loop="true"
          playsinline="true"
          muted="true"
        ></video>
      </div>
    </div>
  );
}

export default App;
