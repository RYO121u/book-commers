type BookType = {
    id: string;
    title: string;
    price: number;
    content: string;
    thumbnail: { url: string };
    created_at: string;
    updated_at: string;
  };


type User = {
  id :string,
  name?: string | null;
  email?: string | null;
  image?: string | null;

}
type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  sessionId: string;
  createdAt: string;
};
export type { BookType ,User,Purchase};