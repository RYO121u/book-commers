import Image from "next/image";
import Book from "./components/Book";
import { getAllBooks } from "./lib/microcms/client";
import { BookType } from "./types/types";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./lib/next-auth/options";



export default async function Home() {
  const { contents } = await getAllBooks();
  const session = await getServerSession(nextAuthOptions);
  const user: any = session?.user;
  let purchasedIds :any
  
  if(user){
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
    );
    const purchasesData = await response.json();
     purchasedIds = purchasesData.map(
      (purchase: any) => purchase.bookId
    );
    console.log(purchasedIds)
  }
  
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {contents.map( (book: BookType) => (
          <Book key={book.id} book={book} 
          isPurchased={purchasedIds.includes(book.id)}/>
        ))}
      </main>
    </>
  );
}