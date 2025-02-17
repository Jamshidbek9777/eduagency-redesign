import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ElementarySchool = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/elementary-school.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          {getText("header1")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-14 space-y-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            {/* MentalUp */}
            <div className="">
              <h1 className="text-2xl font-bold mb-4">Mental Up</h1>
              <div className="mt-10">
                <img
                  src="/img/mentalup.webp"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("eduTech15")}</p>
                <p className="mt-4 text-base">{getText("eduTech16")}</p>
                <div className="mt-4">
                  <p className="text-lg mb-4">{getText("eduTech17")}</p>

                  <div className="flex flex-wrap justify-start gap-4">
                    {/* Video 1 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <iframe
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/HJ5ltJBB7lU"
                        title="K12NET Video 1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/mup1.png"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 3 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/mup2.png"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uppy */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">UppyEdu</h1>
              <div className="mt-1">
                <img
                  src="/img/uppy.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg bg-blue-900 p-3"
                />
                <p className="mt-4 text-base">
                  Not an ordinary App, it’s Uppy. Your child’s first and 100%
                  safe digital experience.
                </p>
                <p className="mt-4 text-base">
                  Thousands of content scientifically created especially for
                  children by experts as a result of 3 years of study are in a
                  single application. Google Play App Store App Gallery Uppy Web
                </p>
                <div className="mt-4">
                  {/* <p className="text-lg mb-4">{getText("eduTech17")}</p> */}

                  <div className="flex flex-wrap justify-start gap-4">
                    {/* Video 1 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy1.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 2 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy2.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 3 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy3.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future ast */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">Future astronaut</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/futureast.png"
                  alt="K12NET"
                  className="h-32 rounded-lg"
                />
                <div>
                  <p className="mt-4 text-base">{getText("eduTech19")}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("eduTech20")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/5a6VH1m6BoA"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>

                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/9.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    {" "}
                    <img
                      src="/img/12.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Edudesign */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">
                {getText("eduDesign1")}
              </h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-2">{getText("eduDesign2")}:</p>
              </div>
              <p className="text-base">{getText("eduDesign3")}</p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className=" ">{getText("eduDesign7")}:</p>
              </div>
              <p className=" text-base">{getText("eduDesign8")}</p>
              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/classConcepts1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/classConcepts2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/lab1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher trainings */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">
                  {getText("navbar9")}
                </h1>
                <a href="/teacherTrainings" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">{getText("tTrain1")}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining1.jpeg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining3.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ta'lim modellari */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">
                  {getText("navbar5")}
                </h1>
                <a href="/education-models" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">{getText("eduModeTitle")}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/bilsemModel.jpeg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                    <h1 className="text-2xl mt-2 text-center font-bold">
                      BILSEM
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ElementarySchool;
