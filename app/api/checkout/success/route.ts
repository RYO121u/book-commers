import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request:Request,response:Response) {
    const { sessionId} = await request.json()
    try{

        const session = await stripe.checkout.sessions.retrieve(sessionId);
 
        
        const existingPurchase = await prisma.purchase.findFirst({
            where: {
              userId: session.client_reference_id!,
              bookId: session.metadata?.bookId!,
            },
          });
        // 既に購入履歴が存在する場合は、新たに作成しない
    if (!existingPurchase) {
        const Purchase = await prisma.purchase.create({
          data: {
            userId: session.client_reference_id!,
            bookId: session.metadata?.bookId!,
          },
        });
        return NextResponse.json({ Purchase });
      } else {
        // 既に購入履歴が存在する場合の処理
        return NextResponse.json({ message: "Purchase already recorded" });
      }
    }catch(err){
        return NextResponse.json(err)
    }
    
   
}
