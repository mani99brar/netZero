
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
  }, []);
  return (
    <div className="w-[100%] flex justify-center flex-col items-center bg-[#00A9FF] yellowGradient text-black about">
      <h1 className="bg-white text-center  lg:w-[80%] w-[90%] rounded-lg px-4 py-2 text-[#71C266] lg:mt-20 mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green">
        About Us
      </h1>
      <div className="w-[100%] sm:w-[80%] flex flex-wrap justify-center items-center lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[80%] lg:mb-0 mb-8 flex flex-col justify-around">
          <p className="text-xl lg:leading-10 lg:text-justify leading-6">
            Built environment is responsible for 40% of global carbon emissions
            and “Zero Carbon buildings’’ are imperative for addressing climate
            change and the window of opportunity is too narrow before global
            warming crosses 1.5 degrees. This pilot project is prototype of how
            Urban Infrastructure globally should be developed thereby delivering
            unrivaled value to communities, environment and stakeholders.
          </p>
          <a
            href="https://www.youtube.com/watch?v=5vXzzsawrfU"
            className="underline underline-offset-4 text-lg"
          >
            Meet the Architect
          </a>
        </div>
        <div className="lg:w-[50%] mb-10 w-[80%] h-[100%] flex  justify-center">
          <div className="lg:w-[80%] w-[100%]">
            <a
              href="/certificate.pdf"
              target="_blank"
              className="flex items-center w-[100%]"
            >
              <span className="bg-white text-centerrounded-lg px-4 py-2 text-[#71C266] rounded-md lg:text-5xl mb-10 text-3xl shadow-2xl shadow-green">
                Certification{" "}
              </span>
              <FontAwesomeIcon
                icon={faExternalLink}
                className="fas fa-link text-4xl ml-4 mb-8"
              ></FontAwesomeIcon>
            </a>
            <ul className="list-disc text-justify">
              <li className="mb-2">
                World Bank Certified with 88% energy efficiency and 40% water
                efficiency
              </li>
              <li className="mb-2 text-justify">
                Ministry of Housing/ GIZ certified with RETV of 7 W/m² approx.
              </li>
            </ul>
            <p>
              This building is ideally a rental assets for serviced apartments,
              corporate, Oyo rooms, AirBnb, premium student housing etc and will
              suit investors who are looking for rental income property with
              appreciation and corporates that are looking for Zero Carbon
              assets for their ESG compliance and reporting.
            </p>
          </div>
        </div>
        {mounted && <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C8wFyaHSq4d/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "99.375%",
            width: "calc(100% - 2px)",
          }}
        >
          <div style={{ padding: "16px" }}>
            <a
              href="https://www.instagram.com/reel/C8wFyaHSq4d/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                background: "#FFFFFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
              target="_blank"
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}></div>
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                  <div style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}></div>
                  <div style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    width: "60px",
                  }}></div>
                </div>
              </div>
              <div style={{ padding: "19% 0" }}></div>{" "}
              <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-511.000000, -20.000000)"
                      fill="#000000"
                    >
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div style={{
                paddingTop: "8px",
                paddingBottom: "12px",
                paddingRight: "12px",
                paddingLeft: "12px",
              }}>
                {" "}
                <div style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: "17px",
                  margin: 0,
                  textAlign: "center",
                  wordBreak: "break-word",
                  color: "#000000"
                }}>
                  View this post on Instagram
                </div>
              </div>
              {/* <div style="padding: 12.5% 0;"></div>{" "}
              <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                <div>
                  {" "}
                  <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>{" "}
                  <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>{" "}
                  <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                </div>
                <div style="margin-left: 8px;">
                  {" "}
                  <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>{" "}
                  <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                </div>
                <div style="margin-left: auto;">
                  {" "}
                  <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>{" "}
                  <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>{" "}
                  <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                </div>
              </div>{" "} */}
              {/* <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                {" "}
                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>{" "}
                <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
              </div> */}
            </a>
            <p style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              margin: 0,
              textAlign: "center",
              wordBreak: "break-word",
              color: "#000000"
            }}>
              <a
                href="https://www.instagram.com/reel/C8wFyaHSq4d/?utm_source=ig_embed&amp;utm_campaign=loading"
                // style={{ color:"#c9c8cd", font-family:"Arial","sans-serif", font-size:"14px", font-style:"normal", font-weight:"normal", line-height:"17px", text-decoration:"none"}}"
                target="_blank"
              >
                A post shared by Ashok B Lall Architects (@ablarch)
              </a>
            </p>
          </div>
        </blockquote>}
      </div>
      <div className="w-[80%] flex lg:items-center items-start flex-col mt-8">
        <h1 className="bg-white text-center w-full sm:w-auto rounded-lg px-4 py-2 text-[#ffc933] lg:text-5xl mb-10 text-3xl shadow-2xl shadow-green">
          Features
        </h1>
        <ul className="flex lg:justify-around lg:items-start items-center flex-wrap text-xl list-disc w-[100%] gap-8 featureUl">
          <li className=" text-center lg:w-[40%] w-[90%]">Solar Rooftop</li>
          <li className=" text-center lg:w-[40%] w-[90%]">
            EV Charging Station
          </li>
          <li className=" text-center lg:w-[40%] w-[90%]">Heat pump</li>
          <li className=" text-center lg:w-[40%] w-[90%]">
            Thermally Comfortable building envelope (RETV= 7 W/m² approx.)
          </li>
          <li className=" text-center lg:w-[40%] w-[90%]">Open Courtyard</li>
          <li className=" text-center lg:w-[40%] w-[90%]">Water Harvesting</li>
          <li className=" text-center lg:w-[40%] w-[90%]">Wide terrace</li>
          <li className=" text-center lg:w-[40%] w-[90%]">Sun Shades </li>
          <li className=" text-center lg:w-[40%] w-[90%]">Low SHGC glass </li>
          <li className=" text-center lg:w-[40%] w-[90%]">Reflective paint </li>
        </ul>
      </div>
    </div>
  );
};
