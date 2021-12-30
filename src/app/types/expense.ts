export interface NewExpenseModel {
  title: string;
  amount: string;
  date: Date;
}

export interface ExpenseModal extends NewExpenseModel {
  id: string;
}
