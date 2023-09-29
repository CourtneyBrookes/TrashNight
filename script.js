function addTrashDate() {
    const trashDateInput = document.getElementById("trashDate");
    const trashDatesDiv = document.getElementById("trashDates");
    
    const date = trashDateInput.value;
    if (date) {
        const newDateItem = document.createElement("div");
        newDateItem.textContent = date;
        trashDatesDiv.appendChild(newDateItem);
        trashDateInput.value = "";
    }
}



