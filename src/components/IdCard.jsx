const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard">
      <img src={props.picture} alt="profilePicture" />

      <div id="text">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth: </strong> {birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
