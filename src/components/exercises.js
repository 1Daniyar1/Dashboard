import React from 'react';
import { Progress } from 'antd';

const TaskRow = ({ title, boxes, percent, color }) => (
  <div className="flex flex-col items-start justify-between mb-4">
    {/* Task Title */}
    <div className="text-xl font-inter font-semibold mb-2">{title}</div>

    {/* Boxes with Text in Row Layout */}
    <div className="flex space-x-2 ">
      {boxes.map((boxText, index) => (
        <div key={index} className="p-2 h-6 border-2 border-gray-300 rounded-md flex justify-center items-center text-gray-500 font-inter text-xs font-medium">
          {boxText}
        </div>
      ))}
    </div>

    {/* Vertical Progress Bar Below the Boxes */}
    <div className="w-full">
      <Progress
        percent={percent}
        strokeColor={color}
        trailColor="#0000000F"
        strokeWidth={7}
      />
    </div>
  </div>
);

const DailyTasks = () => {
  return (
    <div className="mt-5 mx-auto bg-white shadow-md rounded-lg p-6 mb-10">
      <h2 className="text-2xl font-inter font-semibold mb-6">Задания на сегодня</h2>

      {/* Task Row 1 */}
      <TaskRow title="Махи ногами" boxes={['1 раз', 'по 8 минут', 'Врач Фамилия И. О.']} percent={100} color="#B7EB8F" />

      {/* Task Row 2 */}
      <TaskRow title="Сгибание колена лежа" boxes={['1 раз', 'по 8 минут', 'Врач Фамилия И. О.']} percent={50} color="#91CAFF" />

      {/* Task Row 3 */}
      <TaskRow title="Ножной насос" boxes={['1 раз', 'по 8 минут', 'Врач Фамилия И. О.']} percent={0} color="#E0E0E0" />

    </div>
  );
};

export default DailyTasks;
