<script>
export default {
    data: () => {
        return {
            ProjectHeading: 'Designs',
            projects: [
                {
                    link: 'https://www.figma.com/proto/y7RPMGFOEedkRjtjP7CN6W/NIKE?page-id=0%3A1&type=design&node-id=1-2&viewport=170%2C375%2C0.17&t=UnKq9x0UDNX2Dh6V-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design',
                    source: 'https://www.figma.com/file/y7RPMGFOEedkRjtjP7CN6W/NIKE?type=design&node-id=0%3A1&mode=design&t=XcsiEB4b3bEQVQi4-1',
                    title: 'Nike Dunk High',
                    img: 'projects/nike.svg',
                    info: 'Nike Footwear Webpage Redesigned',
                },
                {
                    link: 'https://www.figma.com/proto/dD99C4lFJJXcSXIp5JwksS/E-futbal?page-id=0%3A1&type=design&node-id=48-93&viewport=138%2C247%2C0.13&t=7CeAGNg47WKOqtZu-1&scaling=min-zoom&starting-point-node-id=48%3A93&mode=design',
                    source: 'https://www.figma.com/file/dD99C4lFJJXcSXIp5JwksS/E-futbal?type=design&node-id=0%3A1&mode=design&t=b0lKKSqWNPVFk83w-1',
                    title: 'e-futbal',
                    img: 'projects/football.svg',
                    info: 'Football Field Booking System',
                },
                {
                    link: 'https://www.figma.com/proto/YtJ2wDatoR2lvynkU8wTVl/SQA-MOBILE?page-id=0%3A1&type=design&node-id=0-3&viewport=465%2C76%2C0.07&t=BvlrzkBq3oV3nfx3-1&scaling=scale-down&starting-point-node-id=0%3A3&mode=design',
                    source: 'https://www.figma.com/file/YtJ2wDatoR2lvynkU8wTVl/SQA-MOBILE?type=design&node-id=0%3A1&mode=design&t=m1jPhriMxDkqRxfP-1',
                    title: 'SQA Mobile',
                    img: 'projects/sqa.svg',
                    info: 'SQA Portal design for TMRnD',
                },
                {
                    link: 'https://www.figma.com/proto/1YHKUOYVJsHsREkhZ1wleD/SQA-PT?page-id=0%3A1&type=design&node-id=1-59&viewport=761%2C173%2C0.25&t=uMYYuJJl528nFKA3-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design',
                    source: 'https://www.figma.com/file/1YHKUOYVJsHsREkhZ1wleD/SQA-PT?type=design&node-id=1%3A57&mode=design&t=TORiF8uO1h7nyGgc-1',
                    title: 'SQA PT Mobile',
                    img: 'projects/sqa.svg',
                    info: 'SQA Performance Testing for TMRnD',
                },
                {
                    link: 'https://www.figma.com/proto/QYbxISa7nxC4xK6ugskhYe/CMS?type=design&node-id=28-550&t=b43InNIzobNSGxFG-1&scaling=min-zoom&page-id=28%3A549&mode=design',
                    source: 'https://www.figma.com/file/QYbxISa7nxC4xK6ugskhYe/CMS?type=design&node-id=28%3A549&mode=design&t=U4M1UQIYJDTAAfIH-1',
                    title: 'Computer Maintenance System',
                    img: 'projects/hospital.svg',
                    info: 'CMS for HPUPM',
                },
                {
                    link: 'https://www.figma.com/proto/XOJeZGVKuzDpJIXvV0lqIv/MyKhairat-Mobile-Web-App?page-id=0%3A1&type=design&node-id=21-76&viewport=222%2C373%2C0.21&t=caALldOEwqdzQnTk-1&scaling=scale-down&starting-point-node-id=16%3A2&mode=design',
                    source: 'https://www.figma.com/file/XOJeZGVKuzDpJIXvV0lqIv/MyKhairat-Mobile-Web-App?type=design&node-id=0%3A1&mode=design&t=6sCCNvTmFQ7mpT02-1',
                    title: 'MyKhairat',
                    img: 'projects/mosque.svg',
                    info: 'Khairat Kematian Management System',
                },
                {
                    link: 'https://www.figma.com/proto/jawAMlqumlz9e2gwbN7JGY/padvisor?page-id=0%3A1&type=design&node-id=202-382&viewport=120%2C-1229%2C0.26&t=yb0mMNfIacr9rDTo-1&scaling=scale-down&starting-point-node-id=202%3A382&show-proto-sidebar=1&mode=design',
                    source: 'https://www.figma.com/file/jawAMlqumlz9e2gwbN7JGY/padvisor?type=design&node-id=0%3A1&mode=design&t=2Xr2wjJpxSjcJICk-1',
                    title: 'PA Advisor',
                    img: 'projects/advisor.svg',
                    info: 'Advisor Monitoring System',
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
                    :to="project.link" target="_blank">View Prototype</nuxt-link></button>
            <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full m-3"><nuxt-link
                    :to="project.source" target="_blank">View Design</nuxt-link></button>
        </div>
    </div>
</template>