const SSR = ({ time }: { time: string }) => {
  return (
    <div>
      Server side time is {time}
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

export default SSR;
