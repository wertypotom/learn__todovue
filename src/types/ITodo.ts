export type ITodo = {
  id: number;
  text: string;
  completed: boolean;
};

export type FilterButtons = 'All' | 'Active' | 'Done';

export type TodoFormState = {
  showForm: boolean;
  text: string;
};
