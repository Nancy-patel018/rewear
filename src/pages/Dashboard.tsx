import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Package, ArrowRightLeft, Star, TrendingUp, Users, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockClothingItems, mockSwapRequests } from '../data/mockData';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';
import ClothingItemCard from '../components/ClothingItem/ClothingItemCard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const userItems = mockClothingItems.filter(item => item.uploaderId === user.id);
  const userSwaps = mockSwapRequests.filter(req => req.requesterId === user.id);
  const recentItems = mockClothingItems.filter(item => item.status === 'approved').slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
            <p className="text-purple-100">Ready to discover amazing clothes and make some swaps?</p>
          </div>
          <div className="text-right">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">💎 {user.points}</div>
              <div className="text-sm text-purple-100">Available Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/add-item">
          <Card hover className="p-6 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Plus className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">List New Item</h3>
            <p className="text-gray-600 text-sm">Upload clothes and earn points</p>
          </Card>
        </Link>

        <Link to="/browse">
          <Card hover className="p-6 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Package className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Browse Items</h3>
            <p className="text-gray-600 text-sm">Discover amazing clothes</p>
          </Card>
        </Link>

        <Card className="p-6 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <ArrowRightLeft className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Active Swaps</h3>
          <p className="text-gray-600 text-sm">{userSwaps.length} ongoing requests</p>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Items Listed</p>
              <p className="text-2xl font-bold text-gray-900">{userItems.length}</p>
            </div>
            <Package className="h-8 w-8 text-purple-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Swaps</p>
              <p className="text-2xl font-bold text-gray-900">{userSwaps.length}</p>
            </div>
            <ArrowRightLeft className="h-8 w-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Points Earned</p>
              <p className="text-2xl font-bold text-gray-900">{user.points}</p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Community Rank</p>
              <p className="text-2xl font-bold text-gray-900">#42</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* My Items */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">My Listed Items</h2>
            <Link to="/add-item">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Add Item
              </Button>
            </Link>
          </div>
          
          {userItems.length > 0 ? (
            <div className="space-y-4">
              {userItems.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category} • {item.size}</p>
                  </div>
                  <Badge variant={item.status === 'approved' ? 'success' : 'warning'}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No items listed yet</p>
              <Link to="/add-item">
                <Button className="mt-4">List Your First Item</Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Recent Swaps */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Swap Requests</h2>
          
          {userSwaps.length > 0 ? (
            <div className="space-y-4">
              {userSwaps.map((swap) => (
                <div key={swap.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{swap.itemTitle}</h3>
                    <Badge variant={swap.status === 'accepted' ? 'success' : 'warning'}>
                      {swap.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {swap.type === 'direct' ? 'Direct swap' : 'Points redemption'}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {swap.createdAt.toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <ArrowRightLeft className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No swap requests yet</p>
              <Link to="/browse">
                <Button className="mt-4">Browse Items</Button>
              </Link>
            </div>
          )}
        </Card>
      </div>

      {/* Recommended Items */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <Link to="/browse">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recentItems.map((item) => (
            <ClothingItemCard key={item.id} item={item} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;