
import React from 'react';
import { Clock, Star, MapPin, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DoctorCardProps {
  name: string;
  specialty: string;
  location: string;
  distance: string;
  rating: number;
  reviewCount: number;
  image: string;
  status: 'available' | 'busy' | 'offline';
  queueLength?: number;
  nextAvailable?: string;
  phoneNumber?: string;
  onBook?: () => void;
  onViewProfile?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  location,
  distance,
  rating,
  reviewCount,
  image,
  status,
  queueLength,
  nextAvailable,
  phoneNumber,
  onBook,
  onViewProfile
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-100 hover:bg-green-200 text-green-800 border-0">Available Now</Badge>;
      case 'busy':
        return <Badge className="bg-amber-100 hover:bg-amber-200 text-amber-800 border-0">{`Queue: ${queueLength}`}</Badge>;
      case 'offline':
        return <Badge className="bg-red-100 hover:bg-red-200 text-red-800 border-0">{nextAvailable ? `Next at ${nextAvailable}` : 'Offline'}</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden bg-gray-200">
            <img
              src={image}
              alt={`Dr. ${name}`}
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/150?text=' + name.charAt(0);
              }}
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-fikar-dark">{`Dr. ${name}`}</h3>
              {getStatusBadge()}
            </div>
            <p className="text-sm text-gray-600">{specialty}</p>
            <div className="mt-2 flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{rating}</span>
              <span className="ml-1 text-sm text-gray-400">({reviewCount} reviews)</span>
            </div>
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-fikar-gray mr-1" />
              <span>{location}</span>
              <span className="mx-2">•</span>
              <span>{distance}</span>
            </div>
            {phoneNumber && (
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Phone className="h-4 w-4 text-fikar-gray mr-1" />
                <span>{phoneNumber}</span>
              </div>
            )}
            
            {status === 'busy' && (
              <div className="mt-3 flex items-center">
                <Clock className="h-4 w-4 text-fikar-primary" />
                <span className="ml-1 text-sm text-fikar-primary font-medium">Estimated wait: ~{queueLength && queueLength * 15} mins</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <Button 
            onClick={onBook} 
            disabled={status === 'offline'}
            className={status === 'offline' ? 'bg-gray-300 cursor-not-allowed' : 'bg-fikar-primary hover:bg-fikar-secondary'}
            size="sm"
          >
            {status === 'available' ? 'Book Now' : status === 'busy' ? 'Join Queue' : 'Not Available'}
          </Button>
          <Button onClick={onViewProfile} variant="outline" size="sm" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
