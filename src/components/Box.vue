<script>
export default {
  name: "SectionOne",
};
</script>

<template>
  <transition name="fade" appear>
    <div class="box"><slot></slot></div>
  </transition>
</template>

<style scoped>
.box {
  width: 36rem;
  height: 24rem;
  margin: auto;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  border: 1px solid var(--color-primary--dark-100);
  box-shadow: 0 25px 30px -10px var(--color-primary--dark-100);
  /* opacity: 0; */
  /* animation: fade 0.6s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards; */
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0%);
  }

  to {
    opacity: 1;
    transform: scale(100%);
  }
}

.fade-enter-active {
  animation: fade 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}
.fade-leave-active {
  animation: fade 0.6s cubic-bezier(0.65, 0, 0.35, 1) reverse;
}
</style>
