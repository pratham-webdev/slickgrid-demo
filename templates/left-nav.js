import leftNavTemplate from "../templates/left-nav-template.js";

const leftNavItems = [{
    id: 1,
    name: `Invoice - 120415`,
    items: ["General", "Summary Breakdowns", "Payment", "Transactions", "Documents", "Security", "Workflow", "History", "TBD"],
    parentClass:"active",
    childClass: "show",
    aria: "true"
},
{
    id: 2,
    name: `Invoices`,
    items: ["Custom Search", "Recently Viewed", "All Invoices", "Not Posted", "Approved", "Pending", "Rejected", "Failed", "Approvals"],
    parentClass:"",
    childClass: "show",
    aria: "true"
},
{
    id: 3,
    name: `Expenses`,
    items: ["Custom Search", "Recently Viewed", "All Invoices", "Not Posted", "Approved", "Pending", "Rejected", "Failed", "Approvals"],
    parentClass:"",
    childClass: "",
    aria: "false"
},
{
    id: 4,
    name: `Accounts`,
    items: ["Custom Search", "Recently Viewed", "All Invoices", "Not Posted", "Approved", "Pending", "Rejected", "Failed", "Approvals"],
    parentClass:"",
    childClass: "",
    aria: "false"
},
{
    id: 5,
    name: `Time Entry Settings`,
    items: ["Custom Search", "Recently Viewed", "All Invoices", "Not Posted", "Approved", "Pending", "Rejected", "Failed", "Approvals"],
    parentClass:"",
    childClass: "",
    aria: "false"
},
{
    id: 6,
    name: `Cost Centers`,
    items: ["Custom Search", "Recently Viewed", "All Invoices", "Not Posted", "Approved", "Pending", "Rejected", "Failed", "Approvals"],
    parentClass:"",
    childClass: "",
    aria: "false"
},
]
$('#left-nav-panel').append(leftNavTemplate(leftNavItems));