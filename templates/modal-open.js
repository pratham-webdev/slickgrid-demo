const modalBodyTemplate = `<div class="modal fade" id="exampleModal" tabindex="-1">
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
</div>`;

const warningModalTemplate = `<div class="modal fade" id="warningModal" tabindex="-1">
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
</div>`;

const MLModalTemplate = `<div class="modal fade" id="MLModal" tabindex="-1">
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
</div>`;

function adjustmentsModalBody(type){ return `

<div class="mb-2">
    <div class="d-flex align-items-center justify-content-between">
        <div class="w-50">
            <div class="mb-1">
               <b>${type}:</b> <span>2/1/2022 - Quantity adjusted to 2.00 hours - <a href="#">${type == 'Auto' ? 'System' : 'John Doe'}</a></span>
            </div>
            <div class="mb-2">
                <span>Reason for adjustment:</span><span class="text-primary ms-1">Excessive time on task</span>
            </div>
        </div>
        <div class="w-50">
            <div class="mb-1">
                <span>Comments to Vendor:</span><span class="text-primary ms-1">New Amount</span>
            </div>
            <div class="mb-2">
                <span>Reason for adjustment:</span><span class="text-primary ms-1">New Amount</span>
            </div>
        </div>
    </div>
    
    <div class="border-bottom"></div>
</div>`;
}



const AdjustmentModalTemplate = `<div class="modal fade" id="adjustmentModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header align-items-center">
      <h5 class="modal-title">Adjustment History</h5>
      <div>
      <button type="button" class="btn btn-sm btn-outline-primary me-2">Make Adjustment</button>
      <button type="button" class="btn btn-outline-new border-0 p-1" data-bs-dismiss="modal" aria-label="Close"><i class="fs-4 bi bi-x lh-1"></i></button>
      </div>
    </div>
    <div class="modal-body pt-2">
    <div class="mb-2">
    <span class="fw-bold">Adjustment:</span><span class="ms-1 text-primary"><i
            class="bi bi-markdown-fill fs-5 text-primary ms-1"></i></span><span class="ms-2">Manual</span>
</div>
<div class="mb-1">
        <span class="fw-bold">Quantity:</span>
    </div>
    ${adjustmentsModalBody('Manual')}
    ${adjustmentsModalBody('Auto')}
    ${adjustmentsModalBody('Auto')}
    <div class="mt-3">
    <button class="btn btn-sm btn-primary">Revert</button>
</div>
</div>

  </div>
</div>
</div>`


const adjustmentsTooltip = `<div id="adjustments-tooltip">
<p class="text-primary"><b>Total No. of Adjustments: 03</b></p>
<p class="text-primary"><b>Latest Adjustment - Manual</b></p>
<p><b>Sethi, Pratham - Adjusted Discount to -10.00 United States, Dollars. 3/10/22</b></p>
<p><b>Reason for Adjustment :</b> Fee Charges Exceed Home Office Rate</p>
<p><b>Comments to Vendor :</b> Changed</p>
<p><b>In House Comments :</b> Changed</p>
</div>`;



$('body').append(modalBodyTemplate, warningModalTemplate, MLModalTemplate, AdjustmentModalTemplate, adjustmentsTooltip);
