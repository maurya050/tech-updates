import books from "@/app/api/db";

export async function GET() {
    return new Response(JSON.stringify(books), {
        status: 200,
        headers: { 
            "Content-Type": "application/json",
        },
    });
}

export async function POST(request : Request ) {
    const newBook = await request.json();
    books.push(newBook);
    return new Response(JSON.stringify(newBook), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}