const UserLocation = ({ location }) => {
  return (
    <div>
      <p>{`${location.street.name},${location.street.number}`}</p>
      <p>{`${location.state},${location.country}`}</p>
      <p>{`Post Code: ${location.postcode}`}</p>
    </div>
  );
};

export default UserLocation;
