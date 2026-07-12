const Notification = ({ message, type }) => {
  const messageStyle = {
    color: "#333",
    background: "lightgrey",
    fontSize: 20,
    border: "3px solid",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  };

  if (type === "success") messageStyle.color = "green";
  else if (type === "error") messageStyle.color = "red";

  if (message === null) return null;
  return <div style={messageStyle}>{message}</div>;
};

export default Notification;
