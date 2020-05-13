<template>
  <div style="margin-bottom: 200px">
    <GlobalHelloWorld msg="Welcome to Your Vue.js App" />
    <!-- TODO: Just for test -->
    <hr />
    <div>
      <h1>FullCalendar</h1>
      <div id="calendar"></div>
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
