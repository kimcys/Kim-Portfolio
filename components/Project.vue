<script>
export default {
    data: () => {
        return {
            ProjectHeading: 'Projects',
            projects: [
                {
                    link: 'https://github.com/kimcys/cms',
                    title: 'Computer Maintenance System (CMS) HPUPM',
                    img: 'projects/cms.svg',
                    info: 'Helps an Hospital Pengajar UPM maintenance operation manage maintenance activities',
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
                    :to="project.link" target="_blank">See More</nuxt-link></button>
        </div>
    </div>
</template>