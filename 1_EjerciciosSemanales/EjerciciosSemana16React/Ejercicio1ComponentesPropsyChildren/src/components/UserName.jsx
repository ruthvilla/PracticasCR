const UserName = ({ name }) => {
  return <h2>{`User Name: ${name.title}.${name.first} ${name.last}`} </h2>;
};

export default UserName;
