import React, { useState, useEffect } from 'react'
import flower from '../images/flower.png'


function CalendarDay({ day, isWeddingDay, isHoliday }) {
  const dayOfWeekClass = day % 7 === 1 ? 'red' : day % 7 === 0 ? 'blue' : '';
  const holidayClass = isHoliday ? 'red' : '';
  const specialDayClass = isWeddingDay ? 'heart red' : '';

  return (
    <div className={`calendar__day ${dayOfWeekClass} ${specialDayClass} ${holidayClass}`}>
      {day}
    </div>
  );
}

function Calendar() {

    const daysInMonth = 30; // 2024년 9월은 30일까지
    const firstDayOfWeek = 0; // 2024년 9월 1일은 일요일 (0부터 일요일, 1부터 월요일, ..., 6부터 토요일)
    const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    // 남은 시간 상태를 저장하는 객체 초기화
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });


    useEffect(() => {
      const updateTimer = () => {
        const currentDate = new Date();
        const targetDate = new Date('2025-09-06T13:00:00+0900');
        const timeDiff = targetDate - currentDate;
  
        if (timeDiff > 0) {
          // 남은 시간 계산
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          // 이벤트가 지났다면, 모든 값이 0이 되도록 설정
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };
  
      // 1초마다 updateTimer를 호출하여 남은 시간을 업데이트
      const timer = setInterval(updateTimer, 1000);
  
      // 컴포넌트가 언마운트되면 타이머를 정리
      return () => clearInterval(timer);
    }, []);

  return (
    <div className='container calendar'>
      <img src={flower} className="flower" alt='flower'/>
      <h3>Vào hồi 13h00 chiều, thứ Bảy, ngày 6 tháng 9 năm 2025 </h3>
      <div className='calendar__line'></div>
      <div className="calendar__body">
        <div className="calendar__weekdays">
          {['2', '3', '4', '5', '6', '7', 'CN'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="calendar__days">
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`}></div>
          ))}
          {days.map((day) => (
            <CalendarDay key={day} day={day} isWeddingDay={day === 7} isHoliday={day === 16 || day === 17 || day === 18}/>
          ))}
        </div>
      </div>
      <div className='calendar__remain'>
        <span>{timeLeft.days}ngày</span>
        <span>{timeLeft.hours}giờ</span>
        <span>{timeLeft.minutes}phút</span>
        <span>{timeLeft.seconds}giây</span>
      </div>
      <div>Chú rể ♥ Cô dâu <span className='calendar__remain-day'>{timeLeft.days} ngày</span> đếm ngược</div>
    </div>
  )
}

export default Calendar
