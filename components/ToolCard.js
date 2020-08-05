export default function ToolCard({name, description, url, tags}) {
    return (
        <a href={url} target="_blank">
            <div className="tool-card s-padded-container">
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>
                {tags.map(tag => (
                    <li className="btn btn-light-blue">{tag}</li>
                ))}
                </ul>
            </div>
        </a>
    )
}