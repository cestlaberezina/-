import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}





export default ((opts?: Options) => {
  const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
    <header class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
    </header>
    )
  }
  return children.length > 0 ? <header>{children}</header> : null
  Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`
  return Header 
}) satisfies QuartzComponentConstructor
