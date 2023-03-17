<template>
    <div class="mx-48 block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img src="~/assets/images/kimresume.jpg" class="rounded-xl w-96 hover:scale-105" alt="" />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left">
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