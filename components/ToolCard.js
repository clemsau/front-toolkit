export default function ToolCard({key, name, description, url, tags}) {
    return (
        <div>
            <a href={url} target="_blank">
                <div className="tool-card s-padded-container row">
                    <div className="card-title-content">
                        <h2>{name}</h2>
                    </div>
                    <div className="card-decription-content">
                        <p>{description}</p>
                    </div>
                    <div className="card-tags-content">
                        <ul>
                        {tags.map(tag => (
                            <li key={tag.id} className="btn btn-light-blue">{tag}</li>
                        ))}
                        </ul>
                    </div>                
                </div>sdqxw
            </a>
        </div>
    )
}