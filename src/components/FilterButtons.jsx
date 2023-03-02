

const FilterButtons = ({type, data, filterType, filterPrice}) => {

    const filteredFilters = data.filter(filter => filter.hasOwnProperty(type));

    let buttons = [];
    if (type === 'type') {
      buttons = filteredFilters.map((filter, index) => ( 
        <button onClick={()=> filterType(filter.type)}  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" key={index}>{filter.type}</button>
        
      ));
    } else if (type === 'price') {
      buttons = filteredFilters[0].price.map((price, index) => (
        <button onClick={()=> filterPrice(price)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" key={index}>{price}</button>
      ));
    }
  return (
    <>
    {buttons}
    </>
  )
}

export default FilterButtons