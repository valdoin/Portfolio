<template>
  <div class="skills">
    <div class="folders">
      <FolderComponent title="programming languages" :items="programmingLanguages" class="fade-in" />
      <FolderComponent title="web & frameworks" :items="webTechnologies" class="fade-in" />
      <FolderComponent title="database" :items="databases" class="fade-in" />
      <FolderComponent title="mobile development" :items="mobileDevelopment" class="fade-in" />
      <FolderComponent title="others" :items="others" class="fade-in" />
    </div>
  </div>
</template>

<script>
import FolderComponent from '../components/FolderComponent.vue';
import cIcon from '../assets/c_icon.png';
import pythonIcon from '../assets/python_icon.svg';
import javaIcon from '../assets/java_icon.svg';
import htmlIcon from '../assets/html_icon.svg';
import cssIcon from '../assets/css_icon.svg';
import javascriptIcon from '../assets/javascript_icon.png';
import mysqlIcon from '../assets/mysql_icon.svg';
import mongodbIcon from '../assets/mongodb_icon.svg';
import gitIcon from '../assets/git_icon.svg';
import dockerIcon from '../assets/docker_icon.svg';
import linuxIcon from '../assets/linux_icon.svg';
import phpIcon from '../assets/php_icon.svg';
import angularIcon from '../assets/angular_icon.svg';
import vuejsIcon from '../assets/vuejs_icon.svg';
import nodejsIcon from '../assets/nodejs_icon.svg';
import mssqlIcon from '../assets/mssql_icon.svg';
import oracleIcon from '../assets/oracle_icon.png';
import neo4jIcon from '../assets/neo4j_icon.png';
import androidStudioIcon from '../assets/androidstudio_icon.svg';
import flutterIcon from '../assets/flutter_icon.png';
import ansibleIcon from '../assets/ansible_icon.svg';

export default {
  name: 'SkillsSection',
  components: {
    FolderComponent
  },
  data() {
    return {
      programmingLanguages: [
        { name: 'C', icon: cIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
      ],
      webTechnologies: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'PHP', icon: phpIcon },
        { name: 'Angular', icon: angularIcon },
        { name: 'Vue.js', icon: vuejsIcon },
        { name: 'Node.js', icon: nodejsIcon },
      ],
      databases: [
        { name: 'MySQL', icon: mysqlIcon },
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'MS SQL', icon: mssqlIcon },
        { name: 'Oracle DB', icon: oracleIcon },
        { name: 'Neo4j', icon: neo4jIcon },
      ],
      mobileDevelopment: [
        { name: 'Android Studio', icon: androidStudioIcon },
        { name: 'Flutter', icon: flutterIcon },
      ],
      others: [
        { name: 'Git', icon: gitIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'Linux', icon: linuxIcon },
        { name: 'Ansible', icon: ansibleIcon },
      ]
    };
  }
};
</script>

<style scoped>
.skills {
  text-align: center;
}

.folders {
  display: flex;
  justify-content: space-evenly;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1.5s ease forwards;
}
</style>
