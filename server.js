// Handle Google Sign-In response
function handleCredentialResponse(response) {
    console.log("Google ID Token: " + response.credential);
    
    // Check if response.credential is available
    if (!response.credential) {
      console.error("No credential received");
      return;
    }
  
    fetch("http://127.0.0.1:3000/google-auth", { // Update the URL to your backend
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: response.credential })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(data => {
      if (data.success) {
        window.location.href = "/dashboard"; // Redirect to your dashboard or another page
      } else {
        alert("Google login failed!");
      }
    })
    .catch(err => {
      console.error('Error during fetch:', err); // Log any fetch errors
    });
  }
  