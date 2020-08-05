export default function ToolCard({name, description, url, tags}) {
    return (
        <div className="tool-card">
            <a href={url} target="_blank"><h1>{name}</h1>
            <p>{description}</p>
            <ul>
            {tags.map(tag => (
                <li>{tag}</li>
            ))}
            </ul>
            </a>
        </div>
    )
}