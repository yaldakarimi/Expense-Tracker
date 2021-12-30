export interface NewExpenseModel {
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenseModal extends NewExpenseModel {
  id: string;
}

export interface DataPointModel {
  value: number;
  label: string;
}
