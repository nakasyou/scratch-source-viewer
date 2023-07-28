export interface Props {
  label: string
}
export default (props: Props) => (<>
  <header>
    <div>
      <span>{props.label} | </span>
      <span>Scratch Source Viewer</span>
    </div>
  </header>
</>)
