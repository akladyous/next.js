type TodoList = Todo[];
type TodoType = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  important?: boolean;
  planed?: Date;
  reminder?: Date;
  dueDate?: Date;
  attachment?: Blob[];
};
