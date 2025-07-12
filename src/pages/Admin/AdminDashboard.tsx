import React, { useState } from 'react';
import { Users, Package, AlertTriangle, CheckCircle, XCircle, Eye, Trash2 } from 'lucide-react';
import { mockClothingItems } from '../../data/mockData';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';

const AdminDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  
  const pendingItems = mockClothingItems.filter(item => item.status === 'pending');
  const approvedItems = mockClothingItems.filter(item => item.status === 'approved');
  const rejectedItems = mockClothingItems.filter(item => item.status === 'rejected');

  const handleApprove = (itemId: string) => {
    // Mock approval - in real app, this would be an API call
    alert(`Item ${itemId} approved!`);
  };

  const handleReject = (itemId: string) => {
    // Mock rejection - in real app, this would be an API call
    alert(`Item ${itemId} rejected!`);
  };

  const handleDelete = (itemId: string) => {
    // Mock deletion - in real app, this would be an API call
    if (confirm('Are you sure you want to delete this item?')) {
      alert(`Item ${itemId} deleted!`);
    }
  };

  const getItemsByTab = () => {
    switch (selectedTab) {
      case 'pending': return pendingItems;
      case 'approved': return approvedItems;
      case 'rejected': return rejectedItems;
      default: return pendingItems;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-red-100">Manage and moderate the ReWear community</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{mockClothingItems.length}</p>
            </div>
            <Package className="h-8 w-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900">{pendingItems.length}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Approved Today</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-500" />
          </div>
        </Card>
      </div>

      {/* Item Moderation */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Item Moderation</h2>
          
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'pending'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pending ({pendingItems.length})
            </button>
            <button
              onClick={() => setSelectedTab('approved')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'approved'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Approved ({approvedItems.length})
            </button>
            <button
              onClick={() => setSelectedTab('rejected')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'rejected'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Rejected ({rejectedItems.length})
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          {getItemsByTab().map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <Badge variant="secondary">{item.size}</Badge>
                        <Badge variant="primary">{item.condition}</Badge>
                        <span className="text-sm text-gray-500">💎 {item.pointValue} pts</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        By {item.uploaderName} • {item.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {selectedTab === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleApprove(item.id)}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleReject(item.id)}
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                      
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {getItemsByTab().length === 0 && (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No items in this category</p>
            </div>
          )}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">Vintage Denim Jacket</span> was approved
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <XCircle className="h-5 w-5 text-red-500" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">Inappropriate T-shirt</span> was rejected
              </p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Users className="h-5 w-5 text-blue-500" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">New user</span> joined the platform
              </p>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
