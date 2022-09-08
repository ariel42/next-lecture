import { useEffect, useState } from "react";

const HydrationFix = ({ time }: { time: string }) => {
  const [clientTime, setClientTime] = useState<Date | null>(null);

  useEffect(() => {
    setClientTime(new Date());

    const timerId = setInterval(() => {
      setClientTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timerId);
    }
  }, []);

  const displayClientTime = clientTime ?
    clientTime.toISOString() :
    time;

  return (
    <div>
      <div>
        Server side time is {time}
      </div>
      <div>
        Client side time is {displayClientTime}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const timeResponse = await fetch('http://localhost:3000/api/time').then(res => res.json());
  return {
    props: {
      time: timeResponse.time
    }
  }
}

export default HydrationFix;
