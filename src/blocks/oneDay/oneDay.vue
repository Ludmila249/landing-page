<template>
  <div v-if="item.active">
    <button type="button" class="slider-active" @click="clickHandler">
      <div class="slider-active__wrapper">
        <p class="slider-active__data">{{ item.number }}</p>
        <p class="slider-active__text">{{ item.month }}</p>
      </div>
      <div>
        <div class="slider-active__arrow" href="#">
          <img class="slider-active__arrow-img" src="@/images/arrow.png" />
        </div>
      </div>
    </button>
  </div>
  <div v-else-if="item.disabled">
    <button type="button" class="slider-desabled">
      <img class="slider-desabled__item-icon" src="@/images/Huge-icon.png" />
      <p class="slider-desabled__item-text">{{ item.number }} {{ item.month }}</p>
    </button>
  </div>
  <div v-else>
    <button type="button" class="slider-item" @click="clickHandler">
      <div class="slider-item__wrapper">
        <p class="slider-item__number">{{ item.number }}</p>
        <p class="slider-item__text">{{ item.month }}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'day-block',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickHandler() {
      this.$emit('clickHandler', this.item);
    },
  },
};
</script>

<style src="../oneDay/oneDay.less" lang="less" />
