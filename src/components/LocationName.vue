<template>

    <div class="location-name">
        <p>{{ $route.name }}</p>
        <router-link to="searchpage"><i class="icon-search search"></i></router-link>
    </div>

</template>



<style>
    .location-name {
        background-color: #46494b;
        font-size: 2rem;
        line-height: 5rem;
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

    .search {
        position: absolute;
        right: 22px;
        top: 21px;
        font-size: 2rem;
        cursor: pointer;
        color: #7f8c8d;
    }
    .search:hover {
        color: #e63f52;
    }

</style>