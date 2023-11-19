<nav class="navbar">
  <div class="navbar-brand">
    <router-link to="/">
      <img src="path-to-logo.png" alt="WanderVoice Logo" class="logo"/>
      WanderVoice
    </router-link>
  </div>
  <div class="navbar-menu">
    <router-link to="/premium" class="navbar-item">Premium</router-link>
    <router-link to="/support" class="navbar-item">Support</router-link>
    <router-link to="/signup" class="navbar-item">Sign up</router-link>
    <router-link to="/login" class="navbar-item">Log in</router-link>
  </div>
</nav>

<script>
export default {
  name: 'App-Navbar'
}
</script>

<style>
    .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000; /* Assuming a black background from the image */
    color: #fff; /* White text color */
    padding: 10px 20px; /* Adjust the padding as needed */
    }

    .navbar-brand {
    display: flex;
    align-items: center;
    }

    .logo {
    height: 30px; /* Adjust the size as needed */
    margin-right: 10px; /* Adds space between the logo and the brand name */
    }

    .navbar-menu {
    display: flex;
    }

    .navbar-item {
    color: #fff; /* White text color */
    text-decoration: none; /* Removes underline from links */
    margin-left: 20px; /* Space between menu items */
    }

    .navbar-item:hover {
    text-decoration: underline; /* Adds underline on hover for visual feedback */
    }
</style>