<template>
    <div class="page-main">
        <TopNav/>
        <Sidebar/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>
<script>
import Sidebar from "./partials/Sidebar";
import TopNav from "./partials/TopNav";
export default {
    components: {TopNav, Sidebar}
}
</script>
<style scoped>

</style>
