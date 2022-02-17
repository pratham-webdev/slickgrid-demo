const viewSelectMenu = `<div class="py-2 d-flex align-items-center">
<span class="fw-bold">View:</span>
<select class="form-select ms-2 w-25" aria-label="Default select example">
  <option selected>All line items</option>
  <option value="1">Appealed Line Items</option>
  <option value="2">Line Item Warnings</option>
  <option value="3">Manually Adjusted Line Items</option>
  <option value="3">Auto Adjusted Line Items</option>
  <option value="3">All Adjusted Line Items</option>

</select>
</div>`

$('#card-4').prepend(viewSelectMenu);