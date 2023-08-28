function Tags({ tags }) {
    return (
        <div className="tags__groupe">
            {tags.map((tag, index) => (
                <div className="logement--tagsIndiv" key={index}>
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default Tags