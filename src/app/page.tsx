import Footer from "@/components/footer"
import Featured from "@/components/landing/featured"
import Newsletter from "@/components/landing/newsletter"
import Hero from "@/components/landing/hero"
import Navbar from "@/components/landing/navbar"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <Hero/>
        <Featured
          product={[
            { name: "Espresso Blend", price: 14.99 },
            { name: "Colombian Supremo", price: 16.99 },
            { name: "Ethiopian Yirgacheffe", price: 18.99 },
            { name: "French Roast", price: 15.99 },
        ]}
        />
        <Newsletter/>
      </main>
      <Footer/>
    </div>
  )
}