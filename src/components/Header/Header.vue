<template>
    <header>
        <div>
            Developer Book
        </div>
        <nav>
            <ul>
                <router-link tag='li' active-class='active' to="/home" exact>Home</router-link>
                <router-link tag='li' active-class='active' to="/about">About</router-link>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @import './index.scss'
</style>