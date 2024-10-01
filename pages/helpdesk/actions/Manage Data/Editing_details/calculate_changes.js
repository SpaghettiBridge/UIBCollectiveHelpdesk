// Initialize an empty array to hold changes
let changes = [];

// Get the selected row data
const selectedRow = {{ui.tbl_mainTickets.selectedRow.data}};
const selectedAgent = {{steps.calculate_agent.data}};
const selectedType = {{ui.slct_details_type.value}};
const selectedPriority = {{ui.slct_details_priority.value}};
const selectedStatus = {{ui.slct_details_status.value}};
const selectedCategory = {{ui.slct_category.value}};
const selectedReason = {{ui.slct_reason_details.value}};
const selectedTitle = {{ui.txt_title.value}};
const selectedDescription = {{ui.inp_details.value}};


// Get current account name
const accountName = {{state.AccountData.name}};

// Function to get the name from a list based on id
const getNameById = (list, id) => list.find(item => item.id === id).name;

// Get account, type, and status data lists
const accounts = {{actions.get_accounts.data}};
const types = {{actions.get_ticket_types.data}};
const statuses = {{actions.get_ticket_statuses.data}};
const categories = {{actions.get_ticket_categories.data}};
const reasons = {{actions.get_ticket_reasons.data}};


// Check and add changes to the changes array
if (selectedRow.fk_agent_id !== selectedAgent) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the agent from: ${getNameById(accounts, selectedRow.fk_agent_id)} to: ${getNameById(accounts, selectedAgent)}`
  });
}

if (selectedRow.fk_type_id !== selectedType) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the type from: ${getNameById(types, selectedRow.fk_type_id)} to: ${getNameById(types, selectedType)}`
  });
}

if (selectedRow.priority !== selectedPriority) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the priority from: ${selectedRow.priority} to: ${selectedPriority}`
  });
}

if (selectedRow.fk_status_id !== selectedStatus) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the status from: ${getNameById(statuses, selectedRow.fk_status_id)} to: ${getNameById(statuses, selectedStatus)}`
  });
}

if (selectedRow.fk_category_id !== selectedCategory) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the Category from: ${getNameById(categories, selectedRow.fk_category_id)} to: ${getNameById(categories, selectedCategory)}`
  });
}

if (selectedRow.fk_ticket_reason !== selectedReason) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the Reason from: ${getNameById(reasons, selectedRow.fk_ticket_reason)} to: ${getNameById(reasons, selectedReason)}`
  });
}

if (selectedRow.title !== selectedTitle) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the status from: ${selectedRow.title} to: ${selectedTitle}`
  });
}

if (selectedRow.details !== selectedDescription) {
  changes.push({
    ticket: selectedRow.id,
    change: `${accountName} has changed the status from: ${selectedRow.details} to: ${selectedDescription}`
  });
}

// Return the changes array
return changes;
