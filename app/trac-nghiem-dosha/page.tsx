import CountObjectArray from "./countObjectArray";
import { RadioGroupForm } from "./listquestion";

const Page = () => {
  const questions = [
    {
      type: "radio",
      id: "1",
      name_question: "CẤU TRÚC CƠ THỂ",
      listquestion: [
        { value: "A", label: "A. Mảnh mai" },
        { value: "B", label: "B. Vừa phải" },
        { value: "C", label: "C. Mạnh mẽ" },
      ],
    },
    {
      type: "radio",
      id: "2",
      name_question: "KÍCH THƯỚC",
      listquestion: [
        { value: "A", label: "A. Rất cao hoặc rất thấp" },
        { value: "B", label: "B. Trung bình" },
        { value: "C", label: "C. Đa số là nhỏ, nhưng có thể cao và to" },
      ],
    },
    {
      type: "radio",
      id: "3",
      name_question: "CÂN NẶNG",
      listquestion: [
        { value: "A", label: "A. Khó tăng cân" },
        {
          value: "B",
          label: "B. Trung bình, có thể tăng hoặc giảm cân dễ dàng",
        },
        { value: "C", label: "C. Nhìn chung là thừa cân, khó giảm" },
      ],
    },
    {
      type: "radio",
      id: "4",
      name_question: "LÀN DA",
      listquestion: [
        { value: "A", label: "A. Khô, thô, lạnh" },
        { value: "B", label: "B. Nóng, tàn nhang, mụn" },
        { value: "C", label: "C. Dày, lạnh, nhờn" },
      ],
    },
    {
      type: "radio",
      id: "5",
      name_question: "THÂN NHIỆT",
      listquestion: [
        { value: "A", label: "A. Bàn tay và bàn chân lạnh " },
        { value: "B", label: "B. Ấm" },
        { value: "C", label: "C. Lạnh hoặc bình thường " },
      ],
    },
    {
      type: "radio",
      id: "6",
      name_question: "TÓC",
      listquestion: [
        { value: "A", label: "A. Khô, tốt, xoăn " },
        { value: "B", label: "B. Nhờn, hói sớm, tóc bạc " },
        { value: "C", label: "C. Mạnh mẽ, lượn sóng, sáng bóng" },
      ],
    },
    {
      type: "radio",
      id: "7",
      name_question: "TRÁN",
      listquestion: [
        { value: "A", label: "A. Hẹp" },
        { value: "B", label: "B. Trung bình, luống cày " },
        { value: "C", label: "C. Rộng" },
      ],
    },
    {
      type: "radio",
      id: "8",
      name_question: "ĐÔI MẮT",
      listquestion: [
        { value: "A", label: "A. Nhỏ, căng thẳng " },
        { value: "B", label: "B. Dễ bị kích ứng " },
        { value: "C", label: "C. Lớn với lông mi lớn " },
      ],
    },
    {
      type: "radio",
      id: "9",
      name_question: "HÀM RĂNG",
      listquestion: [
        { value: "A", label: "A. Nhỏ bất thường, hình dáng xấu" },
        { value: "B", label: "B. Cỡ vừa, nướu dễ chảy máu " },
        { value: "C", label: "C. Lớn, đều " },
      ],
    },
    {
      type: "radio",
      id: "10",
      name_question: "LƯỠI",
      listquestion: [
        { value: "A", label: "A. Thô" },
        { value: "B", label: "B. Mềm hồng" },
        { value: "C", label: "C. Dày" },
      ],
    },
    {
      type: "radio",
      id: "11",
      name_question: "KHUÔN MẶT",
      listquestion: [
        { value: "A", label: "A. Nhỏ, nhăn, khô " },
        { value: "B", label: "B. Thanh tú, hơi đỏ, sắc nét " },
        { value: "C", label: "C. Lớn, mềm " },
      ],
    },
    {
      type: "radio",
      id: "12",
      name_question: "XƯƠNG",
      listquestion: [
        { value: "A", label: "A. Các khớp mỏng, dễ nứt" },
        { value: "B", label: "B. Khớp vừa, lỏng " },
        { value: "C", label: "C. Dày, khớp khỏe " },
      ],
    },
    {
      type: "radio",
      id: "13",
      name_question: "MÓNG TAY",
      listquestion: [
        { value: "A", label: "A. Giòn, thô " },
        { value: "B", label: "B. Mềm, hồng " },
        { value: "C", label: "C. Rộng, mạnh " },
      ],
    },
    {
      type: "radio",
      id: "14",
      name_question: "KHẨU VỊ",
      listquestion: [
        { value: "A", label: "A. Hay thay đổi, lo lắng " },
        { value: "B", label: "B. Cao, cáu kỉnh nếu đói " },
        { value: "C", label: "C. Trung bình nhưng ổn định" },
      ],
    },
    {
      type: "radio",
      id: "15",
      name_question: "KHÁT NƯỚC",
      listquestion: [
        { value: "A", label: "A. Rất ít uống" },
        { value: "B", label: "B. Thường khát nước " },
        { value: "C", label: "C. Vừa phải  " },
        ,
        ,
      ],
    },
    {
      type: "radio",
      id: "16",
      name_question: "ĐẠI TIỆN",
      listquestion: [
        { value: "A", label: "A. Phân khô, cứng " },
        { value: "B", label: "B. Phân mềm, lỏng, có xu hướng tiêu chảy  " },
        { value: "C", label: "C. Phân đều, bình thường " },
      ],
    },
    {
      type: "radio",
      id: "17",
      name_question: "NƯỚC TIỂU",
      listquestion: [
        { value: "A", label: "A. Rất ít đi" },
        { value: "B", label: "B. Đi nhiều, màu vàng đậm" },
        { value: "C", label: "C. Trung bình, nước tiểu trong" },
      ],
    },
    {
      type: "radio",
      id: "18",
      name_question: "ĐỔ MỒ HÔI",
      listquestion: [
        { value: "A", label: "A. Ít đổ mồ hôi, không có mùi" },
        { value: "B", label: "B. Mùi mồ hôi nặng, nồng " },
        { value: "C", label: "C. Vừa phải " },
      ],
    },
    {
      type: "radio",
      id: "19",
      name_question: "NGỦ",
      listquestion: [
        { value: "A", label: "A. Nông, hay thức giấc" },
        { value: "B", label: "B. Có thể thay đổi " },
        { value: "C", label: "C. Sâu, quá mức" },
      ],
    },
    {
      type: "radio",
      id: "20",
      name_question: "TÌNH DỤC",
      listquestion: [
        {
          value: "A",
          label: "A. Thích tình dục đa dạng, tưởng tượng tình dục tích cực  ",
        },
        { value: "B", label: "B. Quan tâm và thôi thúc tình dục cao " },
        { value: "C", label: "C. Quan tâm và thôi thúc tình dục ổn định" },
      ],
    },
    {
      type: "radio",
      id: "21",
      name_question: "TRÍ NHỚ",
      listquestion: [
        { value: "A", label: "A. Nhanh, dễ quên  " },
        { value: "B", label: "B. Sâu sắc, rõ ràng " },
        { value: "C", label: "C. Chậm nhưng ổn định " },
      ],
    },
    {
      type: "radio",
      id: "22",
      name_question: "NẮM BẮT KIẾN THỨC",
      listquestion: [
        { value: "A", label: "A. Tự nhiên " },
        { value: "B", label: "B. Trung bình " },
        { value: "C", label: "C. Cần thời gian để hiểu " },
      ],
    },
    {
      type: "radio",
      id: "23",
      name_question: "TÂM TRẠNG",
      listquestion: [
        { value: "A", label: "A. Tâm trạng và ý tưởng dễ thay đổi  " },
        { value: "B", label: "B. Rất mạnh khi bày tỏ ý tưởng và cảm xúc " },
        {
          value: "C",
          label: "C. Ổn định, đáng tin cậy, chậm thay đổi ý tưởng ",
        },
      ],
    },
    {
      type: "radio",
      id: "24",
      name_question: "THÍCH KHÍ HẬU",
      listquestion: [
        { value: "A", label: "A. Khí hậu nóng, nắng, ẩm " },
        { value: "B", label: "B. Khí hậu mát mẻ, thông thoáng" },
        { value: "C", label: "C. Bất kỳ thời tiết nào miễn là nó không ẩm " },
      ],
    },
    {
      type: "radio",
      id: "25",
      name_question: "HOẠT ĐỘNG",
      listquestion: [
        { value: "A", label: "A. Liên tục " },
        { value: "B", label: "B. Trung bình " },
        { value: "C", label: "C. Di chuyển chậm " },
      ],
    },
    {
      type: "radio",
      id: "26",
      name_question: "CẢM XÚC TÍCH CỰC",
      listquestion: [
        { value: "A", label: "A. Khả năng thích ứng " },
        { value: "B", label: "B. Can đảm " },
        { value: "C", label: "C. Thân thiện " },
      ],
    },
    {
      type: "radio",
      id: "27",
      name_question: "CẢM XÚC TIÊU CỰC",
      listquestion: [
        { value: "A", label: "A. Sợ hãi" },
        { value: "B", label: "B. Tức giận" },
        { value: "C", label: "C. Dựa dẫm" },
      ],
    },
    {
      type: "radio",
      id: "28",
      name_question: "PHẢN ỨNG KHI STRESS",
      listquestion: [
        { value: "A", label: "A. Sợ hãi và lo lắng khi căng thẳng " },
        {
          value: "B",
          label: "B. Thất vọng, cáu gắt, tức giận vì căng thẳng  ",
        },
        { value: "C", label: "C. Quản lý căng thẳng tốt " },
        ,
      ],
    },
    {
      type: "radio",
      id: "29",
      name_question: "KHÁNG BỆNH",
      listquestion: [
        { value: "A", label: "A. Hệ miễn dịch kém, hay thay đổi" },
        { value: "B", label: "B. Trung bình, có xu hướng nhiễm trùng " },
        { value: "C", label: "C. Hệ miễn dịch tốt, ổn định, mạnh mẽ" },
      ],
    },
    {
      type: "radio",
      id: "30",
      name_question: "BỆNH THƯỜNG GẶP",
      listquestion: [
        {
          value: "A",
          label:
            "A. Rối loạn lo âu và rối loạn tâm thần, đau thần kinh và khớp ",
        },
        { value: "B", label: "B. Bệnh truyền nhiễm và viêm, rối loạn máu  " },
        {
          value: "C",
          label: "C. Bệnh hệ thống và hô hấp, phù, chất nhầy, viêm khớp ",
        },
      ],
    },
  ];

  const totalQuestion = <CountObjectArray items={questions} />;

  return (
    <div className="lg:w-[70%] sm:w-[85%] px-5 mx-auto py-28">
      <RadioGroupForm questions={questions} totalQuestion={totalQuestion} />
    </div>
  );
};

export default Page;
