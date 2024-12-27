
export const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
        Togglebutton
    </button>
  )
}
