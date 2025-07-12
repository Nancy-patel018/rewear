import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, User, Calendar, Tag, Package } from 'lucide-react';
import { mockClothingItems } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [swapType, setSwapType] = useState<'direct' | 'points'>('points');

  const item = mockClothingItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Item not found</h1>
        <Link to="/browse">
          <Button>Back to Browse</Button>
        </Link>
      </div>
    );
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'success';
      case 'like-new': return 'primary';
      case 'good': return 'warning';
      case 'fair': return 'secondary';
      default: return 'secondary';
    }
  };

  const handleSwapRequest = () => {
    // Mock swap request - in real app, this would be an API call
    setShowSwapModal(false);
    alert(`Swap request sent! The owner will be notified.`);
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link to="/browse" className="inline-flex items-center text-purple-600 hover:text-purple-700">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Browse
      </Link>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <img
              src={item.images[selectedImage]}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
          </Card>
          
          {item.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${item.title} ${index + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Item Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full font-bold">
                💎 {item.pointValue} points
              </div>
              <Badge variant={getConditionColor(item.condition)}>
                {item.condition}
              </Badge>
              <Badge variant="secondary">{item.size}</Badge>
              <Badge variant="primary">{item.category}</Badge>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          {/* Item Details */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Item Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{item.type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{item.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Listed:</span>
                <span className="font-medium">{item.createdAt.toLocaleDateString()}</span>
              </div>
            </div>
            
            {item.tags.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Owner Info */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Listed by</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.uploaderName}</p>
                <p className="text-sm text-gray-600">Community member since 2024</p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          {user && user.id !== item.uploaderId && (
            <div className="space-y-4">
              <Button
                onClick={() => {
                  setSwapType('points');
                  setShowSwapModal(true);
                }}
                className="w-full"
                size="lg"
                disabled={user.points < item.pointValue}
              >
                {user.points >= item.pointValue ? (
                  <>Redeem with Points (💎 {item.pointValue})</>
                ) : (
                  <>Not enough points (Need {item.pointValue - user.points} more)</>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  setSwapType('direct');
                  setShowSwapModal(true);
                }}
                className="w-full"
                size="lg"
              >
                Propose Direct Swap
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Swap Modal */}
      {showSwapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">
              {swapType === 'points' ? 'Redeem with Points' : 'Propose Direct Swap'}
            </h3>
            
            {swapType === 'points' ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  You're about to redeem this item for {item.pointValue} points.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-700">
                    Your current balance: 💎 {user?.points} points<br />
                    After redemption: 💎 {(user?.points || 0) - item.pointValue} points
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Propose a direct swap with one of your listed items.
                </p>
                <textarea
                  placeholder="Add a message to the owner..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            )}
            
            <div className="flex space-x-4 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowSwapModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSwapRequest}
                className="flex-1"
              >
                Send Request
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;