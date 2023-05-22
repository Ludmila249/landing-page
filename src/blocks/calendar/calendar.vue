<template>
  <div class="slider">
    <div class="container">
      <swiper
        slides-per-view="auto"
        :space-between="0"
        :initial-slide="searchForActiveElementArrayBefore"
        :update-on-window-resize="true"
        :grab-cursor="true"
      >
        <swiper-slide
          v-for="item in arrayBefore"
          :key="item.number"
          class="test"
          :class="{ test_2: true }"
        >
          <day-block :item="item" @clickHandler="eventClick" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="contaner-2">
      <swiper
        slides-per-view="auto"
        :space-between="0"
        :initial-slide="searchForActiveElementArrayAfter"
        :update-on-window-resize="true"
        :grab-cursor="true"
      >
        <swiper-slide
          v-for="item in arrayAfter"
          :key="item.number"
          width="250"
          class="test"
          :class="{ test_2: true }"
        >
          <day-block :item="item" @clickHandler="eventClick" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="contaner-mobail">
      <div
        v-for="item in arrayItems"
        :key="item.number"
        width="250"
        class="test"
        :class="{ test_2: true }"
      >
        <day-block :item="item" @clickHandler="eventClick" />
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper';

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';

// Import Swiper styles
import 'swiper/swiper.less';

SwiperCore.use([Navigation, Pagination]);

export default {
  name: 'calendar-block',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    arrayItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    searchForActiveElementArrayBefore() {
      return this.arrayBefore.findIndex((elem) => elem.active === true);
    },
    searchForActiveElementArrayAfter() {
      return this.arrayAfter.findIndex((elem) => elem.active === true);
    },
    arrayBefore() {
      const arrayLength = this.arrayItems.length / 2;
      return this.arrayItems.filter((elem, index) => index < arrayLength);
    },
    arrayAfter() {
      const arrayLength = this.arrayItems.length / 2;
      return this.arrayItems.filter((elem, index) => index >= arrayLength);
    },
  },
  methods: {
    eventClick(item) {
      this.$emit('eventClick', item);
    },
  },
};
</script>

<style lang="less">
.img-fluid {
  max-width: 100%;
  height: auto;
}

.w-100 {
  width: 100%;
}

.ml-auto,
.mx-auto {
  margin-left: auto;
}

.mr-auto,
.mx-auto {
  margin-right: auto;
}

.test.swiper-slide.test_2 {
  width: auto !important;
}

.test {
  width: auto !important;
}
</style>

<style src="./calendar.less" lang="less" />
