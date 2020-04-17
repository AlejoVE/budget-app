function eventListener (){
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
  
  //new instance of UI CLASS
  const ui = new UI();
  
  // budget form submit
  budgetForm.addEventListener("submit", function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  })
  
  // expense form submit
  expenseForm.addEventListener("submit", function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  })
  
  // expense click
  expenseList.addEventListener("click", function(event){
    if(event.target.parentElement.classList.contains("edit-icon")){
      ui.editExpense(event.target.parentElement);
    }
     else if(event.target.parentElement.classList.contains("delete-icon")){
      ui.deleteExpense(event.target.parentElement);
    }
  })
  
  
  }
  
  document.addEventListener("DOMContentLoaded", function(){
    eventListener();
  })