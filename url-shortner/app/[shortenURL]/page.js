import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function page({params}) {
    const m = await params.shortenURL
    console.log(m);
     const client = await clientPromise;
    const shortener = client.db("shortener");
    const url = shortener.collection("shorten_URLs")
    const exists = await url.findOne({shortenURL:m})
    if (exists) {
        redirect(exists.url)
    }
}