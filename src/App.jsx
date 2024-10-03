import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountdownTimer from "./CountdownTimer";
import Carousel from "./Carousel";
import {  useState } from "react";
import Showmore from "./Showmore";

function App() {
  const targetDate = "2024-10-09T00:00:00";
  const [show, setshow] = useState(false)
 
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full sm:w-1/3 relative flex justify-center items-center bg-slate-300/50 h-[90vh]">
          {/* <img
          src="https://i.pinimg.com/236x/28/81/30/288130b7ff966fe292eb8c6340f09b05.jpg"
          className="w-full h-[100vh]  aspect-[9/16] brightness-50"
        /> */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center ">
            <FontAwesomeIcon className="w-20 h-20" icon={faGraduationCap} />

            <p
              className="font-bold mt-[-11px] text-[18px]"
              style={{
                fontFamily: "Ballet",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Graduation
            </p>
          </div>
          <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p
              className="font-bold text-[60px] animate-pulse "
              style={{
                fontFamily: "Merienda",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5) ",
              }}
            >
              Graduation{" "}
            </p>
          </div>
          <div className="absolute top-[26%] left-1/3 transform -translate-x-1/2 flex flex-col items-center">
            <p
              className="font-bold text-[40px] text-yellow-400/50"
              style={{ fontFamily: "Ballet" }}
            >
              Ceremory
            </p>
          </div>
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <CountdownTimer targetDate={targetDate} />
          </div>

          <div className="absolute bottom-[10%] flex  w-full h-[40%] ">
            <div className="w-[55%] sm:w-[45%] h-full p-2 text-[15px]">
              <p
                className="font-bold text-center text-[15px] text-yellow-400 mb-3"
                style={{ fontFamily: "Coiny" }}
              >
                Hãy Cùng Đếm Ngược Ngày Mình Tốt Nghiệp Nhé!!!{" "}
              </p>

              <div className="bg-yellow-200/50 h-16 sm:h-10 hover:bg-yellow-200 rounded-2xl flex justify-center items-center text-[12px] border border-yellow-400 animate-bounce">
                <div
                  className="text-center  "
                  style={{ fontFamily: "Merienda" }}
                >
                  <p className="font-bold">10:30-12:30 Ngày 9/10/2024</p>
                  <p className="font-bold ">Đại Học Y Dược TP.HCM</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold" style={{ fontFamily: "Coiny" }}>
                  Liên hệ với mình:
                </p>
                <div className="flex justify-center gap-4 mt-1">
                  <a href="https://www.facebook.com/profile.php?id=100027324814902">
                    <img
                      src="./facebook.png"
                      className="w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"
                    />
                  </a>
                  <a href="tel:07071401706">
                    <img
                      src="./smartphone.png"
                      className="w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"
                    />
                  </a>
                  <a href="https://maps.app.goo.gl/EE5gxC3eybLZzu1D8">
                    <img
                      src="./map.png"
                      className="w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"
                    />
                  </a>
                </div>
                <p
                  className="font-bold mt-2 sm:mt-10"
                  style={{ fontFamily: "Coiny" }}
                >
                  Rất mong nhận được sự chung vui của mọi người
                </p>
              </div>
            </div>
            <div className=" w-[45%] sm:w-[55%] h-full relative">
              <div className="w-[80%] absolute right-2 sm:right-10  border-[5px] border-green-400/50 shadow-lg rounded-lg ">
                <Carousel />
              </div>
            </div>
          </div>
          <div className={`absolute bottom-[2.5%] ${show== false ? "block" :"hidden"}`}>
            <button
              className="bg-cyan-400/50 w-[120px] h-[35px] rounded-full hover:animate-bounce"
              style={{ fontFamily: "Coiny" }} onClick={()=>setshow(true)}
            >
              Show More
            </button>
           
          </div>
        </div>
      </div>
       {show && <Showmore/>}
       
    </>
  );
}

export default App;
