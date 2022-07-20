<template>
    <div class="modal fade"  id="clockinmodal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><span class="feather feather-clock  me-1"></span>Clock In</h5>
                    <button  class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="countdowntimer"><span id="clocktimer" class="border-0"></span></div>
                    <div class="form-group">
                        <label class="form-label">Note:</label>
                        <textarea class="form-control" rows="3">Some text here...</textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button  class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
                    <button  class="btn btn-primary">Clock In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

</style>
