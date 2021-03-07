<header id="{{ $id }}" class="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
    style="background:url({{ $image_url }});">
    <!-- Overlay Background + Center Control -->
    <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.5);">
        <div class="mx-2 text-center">
            <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                <span class="text-white">{{ $slogan }}</span>
            </h1>
            <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                <span class="text-white">{{ $tagline }}</span>
            </h2>
            <div class="inline-flex">
                <button
                    class="p-2 my-5 mx-2 bg-white dark:bg-gray-800 hover:bg-green-400 font-bold text-gray-900 dark:text-white rounded border-2 border-transparent hover:border-green-400 shadow-md transition duration-500 md:text-xl">{{ $call_one }}</button>
                <a href="{{ $url }}"><button
                        class="p-2 my-5 mx-2 bg-transparent border-2 bg-white dark:bg-gray-800 bg-opacity-75 hover:bg-green-400 border-transparent rounded hover:border-green-400 font-bold text-gray-900 dark:text-white shadow-md transition duration-500 md:text-lg">{{ $call_two }}</button></a>
            </div>
        </div>
    </div>
</header>
