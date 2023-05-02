<template>
    <div>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />


    </div>
</template>
<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'
export default
    {
        components: {
            ProjectCard
        },
        data() {
            return {
                projects: []
            }
        },
        methods: {
            fetchProjects() {

                axios.get('http://127.0.0.1:8000/api/projects')


                    .then(res => {
                        console.log(res)
                        const { projects } = res.data
                        this.projects = projects

                    })
                    .catch(err => {
                        console.log(err)
                    })
            },

        },
        mounted() {
            this.fetchProjects(this.project)
        },
    }


</script>
<style lang="scss"></style>