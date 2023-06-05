<template>
  <div class="page-main">
    <div ref="topPresent" class="present-top-img-wrap">
      <img
        ref="topPresent"
        data-depth="0.1"
        class="present-top-img"
        src="@/images/present.png"
        alt="present"
      />
    </div>
    <div ref="bottomPresent" class="present-left-img-wrap">
      <img
        data-depth="0.1"
        class="present-bottom-img"
        src="@/images/present-revers.png"
        alt="present"
      />
    </div>
    <header-block />
    <title-block />
    <calendar-block :array-items="arrayIteration" @eventClick="eventClick" />
    <footer-block />
    <transition name="popup">
      <pop-up-block v-if="openPopup" :item-data="itemData" @clickCLose="clickCLose" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Parallax from 'parallax-js';

export default {
  name: 'page-main',
  data() {
    return {
      isDayBlocked: false,
      openPopup: false,
      itemData: {},
    };
  },
  computed: {
    ...mapState({
      arrayItems: (state) => state.bunker.arrayItems,
    }),
    arrayIteration() {
      // const data = new Date().getDate();
      return this.arrayItems.map((elem) => {
        if (elem.number === 27) {
          elem.active = true;
          this.isDayBlocked = true;
          return elem;
        }
        if (this.isDayBlocked) {
          elem.disabled = true;
          return elem;
        }
        return elem;
      });
    },
  },
  mounted() {
    const parallaxInstance = new Parallax(this.$refs.bottomPresent, {
      relativeInput: true,
      hoverOnly: true,
    });
    const parallaxInstance2 = new Parallax(this.$refs.topPresent, {
      relativeInput: true,
      hoverOnly: true,
    });
    parallaxInstance.friction(0.2, 0.2);
    parallaxInstance2.friction(0.2, 0.2);
  },
  methods: {
    eventClick(item) {
      this.openPopup = true;
      this.itemData = { ...item };
    },
    clickCLose() {
      this.openPopup = false;
    },
  },
};
</script>

<style src="./page-main.less" lang="less" />
