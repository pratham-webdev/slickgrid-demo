/***
 * Contains basic SlickGrid formatters.
 * 
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 * 
 * @module Formatters
 * @namespace Slick
 */

(function ($) {
  function PercentCompleteFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null || value === "") {
      return "-";
    } else if (value < 50) {
      return "<span style='color:red;font-weight:bold;'>" + value + "%</span>";
    } else {
      return "<span style='color:green'>" + value + "%</span>";
    }
  }

  function PercentCompleteBarFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null || value === "") {
      return "";
    }

    var color;

    if (value < 30) {
      color = "red";
    } else if (value < 70) {
      color = "silver";
    } else {
      color = "green";
    }

    return "<span class='percent-complete-bar' style='background:" + color + ";width:" + value + "%' title='" + value + "%'></span>";
  }

  function YesNoFormatter(row, cell, value, columnDef, dataContext) {
    return value ? "Yes" : "No";
  }

  function CheckboxFormatter(row, cell, value, columnDef, dataContext) {
    return '<img class="slick-edit-preclick" src="../images/' + (value ? "CheckboxY" : "CheckboxN") + '.png">';
  }

  function CheckmarkFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<img src='../styles/images/tick.png'>` : "";
  }

  function FlagFormatter(row, cell, value, columnDef, dataContext) {
    return value ? '<i class="bi bi-eye-slash"></i>' : "";
  }

  function ReviewedFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<i class="bi bi-flag"></i>` : "";
  }

  function TimekeeperFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<a class="link-primary" href="#"><i class="bi bi-person-fill me-2"></i>John Doe</a>` : "";
  }

  function AmountFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<a class="link-primary" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">${value}</a>` : "";
  }
  function WarningFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<a class="link-danger" href="#" data-bs-toggle="modal" data-bs-target="#warningModal" data-bs-toggle="tooltip" data-bs-placement="top" title="This is flagged as a block billing problem"><i class="bi bi-exclamation-octagon-fill"></i></a>` : "";
  }
  function MLFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<a class="link-warning" href="#" data-bs-toggle="modal" data-bs-target="#MLModal"><i class="bi bi-exclamation-triangle-fill"></i></a>` : "";
  }
  function AdjustmentFormatter(row, cell, value, columnDef, dataContext) {
    return value ? `<a class="link-primary" href="#" data-bs-toggle="modal" data-bs-target="#adjustmentModal"><i class="bi bi-markdown-fill me-2"></i>${value}</a>` : "";
  }

  // exports
  $.extend(true, window, {
    "Slick": {
      "Formatters": {
        "PercentComplete": PercentCompleteFormatter,
        "PercentCompleteBar": PercentCompleteBarFormatter,
        "YesNo": YesNoFormatter,
        "Checkmark": CheckmarkFormatter,
        "Checkbox": CheckboxFormatter,
        "Flag": FlagFormatter,
        "Reviewed": ReviewedFormatter,
        "Timekeeper": TimekeeperFormatter,
        "Amount":AmountFormatter,
        "Warning":WarningFormatter,
        "ML":MLFormatter,
        "Adjustments":AdjustmentFormatter
      }
    }
  });
})(jQuery);
