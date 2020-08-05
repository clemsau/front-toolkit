export default function ToolCard({name, description, url, tags}) {
    return (
        <div className="tool-card s-padded-container">
            <a href={url} target="_blank"><h1>{name}</h1>
            <p>{description}</p>
            <ul>
            {tags.map(tag => (
                <li className="button">{tag}</li>
            ))}
            </ul>
            </a>
        </div>
    )
}