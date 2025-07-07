import React, { useState, useEffect, useRef } from "react";

const ImplantsCounter: React.FC = () => {
  const [topDigits, setTopDigits] = useState<number>(0);
  const [randomDigits, setRandomDigits] = useState<string>("0000");
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer: trigger when 50% visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5, // 50% visibility
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  // Counter Logic
  useEffect(() => {
    if (!hasStarted) return;

    const randomInterval = setInterval(() => {
      if (topDigits < 15) {
        const random = Array.from({ length: 4 }, () =>
          Math.floor(Math.random() * 10)
        ).join("");
        setRandomDigits(random);
      } else {
        setRandomDigits("0000");
        clearInterval(randomInterval);
      }
    }, 50);

    const topInterval = setInterval(() => {
      setTopDigits((prev) => {
        if (prev < 15) return prev + 1;
        clearInterval(topInterval);
        return prev;
      });
    }, 200);

    return () => {
      clearInterval(randomInterval);
      clearInterval(topInterval);
    };
  }, [hasStarted, topDigits]);

  const fullCounter = String(topDigits).padStart(2, "0") + randomDigits;
  const counterDigits: string[] = fullCounter.split("");

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center  py-10 lg:pt-10 lg:pb-0"
    >
      <div className="flex items-center justify-center flex-wrap text-center">
        <p
          className=" text-2xl lg:text-3xl whitespace-nowrap tracking-tight font-bold md:font-normal mr-4 "
          style={{ color: "#4A4A4A" }}
        >
          Dr. Shet has completed
        </p>

        <div className="flex justify-center items-center ">
          {counterDigits.map((digit: string, index: number) => (
            <div
              key={index}
              className="w-16 h-20  m-0.5 bg-[#ff7f50] relative rounded-md shadow-sm
                         flex justify-center items-center text-5xl text-white font-bold
                         overflow-hidden"
            >
              {digit}
              {index === 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-5 bg-white"
                  style={{ borderRadius: "0 30px 30px 0" }}
                ></div>
              )}
              {index === counterDigits.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-5 bg-white"
                  style={{ borderRadius: "30px 0 0 30px" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        <p
          className="text-gray-700 text-2xl lg:text-3xl font-bold md:font-normal ml-4 whitespace-nowrap tracking-tight"
          style={{ color: "#4A4A4A" }}
        >
          Successful Implants
        </p>
      </div>
    </div>
  );
};

export default ImplantsCounter;
