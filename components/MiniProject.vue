<script>
export default {
    data: () => {
        return {
            ProjectHeading: 'Mini Projects',
            projects: [
                {
                    link: 'https://orderlist-warung.netlify.app/',
                    source: 'https://github.com/kimcys/to_do.git',
                    title: 'To Do list',
                    img: 'projects/todo.svg',
                    info: 'Simple to do list',
                },
                {
                    link: 'https://kimsio.netlify.app',
                    source: 'https://github.com/kimcys/simple_calculator.git',
                    title: 'Kimsio Calculator',
                    img: 'projects/calculator.svg',
                    info: 'Simple calculator',
                },
                {
                    source: 'https://github.com/kimcys/internship-crud.git',
                    title: 'Internship System',
                    img: 'projects/intern.svg',
                    info: 'Internship Student Management System',
                },
                {
                    source: 'https://github.com/kimcys/gym-app.git',
                    title: 'Gym App',
                    img: 'projects/gym.svg',
                    info: 'Gym Membership Application',
                },
            ],
        };
    },
};
</script>

<template>
    <div class="my-10">
        <p class="font-sansmedium font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ ProjectHeading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="project in projects" :key="project.title" :project="project"
            class="items-center p-6 space-y-3 text-center bg-gray transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-md dark:text-white">
                <img :src="project.img" class="w-16 h-16" />
            </span>
            <h1 class="text-2xl font-sans font-semibold text-gray-700 capitalize">{{ project.title }}</h1>
            <p class="text-gray-500 dark:text-gray-300">
                {{ project.info }}
            </p>
            <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full m-3"><nuxt-link
                    :to="project.link" target="_blank">View App</nuxt-link></button>
            <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full m-3"><nuxt-link
                    :to="project.source" target="_blank">View Source Code</nuxt-link></button>
        </div>
    </div>
</template>