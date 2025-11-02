// send error response
const handleError = (req, res, error) => {
  console.error("Error:", error.message || error);
  res.status(500).json({ error: error.message || "An unknown error occurred" });
};

const getErrorMessage = (err) => {
  if (err && err.message) return err.message;
  return "An unexpected error occurred";
};

export default {
  handleError,
  getErrorMessage,
};
