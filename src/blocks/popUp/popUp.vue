<template>
  <div class="popup" @click.self="clickCLose">
    <div class="popup__container">
      <section class="popup__film">
        <p class="popup__data">{{ itemData.number }} {{ itemData.month }}</p>
        <div class="popup__film-wrap">
          <div class="popup__wrap-img">
            <img class="popup__img" :src="itemData.src" alt="Предложение" />
          </div>
          <div class="popup__block-left">
            <h2 class="popup__title-film">{{ itemData.title }}</h2>
            <p class="popup__text">{{ itemData.text }}</p>
            <a class="popup__film-button" :href="itemData.link" target="_blank" type="button">
              Посмотреть фильм
            </a>
          </div>
        </div>
        <button class="popup__button-close" type="button" @click="clickCLose" />
      </section>

      <section class="popup__card">
        <div class="popup__card-wrap">
          <div class="popup__card-block-left">
            <h2 class="popup__card-title">Дебетовая карта ВТБ</h2>
            <p class="popup__card-text">
              Оформите прямо сейчас бесплатную карту с кешбэком 2% в топ-категориях
            </p>
            <div class="popup__wpap-link">
              <a
                class="popup__issue-card"
                href="https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_issue_card_cpc_rf_p1_feb_apr"
                tardet="_blank"
              >
                Оформить карту
              </a>
              <a
                class="popup__link-more"
                href="https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_more_cpc_rf_p1_feb_apr"
                target="_blank"
              >
                Подробнее
              </a>
            </div>
          </div>
          <div class="popup__container-img">
            <img class="popup__card-img" src="@/images//card.png" alt="" />
          </div>
        </div>
        <div class="popup__list-card">
          <div class="popup__item-card">
            <p class="popup__conditions">0 ₽</p>
            <p class="popup__conditions-text">Обслуживание без скрытых условий</p>
          </div>
          <div class="popup__item-card">
            <p class="popup__conditions">2%</p>
            <p class="popup__conditions-text">Кешбэк в популярных категориях</p>
          </div>
          <div class="popup__item-card">
            <p class="popup__conditions">до 30%</p>
            <p class="popup__conditions-text">Дополнительный кешбэк у партнёров</p>
          </div>
          <div class="popup__item-card">
            <p class="popup__conditions">3 дня</p>
            <p class="popup__conditions-text">Срок зачисления кешбэка</p>
          </div>
        </div>
      </section>
      <section class="popup__possibility">
        <h2 class="popup__possibility-title">С картой ВТБ вам доступно</h2>
        <div class="popup__possibility-wrap">
          <div class="popup__possibility-list">
            <p>
              Бесплатные платежи и переводы по номеру телефона в другие банки (до 100 000 ₽/мес.)
            </p>
          </div>
          <div class="popup__possibility-list">
            <p>0 ₽ комиссия за оплату ЖКУ</p>
          </div>
          <div class="popup__row-wrap">
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>Накопительный счёт с % за ежедневный остаток</p>
            </div>
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>Удобная оплата с помощью сервисов Samsung Pay или Mir Pay (для Android)</p>
            </div>
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>16 000 банкоматов, в которых можно снимать наличные без комиссии</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pop-up-block',
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log('itemData', this.itemData);
  },
  methods: {
    clickCLose() {
      this.$emit('clickCLose', this.item);
    },
  },
};
</script>

<style src="./popUp.less" lang="less" />
