import FilterButtons from "./FilterButtons"

const FilterRow = ({type, data, filterType, filterPrice}) => {
    return (
        <div>
            <p className="font-bold text-gray-700 mb-3">Filter {type}</p>
            <div className="flex justify-between flex-wrap gap-2">
                <FilterButtons type={type} data={data} filterType={filterType} filterPrice={filterPrice}/>
            </div>
        </div>
    )
}

export default FilterRow