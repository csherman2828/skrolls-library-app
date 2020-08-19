<template>
  <v-app>
    <SkrollsAppBar/>
    <SkrollsNavDrawer/>
    <SkrollsAppMain/>
  </v-app>
</template>

<script>
import SkrollsAppBar from './components/SkrollsAppBar.vue';
import SkrollsNavDrawer from './components/SkrollsNavDrawer.vue';
import SkrollsAppMain from './components/SkrollsAppMain.vue';

export default {
  name: 'App',
  components: {
    SkrollsAppBar,
    SkrollsNavDrawer,
    SkrollsAppMain,
  },
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMoute() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  mixins: [],
};
</script>

<style>
  * {
    /* get rid of the constant scrollbar on the right side of the screen */
    overflow: auto !important;
  }
</style>
