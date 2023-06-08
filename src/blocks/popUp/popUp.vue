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
            <h2 class="popup__title-film" v-html="itemData.title" />
            <p class="popup__text" v-html="itemData.text" />
            <div class="popup__wrap-button">
              <p class="popup__film-button" :href="itemData.link" target="_blank" type="button" />
              <p class="popup__button-text">Посмотреть фильм</p>
            </div>
          </div>
        </div>
        <button class="popup__button-close" type="button" @click="clickCLose" />
      </section>

      <section class="popup__card">
        <div class="popup__card-wrap">
          <div class="popup__card-block-left">
            <h2 class="popup__card-title">Дебетовая карта ВТБ</h2>
            <p class="popup__card-text">
              Оформите прямо сейчас бесплатную карту с&nbsp;кешбэком&nbsp;2% в&nbsp;топ-категориях
            </p>
            <div class="popup__wpap-link">
              <div class="popup__issue-wrap">
                <a
                  class="popup__issue-card"
                  href="https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_issue_card_cpc_rf_p1_feb_apr"
                  tardet="_blank"
                />
                <p class="popup__issue-text">Оформить карту</p>
              </div>
              <div class="popup__more-wrap">
                <a
                  class="popup__link-more"
                  href="https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_more_cpc_rf_p1_feb_apr"
                  target="_blank"
                />
                <p class="popup__more-text">Подробнее</p>
              </div>
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
            <p class="popup__conditions-text">Кешбэк в&nbsp;популярных категориях</p>
          </div>
          <div class="popup__item-card">
            <p class="popup__conditions">до 30%</p>
            <p class="popup__conditions-text">Дополнительный кешбэк у&nbsp;партнёров</p>
          </div>
          <div class="popup__item-card">
            <p class="popup__conditions">3 дня</p>
            <p class="popup__conditions-text">Срок зачисления кешбэка</p>
          </div>
        </div>
      </section>
      <section class="popup__possibility">
        <h2 class="popup__possibility-title">С&nbsp;картой ВТБ вам доступно</h2>
        <div class="popup__possibility-wrap">
          <div class="popup__possibility-list">
            <p>
              Бесплатные платежи и&nbsp;переводы по&nbsp;номеру телефона в&nbsp;другие банки
              (до&nbsp;100&nbsp;000&nbsp;₽/мес.)
            </p>
          </div>
          <div class="popup__possibility-list">
            <p>0&nbsp;₽ комиссия за&nbsp;оплату ЖКУ</p>
          </div>
          <div class="popup__row-wrap">
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>Накопительный счёт с&nbsp;% за ежедневный остаток</p>
            </div>
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>
                Удобная оплата с&nbsp;помощью сервисов Samsung&nbsp;Pay или Mir&nbsp;Pay (для
                Android)
              </p>
            </div>
            <div class="popup__possibility-list popup__possibility-list--row">
              <p>16&nbsp;000&nbsp;банкоматов, в&nbsp;которых можно снимать наличные без комиссии</p>
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
  methods: {
    clickCLose() {
      this.$emit('clickCLose', this.item);
    },
  },
};
</script>

<style src="./popUp.less" lang="less" />
