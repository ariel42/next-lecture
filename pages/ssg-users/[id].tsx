const SSGUser = ({ user }: { user: { id: number, name: string, phone: number } }) => {
  console.log(user)
  
  return (
    <div>
      <h3>{user.name}</h3>
      <div>ID: {user.id}</div>
      <div>Phone: {user.phone}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const users: { id: number }[] = await fetch(`http://localhost:3000/api/users`).then(res => res.json());
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const user = await fetch(`http://localhost:3000/api/users/${params.id}`).then(res => res.json());
  return { props: { user } }
}

export default SSGUser;
