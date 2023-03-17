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
                {
                    title: 'Jira',
                    img: 'tools/jira.svg',
                    info: 'Project management tool that designed to help teams plan, track, and manage software development projects and used by agile development teams in a collaborative manner',
                },
                {
                    title: 'Selenium',
                    img: 'tools/selenium.svg',
                    info: 'Open-source automation testing tool used for web application testing and used to automate the testing of web applications across different web browsers and operating systems',
                },
                {
                    title: 'Grafana',
                    img: 'tools/grafana.svg',
                    info: 'Open-source data visualization and analytics platform used to visualize and analyze data from a wide range of sources, including databases, cloud services, and IoT devices',
                },
                {
                    title: 'Proxmox',
                    img: 'tools/proxmox.svg',
                    info: 'Open-source virtualization management platform that allows users to manage virtual machines, containers, and software-defined storage in a centralized web-based interface',
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
    <div class="grid grid-cols-4 gap-4 mx-10">
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