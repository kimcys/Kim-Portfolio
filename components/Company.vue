<script>
export default {
    data: () => {
        return {
            clientsHeading: 'Im proud to have collaborated with some awesome organizations:',
            clients: [
                {
                    id: 1,
                    title: 'Telekom Malaysia Berhad',
                    img: 'images/tm.svg',
                },
                {
                    id: 2,
                    title: 'Hospital Pengajar UPM',
                    img: 'images/upm.svg',
                },
            ],
        };
    },
};
</script>

<template>
    <div class="my-10 px-10">
        <p class="font-sans font-semibold text-center text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
            {{ clientsHeading }}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="client in clients" :key="client.id" :client="client"
            class="items-center p-6 space-y-3 text-center bg-white transform transition duration-500 hover:scale-90 hover:bg-gray-300 rounded-xl dark:bg-gray-800 hover:shadow-sm dark:hover:bg-gray-600">
            <span class="inline-block p-3 text-blue-500 bg-white dark:bg-gray-200 rounded-xl dark:text-white">
                <img :src="client.img" class="w-40 h-20" />
            </span>
            <h1 class="text-xl font-sans font-semibold text-gray-700 capitalize">{{ client.title }}</h1>
        </div>
    </div>
</template>
