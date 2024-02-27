import { CartState } from "../../context/Context";
import ProductCard from "./productCard";


const WishlistLayout = () => {
    const {
        state: { wishlist },
        dispatch,
      } = CartState();


  return (
    <div>
      <div className="px-10">
        <div><h3>Your wishlist ({wishlist.length}) items</h3></div>
        <div className="flex flex-wrap gap-3">
        {wishlist.map((prod) => (
            <ProductCard key={prod.id} prod={prod}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishlistLayout
