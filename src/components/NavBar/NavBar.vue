<template>
    <div>
        <b-navbar toggleable="sm" class="d-flex justify-content-end">
            <b-navbar-nav class="mr-5 ">
                <b-navbar-nav>
                    <b-nav-item @click="setTheme">
                        <span v-if="darkTheme" title="Tema claro"><b-icon-lightning-fill></b-icon-lightning-fill></span>
                         <span v-else title="Tema escuro"><b-icon-lightning></b-icon-lightning></span>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>


<script>
export default {
    name:'NavBar',
    data() {
        return {
            darkTheme:false,
            themeName:''
        }
    },
    created() {
        this.darkTheme = this.isUsingDarkTheme();
        this.configTheme();
    },
    methods: {
        isUsingDarkTheme () {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        },
        configTheme () {
            this.darkTheme == true ? this.themeName = 'theme-dark' : this.themeName = '';
            return document.body.className = this.themeName
        },
        setTheme() {
            this.darkTheme == false ? this.themeName = 'theme-dark' : this.themeName = '';
            document.body.className = this.themeName
            return this.darkTheme = !this.darkTheme;
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: var(--theme-background) !important;
}
.navbar-light .navbar-nav .nav-link{
    color: var(--theme-foreground) !important;
}
</style>