<template>
    <router-link :to="`/blog/${project.slug}`">
        <div class="card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p>{{ project.date }}</p>
            <a>{{ project.url }}</a>
            <p>
                {{ project.type ? project.type.name : 'non risulta' }}
            </p>
            <ul>
                <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
            </ul>
        </div>
    </router-link>
</template>
  
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },

}
</script>
  
<style scoped>
.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
}

.card h3 {
    margin-top: 0;
}

.card p {
    margin-bottom: 10px;
}

.card a {
    color: #007bff;
    text-decoration: none;
}
</style>
