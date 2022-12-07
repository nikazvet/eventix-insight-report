<template>
  <svg
    width="217"
    height="319"
    viewBox="0 0 217 319"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="IPAD" sketch:type="MSLayerGroup" stroke="#fff">
      <path
        d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z"
        id="bezel"
        stroke-width="3"
        fill="transparent"
        sketch:type="MSShapeGroup"
      ></path>
      <path
        d="M202.986,317 L12.097,317 C5.462,317 0.083,311.623 0.083,304.99 L0.083,12.093 C0.083,5.46 5.461,0.083 12.097,0.083 L202.986,0.083 C209.622,0.083 215,5.46 215,12.093 L215,304.99 C215,311.623 209.622,317 202.986,317 Z"
        id="bezel-2"
        stroke-width="3"
        fill="transparent"
        sketch:type="MSShapeGroup"
      ></path>
      <rect
        id="screen"
        class="screen-container"
        fill="transparent"
        sketch:type="MSShapeGroup"
        x="17"
        y="32"
        width="181.999"
        height="252.917"
      ></rect>
      <transition
        appear
        @before-appear="beforeEnterTablet"
        @after-appear="enterTablet"
      >
        <rect
          id="screen"
          class="screen"
          fill="red"
          sketch:type="MSShapeGroup"
          x="17"
          y="32"
          width="181.999"
          height="252.917"
        ></rect>
      </transition>

      <circle
        id="lock"
        sketch:type="MSShapeGroup"
        cx="108.021"
        cy="300.021"
        r="8.021"
      ></circle>
      <circle
        id="camera"
        sketch:type="MSShapeGroup"
        cx="106.99"
        cy="16.99"
        r="2.99"
      ></circle>
    </g>
  </svg>
</template>

<script>
const handleEnter = (el, percentage) => {
  el.style.transform = `scaleY(${percentage}%)`;
  el.style.transition = `transform 1.3s cubic-bezier(0.85, 0, 0.15, 1) 0.3s`;
};
export default {
  name: "Devices",
  data() {
    return {
      desktop: 80,
      phone: 60,
      tablet: 30,
    };
  },
  methods: {
    beforeEnterTablet(el) {
      el.style.transform = "scaleY(0%)";
    },
    enterTablet(el) {
      handleEnter(el, this.tablet);
    },
  },
};
</script>

<style scoped lang="scss">
#IPAD {
  margin: auto;
  padding-right: 10%;
  .screen-container {
    & + .screen {
      position: relative;
      fill: var(--color-white);
      transform-box: fill-box;
      transform-origin: bottom;
      transform: scaleY(30%);
    }
  }
}
</style>
