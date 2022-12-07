<script>
import { getLocationName } from "@/components/Map/utilities";
import Netherlands from "@/components/Map/Netherlands";
import Map from "@/components/Map/Map.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Box from "@/components/Box.vue";
export default {
  name: "SectionOne",
  components: {
    DefaultLayout,
    Box,
    Map,
  },
  data() {
    return {
      Netherlands,
      pointedLocation: "Netherlands",
      tooltipStyle: null,
    };
  },
  methods: {
    pointLocation(event) {
      this.pointedLocation = getLocationName(event.target);
    },
    unpointLocation(event) {
      // this.pointedLocation = null;
      // this.tooltipStyle = { display: "none" };
      this.pointedLocation = "Netherlands";
      this.tooltipStyle = { opacity: 0 };
    },
    moveOnLocation(event) {
      this.tooltipStyle = {
        display: "block",
        top: `${event.clientY + 10}px`,
        left: `${event.clientX - 100}px`,
      };
    },
    getLocationClass(location, index) {
      // Generate heat map
      return `svg-map__location svg-map__location--heat${index % 4}`;
    },
  },
};
</script>

<template>
  <DefaultLayout>
    <transition name="fade" appear>
      <div class="map__container">
        <div class="examples__block__map examples__block__map--netherlands">
          <Map
            :map="Netherlands"
            :location-class="getLocationClass"
            @mouseover="pointLocation"
            @mouseout="unpointLocation"
            @mousemove="moveOnLocation"
          />
          <div class="examples__block__map__tooltip" :style="tooltipStyle">
            {{ pointedLocation }}
          </div>
        </div>
      </div>
    </transition>
  </DefaultLayout>
</template>

<!-- <style src="vue-svg-map/dist/index.css"></style> -->

<style lang="scss">
$color: #a1d99b;

.map__container {
  position: relative;
  margin: 0 auto;
  padding-right: 8%;
}

/* Using box model */
* {
  box-sizing: border-box;
}

/* Maps examples */
.examples {
  width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: center;

  &__title {
    margin-bottom: 80px;
    padding-bottom: 40px;
    border-bottom: 1px dotted black;
    font-size: 24px;
  }

  &__block {
    margin-bottom: 80px;
    padding-bottom: 80px;
    border-bottom: 1px dotted black;

    &__map {
      display: inline-block;
      width: 500px;

      &--netherlands {
        position: relative;
        width: 800px; // USA needs more space	for tooltip

        .svg-map__location {
          &--heat0 {
            fill: $color;
          }

          &--heat1 {
            fill: darken($color, 10%);
          }

          &--heat2 {
            fill: darken($color, 20%);
          }

          &--heat3 {
            fill: darken($color, 30%);
          }

          /* &:focus,
          &:hover {
            opacity: 0.75;
          } */
        }
      }

      &__tooltip {
        position: fixed;
        width: 200px;
        padding: 10px 20px;
        /* border: 1px solid darkgray; */
        background-color: white;
        /* border: 1px solid var(--color-primary--dark-100); */
        box-shadow: 0 25px 30px -10px var(--color-black--dark-100);
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
}

.examples__block__map__tooltip {
  border-radius: var(--border-radius);
  /* background-color: red; */
}

.svg-map {
  width: 100%;
  height: auto;
  stroke: lighten($color, 10%);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.svg-map__location {
  fill: #a1d99b;
  cursor: pointer;
}
.svg-map__location:focus,
.svg-map__location:hover {
  /* fill: darken($color, 30%); */
  outline: 0;
}
.svg-map__location[aria-checked="true"] {
  fill: #f4bc44;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(80%);
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
