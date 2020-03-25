<template>
  <div>
    <MainHeader />
    <Whoami />
    <About />
    <Career :careerList="careerList" />
    <SideProject :projectList="projectList" />
    <Activities :activityList="activityList" />
    <Contact/>
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
import Contact from '../components/Contact';

export default {
  name: 'main',
  components: {
    MainHeader,
    Whoami,
    About,
    Career,
    SideProject,
    Activities,
    Contact,
  },
  data() {
    return {
      careerList: [],
      projectList: [],
      activityList: [],
    };
  },
  mounted() {
    this.getData('career', this.careerList);
    this.getData('project', this.projectList);
    this.getData('activity', this.activityList);
  },
  methods: {
    async getData(collection, target) {
      const dataRef = await firebase.firestore().collection(collection);
      const data = await dataRef.where('isVisible', '==', true).orderBy('order', 'desc').get();
      data.forEach((doc) => {
        target.push(doc.data());
      });
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
