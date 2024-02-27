import { CartState } from "../../context/Context";
import ArrowButton from "../arrowbutton";
import ProductCard from "./productCard";


const WishlistLayout = () => {
    const {
        state: { wishlist },
        dispatch,
      } = CartState();


  return (
    <div>
      <div className="md:px-10">
        <div>
          {wishlist.length > 0
          ? <h3 className="uppercase font-italiana tracking-wider text-2xl md:text-2xl">Your wishlist ({wishlist.length}) items</h3>
        :<div className="mt-10">
          <h3 className="uppercase font-italiana tracking-wider text-2xl"> Your wishlist is empty </h3>
          <a href="/products" className="uppercase font-italiana tracking-wider text-xl underline">Browse products</a>
          </div>}
        </div>
        <div className="flex flex-wrap gap-3 mt-10">
        {wishlist.map((prod) => (
            <ProductCard key={prod.id} prod={prod}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishlistLayout
