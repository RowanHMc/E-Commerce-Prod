import { Routes,Route } from "react-router-dom";
import { AuthProvider } from "./contex/AuthContext";
import { CartProvider } from "./contex/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
    return(
        <>
        <AuthProvider>
            <CartProvider>
                <div className="min-h-screen bg-zinc-950 text-zinc-200"></div>
                <Navbar />
                <main>
                <Routes>
                    <Route path="/" element= {<Home/>} />
                    <Route path="/products" element= {<Products/>} />
                    <Route path="/products/:id" element= {<ProductDetails/>} />
                    <Route path="/cart" element= {<Cart/>} />
                    
                    <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
                    <Route path="/login" element= {<Login/>} />                                      
                </Routes>
                </main>
                
            </CartProvider>
        </AuthProvider>
       
        
        </>
    )
}
export default App;