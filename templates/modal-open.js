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

const warningModalTemplate = `<div class="modal fade" id="warningModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Warnings</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <span class="text-danger">Line item description contains a charge matching disallowed descriptions: "RESEARCH"</span>
    </div>
  </div>
</div>
</div>`

const MLModalTemplate = `<div class="modal fade" id="MLModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">ML Recommendations</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <p class="text-primary"><b>ML Recommendation:</b> Potential block billing identified as many as multiple activities in single line item description.</p>
    <p class="text-primary"><b>ML Action Recommended:</b> Recommendation to adjust this line item by 10% per the company's billing guidelines</p>
    </div>
  </div>
</div>
</div>`

$('body').append(modalBodyTemplate, warningModalTemplate, MLModalTemplate);