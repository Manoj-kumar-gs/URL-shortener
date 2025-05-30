import clientPromise from "@/lib/mongodb";
export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const shortener = client.db("shortener");
    const url = shortener.collection("shorten_URLs")
    const exists = await url.findOne({shortenURL:body.shortenURl})
    if (exists) {
        return new Response(JSON.stringify({ message: "Name already exists" }), { status: 400 })
    }
    await url.insertOne({
        url: body.url,
        shortenURL: body.shortenURL
    })
    console.log("shortenName : ",body)
    return new Response(JSON.stringify({ message: "URL shortened succesfully" },{shortenURl:body}, { status: 200 }))
}