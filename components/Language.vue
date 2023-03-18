<script>
export default {
    data: () => {
        return {
            languageheading: 'Programming Languages',
            languages: [
                {
                    title: 'Java',
                    img: 'languages/java.svg',
                    info: 'Java is a high-level, object-oriented programming language',
                },
                {
                    title: 'PHP',
                    img: 'languages/php.svg',
                    info: 'Server-side scripting language designed for web development',
                },
                {
                    title: 'JavaScript',
                    img: 'languages/js.svg',
                    info: 'High-level, object-oriented scripting language that is commonly used to create interactive and dynamic web pages',
                },
                {
                    title: 'Dart',
                    img: 'languages/dart.svg',
                    info: ' It is an object-oriented, class-based language that is designed to be fast, efficient, and easy to learn.',
                },
            ],
        };
    },
};
</script>

<template>
    <div class="my-10">
        <p class="font-sansmedium font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ languageheading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div v-for="language in languages" :key="language.title" :language="language"
            class="items-center p-6 space-y-3 text-center bg-gray transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-full dark:text-white">
                <img :src="language.img" class="w-6 h-6" />
            </span>
            <h1 class="text-2xl font-sans font-semibold text-gray-700 capitalize">{{ language.title }}</h1>
            <p class="text-gray-500 dark:text-gray-300">
                {{ language.info }}
            </p>
        </div>
    </div>
</template>

                       
                        


