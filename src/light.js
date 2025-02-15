const Light = ({ color, isActive = false }) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: isActive ? color : null }}
    ></div>
  );
};

export default Light;
