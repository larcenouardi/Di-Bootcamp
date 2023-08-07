const largeNumber = 356;

module.exports = largeNumber;



// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
  }
  
  // Export the getCurrentDateTime function
  module.exports = getCurrentDateTime;