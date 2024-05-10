import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekdays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const months = [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];

  const renderHeader = () => {
    return (
      <div className="flex text-white  font-cabin justify-between items-center mb-5">
        <button className='text-2xl' onClick={prevMonth}>&lt;</button>
        <h1 className="text-2xl">
          {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h1>
        <button className='text-2xl ' onClick={nextMonth}>&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="grid grid-cols-7 gap-2 text-gray-600">
        {weekdays.map((day, index) => (
          <div key={index} className="text-center font-bold">
            {day}
          </div>
        ))}
        {renderCells()}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    const endDate = new Date(monthEnd);

    const days = [];
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }
    while (startDate <= endDate) {
      days.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return days.map((day, index) => (
      <div
        key={index}
        className={`text-center cursor-pointer hover:rounded-full hover:bg-[#FBB6A6]  p-1 ${
          isSameDay(day, new Date()) ? 'rounded-full bg-gray-200 ' : ''
        } ${isSameDay(day, selectedDate) ? 'font-bold' : ''}`}
        onClick={() => handleDateClick(day)}
      >
        {day.getDate()}
      </div>
    ));
  };

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(new Date(date));

  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="container mx-auto sm:">
      {renderHeader()}
      {renderDays()}
    </div>
  );
};

export default Calendar;
















