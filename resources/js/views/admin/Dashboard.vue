<template>
    <div class="app-content main-content">
        <div class="side-app main-container">
            <div class="page-header d-xl-flex d-block">
                <div class="page-leftheader">
                    <div class="page-title">HR<span class="font-weight-normal text-muted ms-2">Dashboard</span></div>
                </div>
                <div class="page-rightheader ms-md-auto">
                    <div class="d-flex align-items-end flex-wrap my-auto end-content breadcrumb-end">
                        <div class="d-flex">
                            <div class="header-datepicker me-3">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="feather feather-calendar"></i>
                                        </div>
                                    </div><input class="form-control fc-datepicker" placeholder="19 Feb 2020" type="text">
                                </div>
                            </div>
                            <div class="header-datepicker me-3">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="feather feather-clock"></i>
                                        </div>
                                    </div><!-- input-group-prepend -->
                                    <input id="tpBasic" type="text" placeholder="09:30am" class="form-control input-small">
                                </div>
                            </div><!-- wd-150 -->
                        </div>
                        <div class="d-lg-flex d-block">
                            <div class="btn-list">
                                <button type="button"  class="btn btn-primary"  data-bs-toggle="modal"   data-bs-target="#clockinmodal">Clock In</button>
                                <button type="button"  class="btn btn-light"    data-bs-toggle="tooltip" data-bs-placement="top" title="E-mail"> <i class="feather feather-mail"></i> </button>
                                <button type="button"  class="btn btn-light"    data-bs-toggle="tooltip" data-bs-placement="top" title="Contact"> <i class="feather feather-phone-call"></i> </button>
                                <button type="button"  class="btn btn-primary"  data-bs-toggle="tooltip" data-bs-placement="top"  title="Info"> <i class="feather feather-info"></i> </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

</style>
