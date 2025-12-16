export function BooksGil ({libro, nombre, descri}) {
    return (
        <>
        <img src={libro} alt="" width="180" />
        <h2>{nombre}</h2>
        <p>{descri}</p>
        </>
    )
} 