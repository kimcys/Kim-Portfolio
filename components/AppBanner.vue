<template>
    <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 px-44">
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left">
            <h1
                class="font-display font-bold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
                Hi! I'm Kimcy
            </h1>
            <p
                class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400">
                A Front End Developer & Software Tester
            </p>

            <div class="flex justify-center sm:block xl:block">
                <a download="HakimResume.pdf" href="files/HakimResume.pdf"
                    class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-bistre dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-gray focus:ring-1 focus:ring-jet hover:bg-jet text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume">
                    <span class="text-sm sm:text-lg font-general-medium duration-100">Download Resume</span>
                </a>
            </div>

        </div>



        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right">
            <img src="@/assets/images/developer.svg" class="w-3/4" alt="Developer" />
        </div>
    </section>
</template>