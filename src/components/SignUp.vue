<template>
  <div class="signup-container">
    <div class="signup-header">
      <h1>WanderVoice</h1>
      <p>Your innovative in-car voice assistant.</p>
      <p>Experience the future of voice assistants in your car!</p>
    </div>
    <div class="signup-form">
      <h2>Sign up to</h2>
      <h3>WanderVoice</h3>
      <form @submit.prevent="createAccount">
        <div class="form-row">
          <input type="text" placeholder="Name" required>
          <input type="text" placeholder="Username" required>
        </div>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required minlength="6">
        <div class="checkbox-container">
          <input type="checkbox" id="terms" required>
          <label for="terms">Creating an account means you’re okay with our <a href="terms-of-service-url">Terms of Service</a>, <a href="privacy-policy-url">Privacy Policy</a>, and our default <a href="notification-settings-url">Notification Settings</a>.</label>
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div class="signup-footer">
        <p>Already a member? <router-link to="/">Log In</router-link></p>
        <p>This site is protected by reCAPTCHA and the Google <a href="privacy-policy-url">Privacy Policy</a> and <a href="terms-of-service-url">Terms of Service</a> apply.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  methods: {
    createAccount() {
      // Here you would implement the logic to handle account creation
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ece4f9; /* Light purple background similar to the screenshot */
}

.signup-header {
  text-align: left;
  color: #4a4a4a; /* Dark gray for text */
}

.signup-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Adjust as needed */
}

.signup-form h2, .signup-form h3 {
  color: #333; /* Darker gray for headings */
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-row input[type="text"] {
  width: 48%; /* Adjust the width so two inputs fit in one row */
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-container {
  margin: 10px 0;
}

.checkbox-container label {
  font-size: 0.8rem;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #e91e63; /* Pink for the button */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d81b60; /* Darker pink on hover */
}

.signup-footer {
  margin-top: 20px;
  font-size: 0.8rem;
}

a {
  color: #e91e63;
}

a:hover {
  text-decoration: underline;
}
</style>
