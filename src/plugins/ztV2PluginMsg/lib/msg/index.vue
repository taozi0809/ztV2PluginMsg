<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
export default {
  name: "zt-vue2-msg-demo",
  data() {
    return {
      msg: "123",
    };
  },
};
</script>
<style>
.msg {
  width: fit-content;
  background: rgba(0, 0, 0, 0.3);
  font-size: 16px;
}
</style>