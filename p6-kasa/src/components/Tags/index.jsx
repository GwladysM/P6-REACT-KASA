function Tags({ tags }) {
    return (
        <div className="logement__divers tagsGpe">
            {tags.map((tag, index) => (
                <div className="logement__divers--tagsIndiv" key={index}>
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default Tags