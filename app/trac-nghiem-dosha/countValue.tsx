'use client';
import React, { useState } from 'react';

interface AnswerData {
  [key: string]: string;
}

interface AnswerCount {
  [key: string]: number;
}

const AnswerCounter: React.FC<{ data: AnswerData }> = ({ data }) => {    
  const [count, setCount] = useState<AnswerCount>({ A: 0, B: 0, C: 0 });

  // Hàm đếm số lượng của mỗi lựa chọn
  const countAnswers = (data: AnswerData) => {
    const newCount: AnswerCount = { A: 0, B: 0, C: 0 };
    Object.values(data).forEach(answer => {
      newCount[answer]++;
    });
    return newCount;
  };

  // Xử lý sự kiện khi nhấn nút đếm
  const handleCountClick = () => {
    const newCount = countAnswers(data);
    setCount(newCount);
  };

  return (
    <div>
      <button onClick={handleCountClick}>Đếm</button>
      <ul>
        <li>Câu trả lời A: {count.A}</li>
        <li>Câu trả lời B: {count.B}</li>
        <li>Câu trả lời C: {count.C}</li>
      </ul>
    </div>
  );
};

export default AnswerCounter;