const SSRUser = ({ user }: { user: { id: number, name: string, phone: number } }) => {
  console.log(user)

  return (
    <div>
      <h3>{user.name}</h3>
      <div>ID: {user.id}</div>
      <div>Phone: {user.phone}</div>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { id: number } }) {
  const user = await fetch(`http://localhost:3000/api/users/${params.id}`).then(res => res.json());
  return { props: { user } }
}

export default SSRUser;
