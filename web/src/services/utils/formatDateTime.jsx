export const formatDateTime = (timestamp) => {
  // Convert the timestamp string to a Date object
  const date = new Date(timestamp);

  // Format the date and time components
  const formattedDate = date.toLocaleDateString(); // Format: MM/DD/YYYY
  const formattedTime = date.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

  // Concatenate date and time
  const formattedDateTime = (
    <>
      {" "}
      <p>{formattedDate}</p> <p>{formattedTime}</p>{" "}
    </>
  );

  return formattedDateTime;
};
