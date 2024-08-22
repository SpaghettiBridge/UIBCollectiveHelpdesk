// Initialize an empty array to hold changes
let changes = [];

// Get the selected row data
const selectedRow = {{ui.tbl_mainTickets3.selectedRow.data}};
const selectedAgent = {{steps.calculate_agent.data}};
const selectedType = {{ui.slct_details_type2.value}};
const selectedPriority = {{ui.slct_details_priority2.value}};
const selectedStatus = {{ui.slct_details_status2.value}};

// Get current account name
const accountName = {{state.AccountData.name}};

// Function to get the name from a list based on id
const getNameById = (list, id) => list.find(item => item.id === id).name;

// Get account, type, and status data lists
const accounts = {{actions.get_accounts.data}};
const types = {{actions.get_ticket_types.data}};
const statuses = {{actions.get_ticket_statuses.data}};

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

// Return the changes array
return changes;
