<template>
  <div class="text-h7">
    {{ date }}
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      date: '',
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), 'MMMM d, H:mm:ss');
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
