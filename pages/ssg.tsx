const SSG = ({ buildTime }: { buildTime: string }) => {
  return (
    <div>
      Server side build time is {buildTime}
    </div>
  )
}

export async function getStaticProps() {
  const timeResponse = await fetch('http://localhost:3000/api/time').then(res => res.json());
  return {
    props: {
      buildTime: timeResponse.time
    },
    // revalidate: 10
  }
}

export default SSG;
