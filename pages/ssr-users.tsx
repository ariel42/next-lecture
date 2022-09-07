const SSRUsers = ({ users }: { users: { id: number, name: string }[] }) => {
  console.log(users)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {(users || []).map(user =>
            <tr key={user.id}>
              <td><a href={`/ssr-users/${user.id}`} style={{ color: "blue" }}>{user.id}</a></td>
              <td>{user.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export async function getServerSideProps() {
  const users = await fetch('http://localhost:3000/api/users').then(res => res.json());
  return {
    props: {
      users
    }
  }
}

export default SSRUsers;
