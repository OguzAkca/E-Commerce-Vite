"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Menu, X, Search, ShoppingCart, User, Heart, LogOut } from "lucide-react"
import NotificationBar from "./topSide"
import { useHistory } from "react-router-dom"
import { setUser, clearUser } from "../../store/actions" // We'll create these actions

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const user = useSelector((state) => state.client.user)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token && !user) {
      // If there's a token but no user in the state, fetch user data
      fetchUserData(token)
    }
  }, [user])

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("https://workintech-fe-ecommerce.onrender.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const userData = await response.json()
        dispatch(setUser(userData))
      } else {
        // If the token is invalid, clear it
        localStorage.removeItem("token")
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  const handleSignOut = () => {
    dispatch(clearUser()) // This will now clear both localStorage/sessionStorage and Redux state
    setIsMenuOpen(false) // Close the menu if it's open
    window.location.reload();
    history.push("/") // Redirect to home page
  }

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop", hasDropdown: true },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Pages", href: "/pages" },
  ]
  const shopCategories = [
    {
      title: "Kadın",
      items: ["Bags", "Belts", "Cosmetic", "Hats"],
    },
    {
      title: "Erkek",
      items: ["Bags", "Belts", "Cosmetic", "Hats"],
    },
  ]

  const slides = [{ url: "/resimler/ceket.jpg" }, { url: "/resimler/ceket2.jpg" }]

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    marginTop: "10px",
  }

  const getGravatarUrl = (email) => {
    const hash = btoa(email.toLowerCase().trim())
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`
  }

  return (
    <>
      {/* Notification Bar */}
      <div className="fixed top-0 left-0 w-full z-40">
        <NotificationBar />
      </div>

      {/* Main Header */}
      <header className="w-full bg-white shadow fixed top-[40px] left-0 z-50">
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-bold">Bandage</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.title} className="relative">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                    onMouseEnter={() => item.hasDropdown && setIsShopDropdownOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsShopDropdownOpen(false)}
                  >
                    {item.title}
                  </a>

                  {/* Shop Dropdown */}
                  {item.hasDropdown && isShopDropdownOpen && (
                    <div
                      className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-b-lg py-6 z-50"
                      onMouseEnter={() => setIsShopDropdownOpen(true)}
                      onMouseLeave={() => setIsShopDropdownOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-6 px-6">
                        {shopCategories.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <div
                              className=" rounded-lg bg-cover bg-center"
                              style={{ backgroundImage: `url(${category.image})` }}
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{category.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                            </div>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={getGravatarUrl(user.email) || "/placeholder.svg"}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{user.name}</span>
                  <button onClick={handleSignOut} className="text-sm text-red-600 hover:text-red-700">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center text-blue-600 text-sm">
                  <a href="/login" className="hover:text-blue-700">
                    Login
                  </a>
                  <span className="mx-2">/</span>
                  <a href="/register" className="hover:text-blue-700">
                    Register
                  </a>
                </div>
              )}
              <button className="focus:outline-none">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="flex items-center focus:outline-none">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="ml-1 text-xs">1</span>
              </button>
              <button className="flex items-center focus:outline-none">
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="ml-1 text-xs">1</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              {user ? (
                <img
                  src={getGravatarUrl(user.email) || "/placeholder.svg"}
                  alt={user.name}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <User className="w-6 h-6" />
              )}
              <Search className="w-6 h-6" />
              <ShoppingCart className="w-6 h-6" />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-4 py-2 bg-white shadow-lg">
              {menuItems.map((item) => (
                <a key={item.title} href={item.href} className="block py-2 text-gray-600 hover:text-gray-900">
                  {item.title}
                </a>
              ))}
              <div className="py-2 border-t mt-2">
                {user ? (
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={getGravatarUrl(user.email) || "/placeholder.svg"}
                        alt={user.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{user.name}</span>
                    </div>
                    <button onClick={handleSignOut} className="text-sm text-red-600 hover:text-red-700">
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <a href="/login" className="block py-2 text-blue-600">
                      Login
                    </a>
                    <a href="/register" className="block py-2 text-blue-600">
                      Register
                    </a>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
