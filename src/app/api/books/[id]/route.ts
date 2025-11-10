import books from "../../db";

export async function PUT(request : Request , { params } : { params : { id : string }}) {
    const id = parseInt(params.id);
    const updatedData = await request.json();
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex === -1) {
        return new Response(JSON.stringify({ message: "Book not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    books[bookIndex] = { id, ...updatedData };

    return new Response(JSON.stringify(books[bookIndex]), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function DELETE( { params } : { params : { id : string }}) {
    const id = parseInt(params.id);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex === -1) {
        return new Response(JSON.stringify({ message: "Book not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];

    return new Response(JSON.stringify(deletedBook), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
