const modalBodyTemplate = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Line Item Adjustment (static screen)</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <img src="styles/image.png" class="img-fluid" alt="" srcset="">
    </div>
    <div class="modal-footer d-flex align-items-center justify-content-center">
      <button type="button" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-outline-new" data-bs-dismiss="modal">Cancel</button>
    </div>
  </div>
</div>
</div>`

$('body').append(modalBodyTemplate);