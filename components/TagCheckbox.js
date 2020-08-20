export default function ToolCard({key, tag}) {
    return (
    <div key={key} name={tag} className="btn btn-light-blue" onClick={isTagActive(this)}>{tag}</div>
    )
}

export function isTagActive(tagButton) {
    console.log("test");
}