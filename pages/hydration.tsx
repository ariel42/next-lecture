import { useEffect, useState } from "react";

const Hydration = ({ time }: { time: string }) => {
  const [clientTime, setClientTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setClientTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timerId);
    }
  }, []);

  return (
    <div>
      <div>
        Server side time is {time}
      </div>
      <div>
        Client side time is &nbsp;
        {/* {clientTime.getHours() + ":" + clientTime.getMinutes() + ":" + clientTime.getSeconds()} */}
        {clientTime.toISOString()}
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

export default Hydration;
