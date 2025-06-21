import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import hospitalImage from '../assests/itm-hospital.jpg';
import vismImage from '../assests/vism-hospital.jpg';

const initialHospitals = [
  {
    name: 'ITM HOSPITAL & RESEARCH CENTRE, GWALIOR',
    image: hospitalImage,
    rating: '4.2',
    reviews: '140',
    description: 'Hospital in Gwalior, Madhya Pradesh',
    address: 'Nh-75, opp. Sithouli Railway Station, Sithouli, Gwalior, Madhya Pradesh 475001',
    phone: '09090191964',
    link: 'https://g.co/kgs/1AwiHD7',
    isITM: true,
  },
  {
    name: 'VISM HOSPITAL, GWALIOR',
    image: vismImage,
    rating: '4.5',
    reviews: '210',
    description: 'Multi-speciality Hospital in Gwalior',
    address: 'Near ABC Chowk, Lashkar, Gwalior, Madhya Pradesh 474001',
    phone: '07512345678',
    link: 'https://g.co/kgs/xyz123',
  },
  {
    name: 'Apollo Hospital',
    image: vismImage,
    rating: '4.5',
    reviews: '210',
    description: 'Multi-speciality Hospital in Gwalior',
    address: 'Near ABC Chowk, Lashkar, Gwalior, Madhya Pradesh 474001',
    phone: '07512345678',
    link: 'https://g.co/kgs/xyz123',
  },
];

