<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <x-hero-cta>
        <x-slot name="image_url">
            https://unsplash.com/photos/5fNmWej4tAA
        </x-slot>
        <x-slot name="id">
            landingImage
        </x-slot>
        <x-slot name="slogan">
            Rectify that bad grade
        </x-slot>
        <x-slot name="tagline">
        </x-slot>
        <x-slot name="call_one">
            How it Works
        </x-slot>
        <x-slot name="url">
            /
        </x-slot>
        <x-slot name="call_two">
            Get Started
        </x-slot>
    </x-hero-cta>
    <x-section-block>
        <x-slot name="block_title">
            Features
        </x-slot>
        <x-slot name="block_contents">
            Enjoy modern features like an built in code area, text-colorization, chat and much more.
        </x-slot>
    </x-section-block>
    <x-section-block>
        <x-slot name="block_title">
            Who this is for
        </x-slot>
        <x-slot name="block_contents">
            Rectify is for CS Students who need to either repair their grades or just want help understanding their
            homework.
        </x-slot>
    </x-section-block>
</x-app-layout>
