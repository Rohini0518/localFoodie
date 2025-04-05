function Image({className="w-full h-full",onClick,src=""}) {
  return (
   <img className={className} onClick={onClick} src={src} alt="image"/>
  )
}

export default Image
