<template>
  <svg
    width="217"
    height="319"
    viewBox="0 0 217 319"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Laptop"
      sketch:type="MSLayerGroup"
      transform="translate(1.000000, 1.000000)"
      stroke="#fff"
    >
      <path
        d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z"
        id="bezel"
        stroke-width="3"
        fill="transparent"
        sketch:type="MSShapeGroup"
      ></path>
      <circle
        id="webcam"
        stroke-width="3"
        sketch:type="MSShapeGroup"
        cx="347"
        cy="19"
        r="4"
      ></circle>
      <g
        id="bottom"
        transform="translate(0.000000, 351.000000)"
        sketch:type="MSShapeGroup"
      >
        <path
          d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z"
          id="Shape"
          stroke-width="3"
          fill="transparent"
        ></path>
        <path
          d="M0.5,14.5 L690.242676,14.5"
          id="Line"
          stroke-linecap="square"
        ></path>
      </g>
      <rect
        id="screen"
        class="screen-container"
        fill="transparent"
        sketch:type="MSShapeGroup"
        x="95"
        y="39"
        width="501.073853"
        height="292.009"
      ></rect>

      <transition
        appear
        @before-appear="beforeEnterDesktop"
        @after-appear="enterDesktop"
      >
        <rect
          id="screen"
          class="screen"
          fill="transparent"
          sketch:type="MSShapeGroup"
          x="95"
          y="39"
          width="501.073853"
          height="292.009"
        ></rect>
      </transition>

      <path
        d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352"
        id="touchpad"
        fill="transparent"
        sketch:type="MSShapeGroup"
      ></path>
    </g>
  </svg>
</template>

<script>
const handleEnter = (el, percentage) => {
  el.style.transform = `scaleY(${percentage}%)`;
  el.style.transition = `transform 1.3s cubic-bezier(0.85, 0, 0.15, 1) 0.3s`;
};
export default {
  name: "Desktop",
  data() {
    return {
      desktop: 80,
      phone: 60,
      tablet: 30,
    };
  },
  methods: {
    beforeEnterDesktop(el) {
      el.style.transform = "scaleY(0%)";
    },
    enterDesktop(el) {
      handleEnter(el, this.desktop);
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
