<template>
    <div>
        <Navbar />
        
        <div class="click-button">
            <button class="mic">
                <img src="../assets/mic.png" />
            </button>
        </div>

        <div class="inner">
            <div class="chat">
              <div class="messages">
                <div class="messages-content"></div>
              </div>
              <div class="message-box">
                <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
              </div>
            </div>
          </div>
    </div>
    
</template>


<script>
import Navbar from './navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>

<style>

.click-button {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 50px;
  height: 100vh; /* Adjust the height as needed */
}

.mic {
  width: 140px; /* Adjust width as needed */
  height: 140px; /* Ensure it's the same as width for a square shape */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
}

.mic img {
  max-width: 100%; /* Adjust image size */
  max-height: 100%; /* Adjust image size */
  border-radius: 15px; /* Adjust border-radius for rounded corners */

}
</style>