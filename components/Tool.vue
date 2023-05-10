<script>
export default {
    data: () => {
        return {
            toolheading: 'Tools',
            tools: [
                {
                    title: 'JMeter',
                    img: 'tools/jmeter.svg',
                    info: 'Open-source load testing tool that is used to test the performance and functional behavior of web applications, APIs, and other software systems',
                },
                {
                    title: 'Blazemeter',
                    img: 'tools/blazemeter.svg',
                    info: 'Cloud-based load testing platform that is used to test the performance of their web and mobile applications, APIs, and other software systems',
                },
                {
                    title: 'Postman',
                    img: 'tools/postman.svg',
                    info: 'API development tool that is used by developers to design, test, and document APIs',
                },
                {
                    title: 'Draw.io',
                    img: 'tools/drawio.svg',
                    info: 'web-based diagramming and flowcharting tool that allows users to create a wide variety of diagrams, including flowcharts, network diagrams, and organization charts',
                },
            ],
        };
    },
};
</script>
<template>
    <div class="my-10">
        <p class="font-sansmedium font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ toolheading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="tool in tools" :key="tool.title" :tool="tool"
            class="items-center p-6 space-y-3 text-center bg-gray transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-full dark:text-white">
                <img :src="tool.img" class="w-6 h-6" />
            </span>
            <h1 class="text-2xl font-sans font-semibold text-gray-700 capitalize">{{ tool.title }}</h1>
            <p class="text-gray-500 dark:text-gray-300">
                {{ tool.info }}
            </p>
        </div>
    </div>
</template>