<script>
export default {
    data: () => {
        return {
            skillheading: 'Framework',
            frameworks: [
                {
                    title: 'Flutter',
                    img: 'framework/flutter.svg',
                    info: 'Build natively compiled, cross-platform apps for Android, iOS, web, and desktop from a single codebase',
                },
                {
                    title: 'Nuxt',
                    img: 'framework/nuxt.svg',
                    info: 'Nuxt.js is a free and open-source framework based on the popular Vue.js JavaScript framework',
                },
                {
                    title: 'Tailwind',
                    img: 'framework/tailwind.svg',
                    info: 'Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to quickly and easily style HTML content',
                },
                {
                    title: 'SEAShell',
                    img: 'framework/seashell.svg',
                    info: 'It is a UPM framework that contain script class and function that can develop application more easily',
                },
            ],
        };
    },
};
</script>

<template>
    <div class="my-10">
        <p class="font-sansmedium font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ skillheading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="framework in frameworks" :key="framework.title" :framework="framework"
            class="items-center p-6 space-y-3 text-center bg-gray transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-full dark:text-white">
                <img :src="framework.img" class="w-6 h-6" />
            </span>
            <h1 class="text-2xl font-sans font-semibold text-gray-700 capitalize">{{ framework.title }}</h1>
            <p class="text-gray-500 dark:text-gray-300">
                {{ framework.info }}
            </p>
        </div>
    </div>
</template>

                       
                        


