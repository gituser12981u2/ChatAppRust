// src/types.ts
export type Todo = {
  description: string;
  id: number;
  title: string;
};

export type Props = {
  onClose: () => void;
  todo: Todo | null;
};
