<template>
  <div>
    <MainHeader />
    <Whoami />
    <About />
    <Career :careerList="careerList" />
    <SideProject :projectList="projectList" />
    <Activities :activityList="activityList" />
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import MainHeader from '../components/MainHeader';
import Whoami from '../components/Whoami';
import About from '../components/About';
import Career from '../components/Career';
import SideProject from '../components/SideProject';
import Activities from '../components/Activities';

export default {
  name: 'home',
  components: {
    MainHeader,
    Whoami,
    About,
    Career,
    SideProject,
    Activities,
  },
  data() {
    return {
      careerList: [],
      projectList: [],
      activityList: [],
    };
  },
  mounted() {
    this.getData('career', 'careerList');
    this.getData('project', 'projectList');
    this.getData('activity', 'activityList');
  },
  methods: {
    async getData(collection, target) {
      const dataRef = await firebase.firestore().collection(collection);
      const data = await dataRef.where('isVisible', '==', true).orderBy('order', 'desc').get();
      const arr = [];
      data.forEach((doc) => {
        arr.push(doc.data());
      });
      this[target] = arr;
    },
    check(target) {
      this.activeProject = target;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
