import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Sparkles, Crop as Drop, ChevronLeft, ChevronRight, MapPin, ChevronDown, Mail, Phone, MapPinIcon, InstagramIcon } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedLocation, setExpandedLocation] = useState<number | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    rating: '5',
    message: ''
  });
  const slideInterval = useRef<number>();

  const flavors = [
    {
      name: "REAL BLUEBERRY",
      tagline: "Cool. Sweet. Bursting with Real Fruit.",
      description: "Dive into the bold, refreshing taste of ICE BUDDY's Blueberry Flavour – a drink that's as vibrant as it is satisfying. Crafted with real blueberry syrup and loaded with ice, each sip delivers a smooth, fruity burst that keeps you cool and craving more.",
      features: [
        "🍁 Proudly Canadian",
        "❤️ Made with Real Blueberry Fruit and Syrup",
        "❤️ Add a drink of your choice - Just Shake and Drink!",
        "❤️ 10% of All Proceeds Go to Charity"
      ],
      cta: "Whether you're chilling with friends or powering through your day, ICE BUDDY is the perfect pick-me-up.",
      image: "/images/can-blueberry.png",
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-100"
    },
    {
      name: "REAL STRAWBERRY",
      tagline: "Fresh. Sweet. Naturally Delicious.",
      description: "Experience the sweet sensation of ICE BUDDY's Strawberry Flavour – where real fruit meets refreshing ice. Made with premium strawberry syrup and perfectly chilled, it's a delightful burst of summer in every sip.",
      features: [
        "🍁 Proudly Canadian",
        "❤️ Made with Real Strawberry Fruit and Syrup",
        "❤️ Add a drink of your choice - Just Shake and Drink!",
        "❤️ 10% of All Proceeds Go to Charity"
      ],
      cta: "Perfect for sunny days or whenever you need a fruity pick-me-up.",
      image: "/images/can-strawberry.png",
      color: "from-rose-400 to-orange-400",
      accent: "text-rose-100"
    },
    {
      name: "REAL PINEAPPLE",
      tagline: "Tropical. Refreshing. Naturally Sweet.",
      description: "Transport yourself to paradise with ICE BUDDY's Pineapple Flavour – a tropical adventure in every cup. Infused with real pineapple syrup and premium ice, it's your passport to refreshment.",
      features: [
        "🍁 Proudly Canadian",
        "❤️ Made with Real Pineapple Fruit and Syrup",
        "❤️ Add a drink of your choice - Just Shake and Drink!",
        "❤️ 10% of All Proceeds Go to Charity"
      ],
      cta: "Your tropical escape is just a shake away.",
      image: "/images/can-pineapple.png",
      color: "from-yellow-400 to-orange-500",
      accent: "text-yellow-100"
    },
    {
      name: "REAL LEMON MINT",
      tagline: "Cool. Crisp. Naturally Refreshing.",
      description: "Discover the perfect balance of zesty lemon and cool mint with ICE BUDDY's Lemon Mint Flavour. A refreshing combination that awakens your senses and keeps you feeling fresh.",
      features: [
        "🍁 Proudly Canadian",
        "❤️ Made with Real Lemon, Mint and Lemon Syrup",
        "❤️ Add a drink of your choice - Just Shake and Drink!",
        "❤️ 10% of All Proceeds Go to Charity"
      ],
      cta: "Elevate your refreshment game with this perfect blend.",
      image: "/images/can-lemon-mint.png",
      color: "from-lime-400 to-emerald-500",
      accent: "text-lime-100"
    }
  ];

  const locations = [
    {
      name: "Ice Buddy HASTY MARKET",
      address: "103 Ontario St S",
      city: "Kitchener, ON N2G 1X5",
      hours: "Mon-Fri: 8:45AM - 12:00AM",
      image: "/images/location-downtown.png"
    },
    {
      name: "Ice Buddy AMIRI SUPERMARKET",
      address: "27 Scott St",
      city: "Kitchener, ON N2H 2P8",
      hours: "Mon-Sun: 9AM-9PM",
      image: "/images/location-yorkville.png"
    },
    {
      name: "MORE LOCATIONS COMING SOON",
      address: "",
      city: "",
      hours: "",
      image: "/images/location-liberty.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flavors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flavors.length) % flavors.length);
  };

  useEffect(() => {
    slideInterval.current = window.setInterval(nextSlide, 16000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLocation = (index: number) => {
    setExpandedLocation(expandedLocation === index ? null : index);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Feedback submitted:', feedbackForm);
    // Reset form
    setFeedbackForm({
      name: '',
      email: '',
      rating: '5',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 via-white to-orange-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Decorations */}
        <img 
          src="/images/can-blueberry.png"
          alt=""
          className="fruit-decoration w-32 h-32 left-[5%] top-[20%] animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="ice-cube left-[12%] top-[40%] animate-float"
          style={{ animationDelay: '1s', transform: 'rotateX(15deg) rotateY(-15deg)' }}
        />
        <img 
          src="/images/can-strawberry.png"
          alt=""
          className="fruit-decoration w-32 h-32 left-[8%] top-[60%] animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="ice-cube left-[15%] top-[80%] animate-float"
          style={{ animationDelay: '3s', transform: 'rotateX(-15deg) rotateY(-15deg)' }}
        />

        {/* Right Side Decorations */}
        <img 
          src="/images/can-pineapple.png"
          alt=""
          className="fruit-decoration w-32 h-32 right-[5%] top-[25%] animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div 
          className="ice-cube right-[12%] top-[45%] animate-float"
          style={{ animationDelay: '2.5s', transform: 'rotateX(15deg) rotateY(15deg)' }}
        />
        <img 
          src="/images/can-lemon-mint.png"
          alt=""
          className="fruit-decoration w-32 h-32 right-[8%] top-[65%] animate-float"
          style={{ animationDelay: '3.5s' }}
        />
        <div 
          className="ice-cube right-[15%] top-[85%] animate-float"
          style={{ animationDelay: '4s', transform: 'rotateX(-15deg) rotateY(15deg)' }}
        />

        {/* Water Splash Effects */}
        <div className="absolute -left-20 top-1/3 w-48 h-48 bg-cyan-300/30 rounded-full blur-xl animate-splash" />
        <div className="absolute -right-20 top-2/3 w-48 h-48 bg-cyan-300/30 rounded-full blur-xl animate-splash" style={{ animationDelay: '2s' }} />
        <div className="absolute -left-20 top-2/3 w-48 h-48 bg-blue-300/30 rounded-full blur-xl animate-splash" style={{ animationDelay: '3s' }} />
        <div className="absolute -right-20 top-1/3 w-48 h-48 bg-blue-300/30 rounded-full blur-xl animate-splash" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <img 
              src="/images/logo.png" 
              alt="Ice Buddy Logo"
              className="h-16"
            />
            <div className="flex gap-8 text-white text-lg font-semibold">
              <button 
                onClick={() => scrollToSection('locations')} 
                className="hover:text-cyan-200 transition-colors"
              >
                Locations
              </button>
              <button 
                onClick={() => scrollToSection('feedback')}
                className="hover:text-cyan-200 transition-colors"
              >
                Feedback Form
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-cyan-200 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>

        {/* Carousel */}
        <div className="relative flex-1">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${flavor.color}`}>
                <div className="h-full max-w-7xl mx-auto px-4 py-12 flex items-center justify-between">
                  <div className="w-1/2 text-white">
                    <h2 className="text-5xl font-bold mb-4">{flavor.name}</h2>
                    <p className="text-2xl mb-8 text-white/90">{flavor.tagline}</p>
                    <p className="text-lg mb-8 text-white/80">{flavor.description}</p>
                    <div className="space-y-3 mb-8">
                      {flavor.features.map((feature, i) => (
                        <p key={i} className="text-lg">{feature}</p>
                      ))}
                    </div>
                    <p className="text-lg mb-8 text-white/90">{flavor.cta}</p>
                    <button 
                      className="bg-white text-cyan-600 px-12 py-4 rounded-full text-xl font-semibold hover:bg-cyan-50 transition-colors"
                    >
                      BUY NOW
                    </button>
                  </div>
                  <div className="w-1/2 relative">
                    <img 
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-auto max-h-[600px] object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Products Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-cyan-900">
            Shake and Drink
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {flavors.map((flavor, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${flavor.color} rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
                  <div className="h-72 overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={flavor.image} 
                      alt={flavor.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-900 mb-3">{flavor.name}</h3>
                  <p className="text-cyan-700 mb-4">{flavor.description}</p>
                  <p className="flex items-center gap-2 text-cyan-600 font-medium">
                    <Drop className="w-4 h-4" />
                    Perfect Mix
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-orange-400 to-yellow-300">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">The Ice Buddy Experience</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Premium Ice</h3>
              <p className="text-white/90">Crystal clear, perfectly shaped ice that keeps your drink chilled longer</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Real Fruit</h3>
              <p className="text-white/90">Fresh fruit chunks and natural syrups for authentic flavor</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Perfect Mix </h3>
              <p className="text-white/90">Enhance your favorite drinks with fruity excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-cyan-900">
            Where To Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Locations List */}
            <div className="space-y-8">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: expandedLocation === index ? '800px' : '120px'
                  }}
                >
                  <button 
                    onClick={() => toggleLocation(index)}
                    className="w-full text-left p-6 hover:bg-orange-50/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-900 mb-2">{location.name}</h3>
                        <p className="text-gray-600">{location.address}</p>
                        <p className="text-gray-600">{location.city}</p>
                        <p className="text-gray-500 mt-2 text-sm">{location.hours}</p>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${
                          expandedLocation === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  <div 
                    className="transition-all duration-300"
                    style={{
                      opacity: expandedLocation === index ? 1 : 0,
                      visibility: expandedLocation === index ? 'visible' : 'hidden'
                    }}
                  >
                    <div className="h-64 w-full">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="relative w-full h-full min-h-[500px] map-background">
                {/* Map Grid */}
                <div className="absolute inset-0 map-grid opacity-30" />
                
                {/* Stylized Roads */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-white/40 transform -translate-y-1/2 rounded-full shadow-lg" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white/40 transform -translate-x-1/2 rounded-full shadow-lg" />
                </div>

                {/* Enhanced Location Markers */}
                {locations.map((_, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${20 + (index * 30)}%`,
                      top: `${30 + (index * 20)}%`,
                    }}
                  >
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 bg-orange-400/30 rounded-full animate-pulse-ring" style={{
                      width: '50px',
                      height: '50px',
                      left: '-15px',
                      top: '-15px'
                    }} />
                    
                    {/* Pin */}
                    <div className="relative">
                      <div className="absolute -top-8 -left-3 bg-gradient-to-br from-orange-400 to-yellow-300 p-2 rounded-full shadow-lg transform-gpu hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Location Number */}
                      <div className="absolute -top-10 -right-6 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-orange-600">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 text-white/60 text-sm font-medium">
                  Ice Buddy Locations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section id="feedback" className="py-24 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-900">
            Share Your Experience
          </h2>
          <form onSubmit={handleFeedbackSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select
                  id="rating"
                  value={feedbackForm.rating}
                  onChange={(e) => setFeedbackForm({...feedbackForm, rating: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold py-4 rounded-xl hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-[1.02]"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-yellow-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-cyan-900">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:transform hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-cyan-900 mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:clearhumansolutions@gmail.com" className="text-orange-600 hover:text-orange-700 font-medium">
                clearhumansolutions@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:transform hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-cyan-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri, 9AM-6PM EST</p>
              <a href="tel:+1-888-ICE-BUDDY" className="text-yellow-600 hover:text-yellow-700 font-medium">
                519-404-0186
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:transform hover:-translate-y-2 transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <InstagramIcon className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-cyan-900 mb-4">Follow Our Journey</h3>
              <p className="text-gray-600 mb-4"></p>
              <address className="text-cyan-600 not-italic">
                <br />
                <a href="https://www.instagram.com/chshelps/">@chshelps</a>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/images/logo.png" 
            alt="Ice Buddy Logo" 
            className="h-16 mx-auto mb-6"
          />
          <p className="text-white/90">© 2025 Ice Buddy. All rights reserved.</p>
          <p className="mt-3 text-white/80">Proudly Made in Canada 🍁</p>
        </div>
      </footer>
    </div>
  );
}

export default App;