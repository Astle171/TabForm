export default Profile = ({ data, setData, err }) => {
  const { name, age, email } = data;
  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile">
      <div>
        <label name="name">Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => handleChange(e, "name")}
        />
        {err.name && <div className="error">{err.name}</div>}
      </div>
      <div>
        <label name="age">Age</label>
        <input
          type="number"
          value={age}
          name="age"
          onChange={(e) => handleChange(e, "age")}
        />
        {err.age && <div className="error">{err.age}</div>}
      </div>
      <div>
        <label name="email">Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => handleChange(e, "email")}
        />
        {err.email && <div className="error">{err.email}</div>}
      </div>
    </div>
  );
};
