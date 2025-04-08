import searchIcon from '../assets/search-icon.png';
function Input() {
  return (
       <div className="flex items-center p-1 border-2 rounded-md bg-gray-100 border-orange-500 mx-auto w-1/2 h-7 max-w-xs">
      <img src={searchIcon} alt="Search" className="w-4 h-4 mr-2" />
      <input
        type="text"
        placeholder="Search here....."
        className="bg-transparent focus:outline-none w-full"
      />
    </div>  
    
  )
}

export default Input
