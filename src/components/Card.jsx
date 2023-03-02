
import { cards } from "../assets/cards"

const Card = () => {
    const card = cards.map(({text,text2,img,id}) => (
        <div key={id} className="relative">
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                {/* Overlay */}
                <h3 className="font-bold max-sm:text-2xl sm:text-2xl md:text-[19px] lg:text-3xl px-2 pt-4">{text}</h3>
                <p className="px-2 max-sm:text-lg    sm:text-lg md:text-lg lg:text-2xl text-orange-500 font-semibold">{text2}</p>
                <a  href="/#" 
                    className="border rounded-xl px-5 py-1 bg-white text-black mx-2 absolute bottom-3 hover:bg-orange-500 duration-300 hover:border-orange-500 hover:text-white">
                    Order Now
                </a>    
            </div>
            <img src={img} className="rounded-xl w-full h-full object-cover" alt="food" />
        </div>
    ))

  return (
    card
  )
}

export default Card