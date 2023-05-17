<template>
  <div class="slider">
    <div class="container">
      <swiper
        slides-per-view="auto"
        :space-between="0"
        :update-on-window-resize="false"
        :grab-cursor="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
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
        :grab-cursor="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
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
    arrayBefore() {
      const arrayLength = this.arrayItems.length / 2;
      return this.arrayItems.filter((elem, index) => index < arrayLength);
    },
    arrayAfter() {
      const arrayLength = this.arrayItems.length / 2;
      return this.arrayItems.filter((elem, index) => index >= arrayLength);
    },
  },
  mounted() {
    console.log('arrayItems', this.arrayItems);
  },
  methods: {
    eventClick(item) {
      console.log('click-2', item.number);
      this.$emit('eventClick', item);
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('arrayBefore', this.arrayBefore);
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
