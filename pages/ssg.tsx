const SSG = ({ time }: { time: string }) => {
  return (
    <div>
      The time is {time}
    </div>
  )
}

export async function getStaticProps() {
  const timeResponse = await fetch('http://localhost:3000/api/time').then(res => res.json());
  return {
    props: {
      time: timeResponse.time
    },
    // revalidate: 10
  }
}

export default SSG;
