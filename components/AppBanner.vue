<template>
    <section
        class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 px-20 sm:mt-10 md:px-24 lg:px-32 xl:px-44">
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left">
            <h1
                class="font-graphik font-bold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
                Hi! I'm Kim Chica
            </h1>
            <p
                class="font-general-medium mt-5 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400">
                A Front End Developer & Software Tester
            </p>

            <div class="flex justify-center mt-5 sm:block xl:block">

                <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full">
                    <nuxt-link to="https://linkedin.com/in/aimanhakimcy" target="_blank">LinkedIn</nuxt-link>

                </button>

                <button class="bg-khaki hover:bg-bistre text-white font-bold py-2 px-4 rounded-full mx-5">
                    <nuxt-link to="mailto:aimanhakimcy@gmail.com" target="_blank">Contact Me</nuxt-link>

                </button>
            </div>

            <div class="flex justify-center sm:block xl:block">
                <a download="HakimResume.pdf" href="files/HakimResume.pdf"
                    class="flex justify-center items-center w-36 sm:w-48 mt-5 mb-5 sm:mb-0 text-lg border border-bistre dark:border-ternary-dark h-14 text-center py-auto shadow-lg rounded-lg bg-white focus:ring-1 focus:ring-jet hover:bg-jet text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume">
                    <span class="text-sm sm:text-lg font-general-medium duration-100">Download Resume</span>
                </a>
            </div>

        </div>
        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right ">
            <img src="@/assets/images/developer.svg" class="w-3/4 mx-auto" alt="Developer" />
        </div>
    </section>
</template>