const HospitalProfile = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [hospitals, setHospitals] = useState(initialHospitals);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [newHospital, setNewHospital] = useState({
    name: '',
    address: '',
    phone: '',
    description: '',
    rating: '',
    reviews: '',
    image: '',
    link: '',
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('Link copied to clipboard!');
    } catch {
      alert('Failed to copy link');
    }
  };

  const handleShare = (link) => {
    setShareLink(link);
    setIsShareOpen(true);
  };

  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const suggestions = hospitals
    .filter(
      (h) => h.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.trim()
    )
    .map((h) => h.name);

  // 👇 ITM Full Section
  const ITMHospitalSection = () => (
    <div className="bg-white w-full h-full">
      {/* 🔙 Back button to return */}
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-2xl font-semibold">ITM Hospital Full View</h1>
        <button
          onClick={() => setSelectedHospital(null)}
          className="text-sm px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Back
        </button>
      </div>

      {/* 🔝 Header + Nav */}
      <div className="bg-white border-b">
        <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-700">
          <div className="flex gap-6">
            <span className="cursor-pointer">Success Stories</span>
            <span className="cursor-pointer">Blogs</span>
            <span className="cursor-pointer">Gallery</span>
            <span className="cursor-pointer">TPA</span>
            <span className="cursor-pointer">Events</span>
            <span className="cursor-pointer">Government Panel</span>
          </div>
          <div className="text-blue-600">📞 +91 9090191963/64</div>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <img src={hospitalImage} alt="ITM Hospital Logo" className="h-12" />
          <div className="flex gap-6 text-sm font-medium">
            <span>About Us</span>
            <span>Facilities</span>
            <span>Departments</span>
            <span>Find Your Doctor's</span>
            <span>Packages</span>
            <span>Our City Clinics</span>
            <span>Center Of Excellence</span>
            <span>Partners</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">BOOK APPOINTMENT</button>
        </div>
      </div>

      {/* Hero section */}
      <div className="bg-orange-100 p-10 flex gap-10 items-center">
        <div className="space-y-4 max-w-xl">
          <p className="text-lg text-gray-700">
            Revitalize movement, alleviate pain, and enhance well-being with physiotherapy’s tailored exercises,
            manual therapy, and holistic approach to rehabilitation.
          </p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">LEARN MORE</button>
        </div>
        <img
          src="/itm-hero.png" // Replace with your actual file path or import
          alt="Doctor treating patient"
          className="h-64 rounded-lg shadow"
        />
      </div>
    </div>
  );

  if (selectedHospital?.isITM) return ITMHospitalSection();

  return (
    <div className="p-6 space-y-6 relative">
      {/* Header + Add Hospital */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/admin-dashboard')} className="text-gray-600 hover:text-black">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Hospital Profile</h1>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition"
        >
          + Add Hospital
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search hospital..."
          className="w-full border pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 bg-white border rounded shadow w-full text-sm">
            {suggestions.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  setSearchQuery(s);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hospital Cards */}
      {filteredHospitals.map((h, i) => (
        <HospitalCard key={i} {...h} onShare={handleShare} onClick={() => setSelectedHospital(h)} />
      ))}

      {/* Modals: Share + Add */}
      {/* ... your AnimatePresence modals stay same as above ... */}
      <AnimatePresence>
  {isShareOpen && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-80 p-4 rounded shadow-lg space-y-4 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <button onClick={() => setIsShareOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold">Share</h3>
        <div className="space-y-2">
          <a href={`https://facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600">📘 Facebook</a>
          <a href={`https://wa.me/?text=${shareLink}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-600">🟢 WhatsApp</a>
          <a href={`https://x.com/intent/tweet?url=${shareLink}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black">❌ X (Twitter)</a>
          <a href={`mailto:?body=${shareLink}`} className="flex items-center gap-2 text-gray-700">✉️ Email</a>
          <button onClick={handleCopy} className="text-sm text-blue-600 hover:underline">Click to copy link</button>
          <div className="text-xs text-gray-500">{shareLink}</div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {isAddOpen && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white w-[400px] max-w-full p-6 rounded-md shadow-lg space-y-4 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <button onClick={() => setIsAddOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Add New Hospital</h2>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setHospitals([...hospitals, newHospital]);
            setNewHospital({
              name: '',
              address: '',
              phone: '',
              description: '',
              rating: '',
              reviews: '',
              image: '',
              link: '',
            });
            setIsAddOpen(false);
          }}
        >
          <input type="text" required placeholder="Hospital Name" value={newHospital.name} onChange={(e) => setNewHospital({ ...newHospital, name: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          <input type="text" placeholder="Description" value={newHospital.description} onChange={(e) => setNewHospital({ ...newHospital, description: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          <input type="text" placeholder="Address" value={newHospital.address} onChange={(e) => setNewHospital({ ...newHospital, address: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          <input type="tel" placeholder="Phone" value={newHospital.phone} onChange={(e) => setNewHospital({ ...newHospital, phone: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          <div className="flex gap-2">
            <input type="text" placeholder="Rating" value={newHospital.rating} onChange={(e) => setNewHospital({ ...newHospital, rating: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
            <input type="text" placeholder="Reviews" value={newHospital.reviews} onChange={(e) => setNewHospital({ ...newHospital, reviews: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          </div>
          <input type="text" placeholder="Google Map Link" value={newHospital.link} onChange={(e) => setNewHospital({ ...newHospital, link: e.target.value })} className="w-full border px-3 py-2 rounded text-sm" />
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Add Hospital</button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

// 🧩 Hospital Card component
const HospitalCard = ({ name, image, rating, reviews, description, address, phone, link, onShare, onClick }) => (
  <div className="bg-white rounded shadow-md p-6 space-y-4 cursor-pointer" onClick={onClick}>
    <div className="flex items-start gap-4">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded border" />
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex items-center text-yellow-500 text-sm">
          ★★★★☆ <span className="text-black ml-2">({rating}) · {reviews} Google reviews</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {['Directions', 'Reviews', 'Save', 'Call'].map((label) => (
        <button key={label} className="border px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-100 transition">
          {label}
        </button>
      ))}
      <button onClick={(e) => { e.stopPropagation(); onShare(link); }} className="border px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-100 transition">
        Share
      </button>
    </div>
    <hr />
    <div className="text-sm space-y-2">
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a></p>
      <p><strong>Hours:</strong> <span className="text-green-600 font-medium">Open 24 hours</span></p>
    </div>
  </div>
);

export default HospitalProfile;
