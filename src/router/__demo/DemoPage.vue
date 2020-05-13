<template>
  <div style="margin-bottom: 200px">
    <GlobalHelloWorld msg="Welcome to Your Vue.js App" />
    <!-- TODO: Just for test -->
    <hr />
    <div>
      <h1>FullCalendar</h1>
      <div id="calendar"></div>
    </div>

    <div>
      <h1>Tree Select</h1>
      <div>
      </div>
      <div>
        <pre>{{ categorySelect }}</pre>
        <pre>{{ categoryTreeOptions }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable

// import the component
import Api from '../../api';

export default {
  data() {
    return {
      test: 'ok',
      categorySelect: null,
      categoryTreeOptions: [],
      normalizer(node) {
        return {
          id: node.id,
          label: node.title,
          children: node.children,
        };
      },
    };
  },
  mounted() {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
      header: { center: 'dayGridMonth, timeGridWeek, timeGridDay' },
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      selectable: true,
    });

    calendar.render();

    Api.get('https://kd-mock-data.glitch.me/mock/category').then((res) => {
      console.log(`mounted -> res`, res);
      this.categoryTreeOptions = res.data;
    });
  },
  beforeDestroy() {},
};
</script>

<style lang='scss'>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
@import '~@fullcalendar/list/main.css';
</style>
