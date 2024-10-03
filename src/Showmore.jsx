import React, { useContext } from "react";
import { ModalContext } from "./Context/ModalProvider";
import CommentComponent from "./CommentComponent";

const Showmore = () => {
    const { setisShow, setContent } = useContext(ModalContext)
  return (
    <>
      <div className="w-full sm:w-1/3 relative flex justify-center items-center bg-slate-300/50 m-auto px-2 mt-[-100px]">
        <div>
          <p
            className="text-[30px] flex justify-center "
            style={{ fontFamily: "Merienda" }}
          >
            Và Tôi Cũng Trở Thành Bác Sĩ...
          </p>
          <div className="border border-gray-300 rounded-lg"  style={{ fontFamily: "Merienda" }}>
            <p className="px-2" style={{ textIndent: "20px" }}>
              -Hôm nay, tôi không chỉ tốt nghiệp mà còn nhận thức được trách
              nhiệm lớn lao mà nghề nghiệp này mang lại. Tôi muốn gửi lời cảm ơn
              đến gia đình, những người luôn bên cạnh tôi, ủng hộ và động viên
              tôi trong suốt hành trình này. Sự yêu thương và hy sinh của họ là
              động lực lớn nhất giúp tôi vững bước trên con đường trở thành bác
              sĩ.
              <br />
            </p>
            <p className="px-2" style={{ textIndent: "20px" }}>
              -Tôi hứa sẽ nỗ lực hết mình để mang lại nụ cười và sức khỏe cho
              mọi bệnh nhân, và không ngừng học hỏi để trở thành một bác sĩ giỏi
              trong tương lai. Xin cảm ơn tất cả mọi người đã đồng hành cùng tôi
              trong hành trình này !
            </p>
          </div>

          <div className="flex justify-center mt-5">
            <button
              className="bg-cyan-400/50 w-[220px] h-[35px] rounded-full hover:animate-bounce"
              style={{ fontFamily: "Coiny" }} onClick={()=>{setisShow(true); setContent(<CommentComponent/>)}}
            >
              Gửi Lời Chúc Tới Thanh
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showmore;
