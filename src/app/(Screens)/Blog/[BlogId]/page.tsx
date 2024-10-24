function Page({ params }: {
    params: {
        BlogId: string
    }
}) {

    return (
        <div>
            <h2>Details about "{params.BlogId}"</h2>
        </div>
    )
}

export default Page
