<template>
  <div class="login-container">
    <div class="login-header">
      <h1>WanderVoice</h1>
      <p>Your innovative in-car voice assistant.</p>
      <p>Experience the future of voice assistants in your car!</p>
    </div>
    <div class="login-form">
      <h2>Welcome back</h2>
      <h3>WanderVoice</h3>
      <form @submit.prevent="goToAnotherPage">
        <input type="text" placeholder="User Name" required>
        <input type="password" placeholder="Password" required minlength="6">
        <button type="submit">Log in</button>
      </form>
      <div class="login-footer">
        <p>Not a member? <router-link to="/signup">Sign Up</router-link></p>
        <p>This site is protected by reCAPTCHA and the Google <a href="privacy-policy-url">Privacy Policy</a> and <a href="terms-of-service-url">Terms of Service</a> apply.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    goToAnotherPage() {
      this.$router.push('/function');
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f9; /* Lighter shade for overall background */
}

.login-header {
  text-align: left;
  color: #4a4a4a; /* Dark gray for text */
}

.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.login-form h2, .login-form h3 {
  color: #333; /* Darker gray for headings */
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.login-footer {
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
