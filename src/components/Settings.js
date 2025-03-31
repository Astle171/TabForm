export default Settings = ({ data, setData, err }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          checked={theme === "dark"}
          name="dark"
          onChange={(e) => handleChange(e)}
        />
        <label name="dark">Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={(e) => handleChange(e)}
        />
        <label name="light">Light</label>
      </div>
    </div>
  );
};
