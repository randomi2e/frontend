<template>
    <div>
        <Navbar />
        <AudioRecorder/>

        <div class="container">
          <div class="message-box">
            <input type="text" class="custom-input" placeholder="Search" />
          </div>
          <div class="click-button">
              <button class="mic" @click="startRecording" type="button">
                  <img src="../assets/mic.png" />
              </button>
              <button @click="stopRecording">Stop Recording</button>

          </div>
        </div>


        <!-- <div class="inner">
            <div class="chat">
              <div class="messages">
                <div class="messages-content"></div>
              </div>
              <div class="message-box">
                <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
              </div>
            </div>
          </div> -->
    </div>
    
</template>


<script>
import Navbar from './navbar.vue';
import AudioRecorder from "./AudioRecorder.vue";

// const audioRecorder = new MicRecorder({ bitRate: 128 });

export default {
    data() {
      return {
      };
    },
    components: {
        Navbar,
        AudioRecorder
    },
    methods: {
    }
}


</script>

<style>
.container {
  margin-left: 300px;
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}
.custom-input {
  border: 2px solid #ccc; /* 灰色边框 */
  border-radius: 10px; /* 圆角边框 */
  padding: 10px; /* 内边距 */
  width: 500px; /* 输入框宽度 */
  margin-top: 50px;
  height: 105px; /* Adjust the height as needed */

}

.click-button {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 50px;
  height: 140px; /* Adjust the height as needed */
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