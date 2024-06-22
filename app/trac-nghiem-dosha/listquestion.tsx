"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import Modal from "./nofitication";
import Image from "next/image";

interface AnswerCount {
  [key: string]: number;
}

interface AnswerData {
  [key: string]: string;
}

export function RadioGroupForm({ questions, totalQuestion }: any) {
  const [stt, setSTT] = useState(0);
  const [appear, setAppear] = useState(false);
  const [open, setOpen] = useState(false);
  const objSchema: any = {};

  questions.map((items: any, index: number) => {
    let validate: any = z;
    const type: any = items.type;
    if (type === "radio") {
      validate = validate.string(
        { required_error: "Vui lòng chọn đáp án." },
        { error_message: "Vui lòng chọn đáp án." }
      );
    }
    objSchema["answer_" + (index + 1)] = validate;
  });
  const FormSchema = z.object(objSchema);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [count, setCount] = useState<AnswerCount>({ A: 0, B: 0, C: 0 });

  // Hàm đếm số lượng của mỗi lựa chọn
  const countAnswers = (data: AnswerData) => {
    const newCount: AnswerCount = { A: 0, B: 0, C: 0 };
    Object.values(data).forEach((answer) => {
      newCount[answer]++;
    });
    return newCount;
  };

  const onSubmit = async (index: number) => {
    const values = form.getValues();
    const answer = values["answer_" + (stt + 1)];
    if (!answer) {
      return setOpen(true);
    }
    setSTT(stt + 1);
    const newCount = countAnswers(values);
    setCount(newCount);
    if (stt + 1 > totalQuestion.props.children) {
      setAppear(true);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form className=" space-y-6">
          {questions.map((items: any, index: number) => {
            const list_question = items.listquestion;
            const nameQuestion = items.name_question;
            const id = items.id;

            if (stt !== index) return null;
            return (
              <FormField
                control={form.control}
                name={("answer_" + (index + 1)) as any}
                key={items + index}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Câu hỏi số{" "}
                      <span className="text-secondary">{stt + 1}</span>/
                      {totalQuestion}
                      <br />
                      <div className="bg-secondary text-white pb-4 pt-5 px-5 w-fit rounded-r-[32px] rounded-tl-[32px] my-5">
                        {nameQuestion}
                      </div>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {list_question.map((item: any, i: number) => {
                          return (
                            <FormItem
                              className="flex items-center space-x-3 space-y-0 rounded-r-[32px] pb-4 pt-5 px-5 w-fit rounded-tl-[32px] border-[1px] border-secondary/40 border-solid"
                              key={item.value + "item"}
                            >
                              <FormControl>
                                <RadioGroupItem value={item.value} />
                              </FormControl>
                              <FormLabel
                                htmlFor={item.value + i}
                                className="!mt-1 !leading-5"
                              >
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <div
            className={
              "" +
              (stt + 1 > totalQuestion.props.children &&
                "flex flex-col gap-8 items-center justify-center")
            }
          >
            {stt + 1 > totalQuestion.props.children && (
              <p className="text-primary text-3xl font-semibold">
                Chúc mừng bạn vừa hoàn thành xong bài test của Malayoga nha ^^.
              </p>
            )}
            <div className="flex gap-6">
              <Button
                type="button"
                onClick={() => setSTT(stt - 1)}
                className={
                  "bg-secondary text-white " +
                  (appear && "hidden") +
                  (stt === 0 && " hidden")
                }
              >
                Quay lại câu trước
              </Button>
              <Button
                type="button"
                onClick={onSubmit}
                className={"bg-secondary text-white " + (appear && "hidden")}
              >
                {stt + 1 > totalQuestion.props.children
                  ? "Xem kết quá"
                  : "Qua câu tiếp theo"}
              </Button>
            </div>
          </div>
          {appear && (
            <div className=" text-lg text-primary">
              <p className="text-2xl text-center pb-6">
                Câu trả lời của bạn gồm:{" "}
                <span className="font-bold text-secondary">{count.A}</span> A,{" "}
                <span className="font-bold text-secondary">{count.B}</span> B,{" "}
                <span className="font-bold text-secondary">{count.C}</span> C
              </p>
              <div className="w-full">
                <Result />
              </div>
            </div>
          )}
        </form>
      </Form>
      {open && (
        <Modal isOpen={open} className="h-screen w-screen ">
          <div className="relative flex flex-col items-center justify-center bg-white sm:p-10 p-5 rounded-[16px] mx-auto sm:w-[60%] w-[80%]">
            <CancelSquare
              className="absolute top-6 right-6 stroke-black cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            />
            <p className="py-6">Bạn vui lòng chọn đáp án nha ^^</p>
            <img
              src={
                "https://pos.nvncdn.com/822bfa-13829/art/artCT/20190927_cnPomDg518Ld78wOVoPvTKQ2.jpg"
              }
              alt=""
              className=" w-full h-full"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

const Result = () => {
  const result = [
    {
      title: "A. Kapha",
      des: "Người có tạng Kapha trội là những người có thân hình to khỏe và bản chất yêu thích vận động thường xuyên để kiểm soát cân nặng của mình vì Kapha dễ bị tăng cân. Tạng Kapha trội chịu ảnh hưởng nhiều từ yếu tố đất và nước, nên họ có tính cách ổn định, từ bi và trung thành. Họ chuộng làm những việc có tính khoa học, qui trình và duy trì công việc và cuộc sống cá nhân với những cách thức quen thuộc. Khi trượt ra khỏi điểm cân bằng, họ dễ nản chí, bướng bỉnh và dễ bằng lòng với cái cũ cho dù lúc đó họ cần thay đổi. Sự trao đổi chất trong cơ thể của người Kapha thường chậm. Họ cũng không thèm ăn như người Vata hoặc Pitta. Chính vì bản chất này, sẽ tốt hơn cho người Kapha nếu họ thay đổi môi trường sống, gặp gỡ nhiều bạn bè mới, và thỉnh thoảng nhịn ăn.",
    },
    {
      title: "B. Pitta",
      des: "Yếu tố lửa là yếu tố trội trong người trội Pitta, vì vậy họ có cá tính mạnh mẽ, sôi nỗi nhưng cũng dễ cáu kỉnh. Người trội Pitta dễ nhận diện với thân hình vừa phải, dễ có cơ bắp săn chắc. Người Pitta dễ bị bắt nắng, bị ửng đỏ khi tập thể dục, khi được mát xa. Đây là những người có nghị lực và họ có khả năng làm tốt những gì họ cho là đúng. Dù làm hay chơi, họ đều thể hiện sự sôi nổi và tính cạnh tranh như nhau. Họ là những cá nhân có tố chất lãnh đạo, học nhanh, dễ nắm bắt kiến thức và thành thạo kĩ năng mới. Chính vì vậy, người Pitta dễ phán xét người khác và mất kiên nhẫn với những ai bị cho là chậm chạp và kém tập trung. Người Pitta tiêu hóa tốt, là người có sở thích ăn uống và thích chấp nhận thử thách. Nếu họ phải bỏ bữa, họ dễ cục cằn và có thể “ăn thịt” người nào đó. Pitta hay gặp những vấn đề sức khỏe như viêm, phát ban, mụn nhọt, và đi phân lỏng. Để cân bằng dosha, người Pitta nên học cách kiểm soát tính nóng nảy, chuyển năng lượng đó vào những việc tích cực và hiệu quả hơn và cũng nên học cách nhận diện năng lượng tiêu cực, “hủy diệt” của mình để biết cách điều chỉnh kịp thời.",
    },
    {
      title: "C. Vata ",
      des: " Người trội Vata thường gầy và cao lêu nghêu. Họ là những người rất năng động về thể chất lẫn tinh thần. Họ thích những trải nghiệm sáng tạo, gặp gỡ bạn bè mới và đi đến những nơi chốn mới. Khi ở trạng thái cân bằng, người trội Vata rất uyển chuyển, có trí tưởng tượng sinh động, luôn nghĩ về những ý tưởng độc đáo. Nhưng khi mất cân bằng, người Vata rất dễ lo lắng, khó hoàn thành công việc. Cơ thể họ thường bị lạnh và khô, nên họ rất thích thời tiết ấm và ẩm. Người Vata thường bị chứng tay chân lạnh, táo bón, da khô, và khớp kêu răng rắc. Yếu tố khí trội ở người Vata, dẫn đến năng lượng, tâm trạng, cảm giác thèm ăn của người Vata thay đổi thất thường. Vì vậy người Vata thường ăn và ngủ không điều độ, hay lạm dụng thức ăn để kiểm soát bản thân cũng như uống những thức uống có chất kích thích như café, nước ngọt để duy trì hoạt động thể chất và tinh thần cao độ của mình. Người Vata trội lại còn nhạy cảm thường gặp chứng mất ngủ và kháng thể kém.",
    },
    {
      title: "Tạng trội hai dosha.",
      des: "Tạng trội hai dosha là tạng phổ biến nhất ở con người, là khi chúng ta rõ rệt có những phẩm chất của hai dosha. Những người tạng trội hai dosha được xem như là “phân thân”, theo nghĩa là tùy vào hoàn cảnh cụ thể mà một dosha nào đó sẽ chiếm ưu thế hẳn. Cách tốt nhất để kiểm soát tạng trội hai dosha này là nương theo mùa. Ví dụ, người tạng vata-pitta hoặc vata-kapha vào mùa thu (mùa của vata), bạn duy trì chế độ dinh dưỡng giảm vata. Ngược lai, vào mùa nóng, bạn duy trì chế độ dinh dưỡng giảm pitta và mùa lạnh ẩm ướt theo chế độ giảm kapha.",
    },
    {
      title: "Tạng trội ba dosha",
      des: "Đây là tạng người chịu sự ảnh hưởng ngang nhau từ 3 dosha. Người tạng này có thể là người rất mạnh mẽ, ổn định và lại có khả năng thích nghi tốt khi ở trạng thái cân bằng. Nhưng khi mất cân bằng, sức khỏe của họ trở nên tồi tệ. Người tạng trội ba dosha cần hết sức nhạy cảm quan sát nhận biết những dấu hiệu mất cân bằng từ môi trường sống, cách ăn uống, cảm xúc, và nhanh chóng thực hành những phương thức giúp kháng lại những hậu quả mất cân Ví dụ, vào mùa thu, người trội ba này sẽ hành xử như người chỉ trội Vata (mùa thu là mùa của Vata) cần sinh hoạt, ăn uống để cân bằng những ảnh hưởng của tạng trội vata . Tương tự bạn nên áp dụng chế độ dinh dưỡng cân bằng pitta vào mùa nóng và cân bằng kapha vào mùa lạnh.",
    },
  ];
  return (
    <>
      {result.map((item: any, index: number) => {
        return (
          <div className="pb-6" key={item.title}>
            <p className="font-bold text-xl">{item.title}</p>
            <p>{item.des}</p>
          </div>
        );
      })}
    </>
  );
};

export function CancelSquare(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M15 9l-6 6m6 0L9 9"
        strokeOpacity={0.3}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12z"
        strokeOpacity={0.3}
        strokeWidth={1.5}
      />
    </svg>
  );
}
