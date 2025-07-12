import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, User } from 'lucide-react';
import { ClothingItem } from '../../types';
import Card from '../UI/Card';
import Badge from '../UI/Badge';

interface ClothingItemCardProps {
  item: ClothingItem;
}

const ClothingItemCard: React.FC<ClothingItemCardProps> = ({ item }) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'success';
      case 'like-new': return 'primary';
      case 'good': return 'warning';
      case 'fair': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={getConditionColor(item.condition)}>
            {item.condition}
          </Badge>
        </div>
        <div className="absolute top-2 left-2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            💎 {item.pointValue} pts
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {item.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{item.size}</Badge>
            <Badge variant="primary">{item.category}</Badge>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{item.uploaderName}</span>
          </div>
          
          <Link
            to={`/item/${item.id}`}
            className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            <Eye className="h-4 w-4" />
            <span>View</span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ClothingItemCard;
