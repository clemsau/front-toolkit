export default function ToolCard({name, description, url, tags}) {
    return (
        <div>
            <a href={url} target="_blank"><h1>{name}</h1></a>
            <p>{description}</p>
            <ul>
            {tags.map(tag => (
                <li>{tag}</li>
            ))}
            </ul>
        </div>
    )
}