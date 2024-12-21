import { useEffect, useState } from 'react';

const useCountdown = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const resetTimer = () => {
    setTimeLeft(initialTime);
  };

  return { timeLeft, resetTimer };
};

export default useCountdown;
