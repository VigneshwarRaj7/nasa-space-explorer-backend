const app = require('./app');
const PORT = process.env.PORT || 5050;

// Start the server
// This will listen on the specified port and log a message to the console.

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});