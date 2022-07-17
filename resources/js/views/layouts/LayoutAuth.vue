<template>
    <div class="page-single">
        <div class="container">
            <div class="row">
                <div class="col mx-auto">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-4 col-xxl-4">
                            <transition name="fade" mode="out-in">
                                <router-view/>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LayoutAuth"
}
</script>

<style scoped>

</style>
