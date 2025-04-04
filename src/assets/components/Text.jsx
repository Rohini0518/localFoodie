function Text({text="",onClick,className=""}) {
  return (
    <>
     <p className={className} onClick={onClick}>{text}</p>
    </>
  )
}

export default Text;