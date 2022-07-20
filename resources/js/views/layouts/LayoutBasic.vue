<template>
    <div class="page"  id="mainNavShow">
        <div class="page-main">
            <top-nav/>
            <sidebar/>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
        <footer/>
        <sidebar-right/>
        <in-modal/>
        <password-modal/>
    </div>
</template>
<script>
import Sidebar from "./partials/Sidebar";
import TopNav from "./partials/TopNav";
import Footer from "./partials/Footer";
import SidebarRight from "./partials/SidebarRight"
import InModal from "./partials/InModal"
import PasswordModal from "./partials/PasswordModal"
export default {
    components: {Footer, TopNav, Sidebar, SidebarRight, InModal, PasswordModal}
}
</script>
<style scoped>

</style>
