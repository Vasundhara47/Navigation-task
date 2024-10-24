function Page({ params }: {
    params: {
        commentsId: string,
        BlogId: string
    }
}) {

    return (
        <div>
            <h2>Comment "{params.commentsId}" on blog "{params.BlogId}"</h2>
        </div>
    )
}

export default Page
