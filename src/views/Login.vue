<template>
  <div class="login">
    <v-icon color="white" size="100" class="mb-3">
      mdi-account-circle
    </v-icon>

    <p class="caption white--text">
      Click on the icon and select a picture to your avatar
    </p>

    <v-text-field
      class="ma-6  pa-1 input"
      color="white"
      outlined
      label="Your name"
      hide-details
      dense
    >
    </v-text-field>
    <v-btn color="white" class="teal--text" large>
      Create Todo List
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #007991; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #007991,
    #78ffd6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #007991,
    #78ffd6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.login .input {
  max-height: 40px;
}

.login .theme--light.v-label {
  color: white;
}

.login .v-text-field--outlined fieldset {
  border-color: white !important;
}

.login p {
  margin-bottom: 0px;
  text-align: center;
  max-width: 200px;
}

.v-btn.v-size--default {
  font-size: 0.775rem;
}
</style>
