import React, { useState } from 'react';
import { Product } from '../data';
import { ShoppingBag, X, Trash2, Plus, Minus, Check, MapPin, Truck } from 'lucide-react';

interface CartItem {
  product: Product;
  shopName: string;
  quantity: number;
  selectedSize: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function CartModal({ isOpen, onClose, cartItems, setCartItems }: CartModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    address: '',
    paymentMethod: 'COD'
  });
  
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleUpdateQty = (productId: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemove = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Pricing calculations in PKR
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shippingFee = subtotal === 0 ? 0 : subtotal >= 5000 ? 0 : 250;
  const grandTotal = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your Bag is currently empty.");
      return;
    }
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please complete the Name, Phone and Pakistani Delivery Address to place the checkout order.");
      return;
    }

    // Generate random Pakistani order ID
    const randomId = "VP-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderComplete(true);
  };

  const handleCloseSuccessfulReceipt = () => {
    // clear cart after successful order checkout
    setCartItems([]);
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs flex items-center justify-end z-[100]">
      <div className="bg-white max-w-lg w-full h-full flex flex-col justify-between shadow-2xl relative overflow-hidden border-l border-stone-100 animate-slide-in">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="text-emerald-900 w-5 h-5" />
            <div>
              <h3 className="font-sans font-extrabold text-stone-900 text-sm uppercase">Shopping Bag</h3>
              <p className="text-[10px] text-stone-500 font-mono italic">Overall Pakistan Cash on Delivery</p>
            </div>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-400 hover:text-stone-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Successful Order Checkout receipt docket style */
          <div className="p-8 flex-1 overflow-y-auto space-y-6 text-center">
            <div className="inline-flex p-3 bg-emerald-100 text-emerald-900 rounded-full animate-bounce mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-black text-stone-900 text-base uppercase">Order Placed successfully!</h3>
              <p className="text-xs text-stone-500">Your dispatch request is being prepared at the standard brand hubs.</p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/50 p-5 rounded-2xl text-left text-xs space-y-3.5 max-w-sm mx-auto shadow-xs font-sans">
              <div className="flex justify-between font-mono font-bold text-stone-800 border-b pb-2">
                <span>RECEIPT:</span>
                <span className="text-emerald-900">{orderId}</span>
              </div>
              <div className="flex justify-between"><span className="text-stone-400">Customer representative:</span><strong>{formData.name}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">WhatsApp / Call No:</span><strong>{formData.phone}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Shipping destination:</span><strong className="truncate max-w-[170px]">{formData.address}, {formData.city}</strong></div>
              <div className="flex justify-between"><span className="text-stone-400">Payment type:</span><strong>Cash on Delivery (COD)</strong></div>
              <div className="flex justify-between border-t pt-2 font-mono font-extrabold text-emerald-950 text-sm">
                <span>GRAND TOTAL DUE:</span>
                <span>Rs. {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-stone-50 p-4 border border-stone-100 rounded-xl max-w-sm mx-auto text-xs text-stone-600 flex gap-2">
              <Truck className="w-4 h-4 text-emerald-800 mt-0.5 shrink-0" />
              <p className="text-left leading-tight">
                An confirmation SMS with tracking details from NCS / Leopards has been sent to your mobile. Please keep Rs. {grandTotal.toLocaleString()} cash ready upon delivery!
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleCloseSuccessfulReceipt}
                className="w-full max-w-xs bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold py-3.5 rounded-xl text-xs tracking-wider transition shadow-sm cursor-pointer"
              >
                Continue Exploring Brands
              </button>
            </div>
          </div>
        ) : (
          /* Normal Cart items review list */
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            
            {cartItems.length === 0 ? (
              <div className="py-24 text-center text-stone-400 space-y-4">
                <p className="text-4xl">🛍️</p>
                <div>
                  <h4 className="font-sans font-bold text-stone-700 text-sm">Your Fashion Bag is Empty</h4>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Browse our collection of 30+ ladies & gents casual, wedding, and formal wear to add stunning garments.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-[10px] text-stone-400 font-mono tracking-wider uppercase block">Garments Added ({cartItems.length})</span>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {cartItems.map(item => (
                    <div
                      key={item.product.id}
                      className="bg-stone-50/50 p-4 rounded-xl border border-stone-200/50 flex gap-4 items-center justify-between"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-stone-100 shrink-0 border border-stone-200"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold uppercase tracking-tight">
                          {item.shopName}
                        </span>
                        <h4 className="font-bold text-xs text-stone-900 truncate mt-1 leading-tight">{item.product.name}</h4>
                        <p className="font-mono text-emerald-800 text-[11px] font-bold mt-0.5">Rs. {item.product.price.toLocaleString()}</p>
                      </div>

                      {/* Qty Controls */}
                      <div className="flex items-center gap-2 border border-stone-200 bg-white rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => handleUpdateQty(item.product.id, -1)}
                          className="p-1 hover:bg-stone-100 rounded text-stone-600 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-stone-900 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQty(item.product.id, 1)}
                          className="p-1 hover:bg-stone-100 rounded text-stone-600 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="p-1 hover:bg-red-50 text-stone-400 hover:text-red-700 transition rounded shrink-0 cursor-pointer"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courier Delivery Options Form */}
            {cartItems.length > 0 && (
              <form onSubmit={handlePlaceOrder} className="pt-6 border-t border-stone-100 space-y-4">
                <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase block">COD Delivery Details</span>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 mb-1">Full Name</label>
                    <input
                      id="cart-customer-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                      placeholder="e.g. Ayesha Noor"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 mb-1">Phone (Call / SMS)</label>
                    <input
                      id="cart-customer-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <label className="block text-[10px] font-bold text-stone-500 mb-1">City</label>
                    <select
                      id="cart-customer-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                    >
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Peshawar</option>
                      <option>Quetta</option>
                      <option>Faisalabad</option>
                      <option>Sialkot</option>
                      <option>Rawalpindi</option>
                      <option>Multan</option>
                      <option>Gujranwala</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-stone-500 mb-1">Delivery Home address</label>
                    <input
                      id="cart-customer-address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-[11px]"
                      placeholder="Street, Phase or Block..."
                    />
                  </div>
                </div>

                {/* Pricing Slip summary */}
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 text-xs space-y-2 font-mono">
                  <div className="flex justify-between text-stone-500">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Shipping fee overall Pakistan</span>
                    <span>{shippingFee === 0 ? "FREE" : `Rs. ${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-emerald-950 text-sm border-t pt-2 mt-1">
                    <span>Grand Total</span>
                    <span>Rs. {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  id="checkout-order-btn"
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold py-3.5 rounded-xl text-xs tracking-wider shadow-sm transition"
                >
                  Confirm Cash on Delivery — Rs. {grandTotal.toLocaleString()}
                </button>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
