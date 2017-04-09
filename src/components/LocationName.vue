<template>
    <div class="location-name">
        <p>{{ $route.name }}</p>
    </div>
</template>



<style>
    .location-name {
        background-color: #46494b;
        height: 96px;
        font-size: 36px;
        line-height: 96px;
        position: fixed;
        border-bottom: 1px solid #46494b;
        top: 0;
        left: 0;
        width: 100%;
        text-transform: uppercase;
        z-index: 5;
    }

    .location-name p {
        margin: 0;
        padding: 0;
    }
</style>