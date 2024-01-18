import User from "./User";

function UserList({ users }) {
  return (
    <div>
      {users.map((user, i) => {
        return <User key={i} user={user} />;
      })}
    </div>
  );
}

export default UserList;
