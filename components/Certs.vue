<script>
export default {
    data: () => {
        return {
            CertsHeading: 'Certificates',
            Certs: [
                {
                    title: 'Introduction to HTML',
                    img: 'logo/HTML5.svg',
                    link: 'https://www.sololearn.com/certificates/CC-4RX1MYTW',
                    info: 'Learn basic of html',
                },
                {
                    title: 'Intrduction to CSS',
                    img: 'logo/CSS3.svg',
                    link: 'https://www.sololearn.com/certificates/CC-WQN7WVNT',
                    info: 'Learn crafting my own beautiful digital experiences',
                },
                {
                    title: 'Introduction to Python',
                    img: 'logo/Python.svg',
                    link: 'https://www.sololearn.com/certificates/CC-B7KX0IUY',
                    info: 'Cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges.',
                },
                {
                    title: 'Introduction to JavaScipt',
                    img: 'languages/js.svg',
                    link: 'https://www.sololearn.com/certificates/CC-V0NGUKIY',
                    info: 'Learn the basics of using JavaScript to make an interactive website.',
                },
                {
                    title: 'JavaScript Intermediate',
                    img: 'languages/js.svg',
                    link: 'https://www.sololearn.com/certificates/CC-EXGCH4UU',
                    info: 'Learn how to make more complex and flexible programs as well as even more interactive websites.',
                },
                {
                    title: 'Angular + NestJs',
                    img: 'logo/Angular.svg',
                    link: 'https://www.sololearn.com/certificates/CT-TMUVHPVK',
                    info: 'Dive into TypeScript, an influential language for web development. Discover how Angular and Nest JS unite to create large scale JavaScript applications.',
                },
                {
                    title: 'React + Redux',
                    img: 'logo/React.svg',
                    link: 'https://www.sololearn.com/certificates/CT-OBV3GJGQ',
                    info: 'Learn to build powerful interactive user interfaces using a popular JavaScript library trusted by Facebook and Uber. Dive into the core concepts of React and Redux. ',
                },

            ],
        };
    },
};
</script>

<template>
    <div class="my-10">
        <p class="font-sansmedium font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ CertsHeading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="cert in Certs" :key="cert.title" :cert="cert"
            class="items-center p-6 space-y-3 text-center bg-gray transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-full dark:text-white">
                <img :src="cert.img" class="w-6 h-6" />
            </span>
            <h1 class="text-2xl font-sans font-semibold text-gray-700 capitalize">{{ cert.title }}</h1>
            <p class="text-gray-500 dark:text-gray-300">
                {{ cert.info }}
            </p>
            <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full m-3"><nuxt-link
                    :to="cert.link" target="_blank">View Certificate</nuxt-link></button>
        </div>
    </div>
</template>

                       
                        


