<template>
    <div
        class="px-10 sm:px-16 md:px-10: lg:px-20 xl:px-36 block sm:block md:flex lg:flex xl:flex sm:gap-10 mt-10 sm:mt-20 xl:gap-0">
        <!-- About profile image -->
        <div class="w-full w:4/4 sm:w-3/4 xl:w-4/4 mb-7 sm:mb-0 mx-4">
            <img src="~/assets/images/kimresume.jpg" class="rounded-xl w-96 hover:scale-110 " alt="" />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-4/4 my-10 md:my-1 lg:my-1 xl:my-10 text-left">
            <p v-for="bio in bios" :key="bio.id"
                class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        return {
            bios: [
                {
                    id: 1,
                    bio:
                        'Hola! My name is Muhammad Aiman Hakim bin Azahari.',
                },
                {
                    id: 2,
                    bio:
                        'A motivated, adaptable, and responsible computing undergraduate student from Universiti Putra Malaysia (UPM) which will utilize the professional and technical skills developed through past work experiences in this field. I have a methodical, customer-focused approach to work and a strong drive to see things through to completion.',
                },
                {
                    id: 3,
                    bio:
                        'Fan of football, outdoor activities, TV series and die hard Manchester United fan. Interested in the entire frontend spectrum and working on ambitious projects with positive people.',
                },

            ],
        };
    },
};
</script>