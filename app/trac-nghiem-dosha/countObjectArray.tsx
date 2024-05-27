import React from 'react';

const CountObjectArray = ({ items }: any) => {
  // Đếm số lượng phần tử trong mỗi đối tượng
  const count = items.length;

  return (
      <span>{count}</span>
  );
};

export default CountObjectArray;