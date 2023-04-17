import Vue from 'vue';

/*
Названя блоков, состоящих из одного слова должны иметь постфикс Block при регистрации.
Css блоков в итоговой сборке будет иметь такой порядок, в котором блоки импортируются,
соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки
имели возможность переопределить стили корневого элемента ребёнка без использования !important
*/

import ExampleBlock from './example/example.vue';
import HeaderBlock from './header/header.vue';
import TitleBlock from './title/title.vue';
import FooterBlock from './footer/footer.vue';
import CalendarBlock from './calendar/calendar.vue';
import oneDay from './oneDay/oneDay.vue';
import popUp from './popUp/popUp.vue';

Vue.component('example-block', ExampleBlock);
Vue.component('header-block', HeaderBlock);
Vue.component('title-block', TitleBlock);
Vue.component('footer-block', FooterBlock);
Vue.component('calendar-block', CalendarBlock);
Vue.component('day-block', oneDay);
Vue.component('pop-up-block', popUp);
