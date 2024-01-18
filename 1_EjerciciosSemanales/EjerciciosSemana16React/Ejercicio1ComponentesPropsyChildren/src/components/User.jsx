import UserLocation from "./UserLocation";
import UserName from "./UserName";
import UserPicture from "./UserPicture";

const User = ({ user }) => {
  return (
    <div>
      <UserPicture picture={user.picture} />
      <UserName name={user.name} />
      <UserLocation location={user.location} />
    </div>
  );
};

export default User;
