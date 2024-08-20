function isDateWithinRange(dateString) {
    // Convert the input date string to a Date object
    const startDate = new Date(dateString);
    
    // Add 30 days to the start date
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 30);
    
    // Get today's date
    const today = new Date();
    
    // Check if today's date is between the start date and end date (inclusive)
    return today >= startDate && today <= endDate;
}
