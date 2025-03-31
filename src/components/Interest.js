export default Interest = ({ data, setData, err }) => {
  const { interest } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => {
            return i !== e.target.name;
          }),
    }));
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={interest?.includes("coding")}
          name="coding"
          onChange={(e) => handleChange(e)}
        />
        <label name="coding">Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={interest?.includes("music")}
          name="music"
          onChange={(e) => handleChange(e)}
        />
        <label name="music">Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={interest?.includes("singing")}
          name="singing"
          onChange={(e) => handleChange(e)}
        />
        <label name="singing">Singing</label>
      </div>
      {err.interest && <div className="error">{err.interest}</div>}
    </div>
  );
};
