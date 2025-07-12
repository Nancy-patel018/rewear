import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Star, Shirt, Heart, Sparkles } from 'lucide-react';
import { mockClothingItems } from '../data/mockData';
import ClothingItemCard from '../components/ClothingItem/ClothingItemCard';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Landing: React.FC = () => {
  const featuredItems = mockClothingItems.filter(item => item.status === 'approved').slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
              <Shirt className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              ReWear
            </span>
            <br />
            <span className="text-gray-800">Community Clothing Exchange</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your wardrobe sustainably! Swap clothes with others or use points to get new-to-you items. 
            Join our community and give your clothes a second life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Swapping
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Items
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How ReWear Works</h2>
          <p className="text-lg text-gray-600">Two flexible ways to exchange clothing</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Recycle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Direct Swap</h3>
            <p className="text-gray-600 mb-4">
              Exchange your clothes directly with other users. Browse their items and propose a trade!
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">
                💫 Perfect for one-to-one exchanges
              </p>
            </div>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Point-Based Redemption</h3>
            <p className="text-gray-600 mb-4">
              Earn points by listing items and use them to get clothes without direct swaps.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-orange-700 font-medium">
                💎 Flexible system for everyone
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h2>
          <p className="text-lg text-gray-600">Discover amazing clothes from our community</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredItems.map((item) => (
            <ClothingItemCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/browse">
            <Button variant="outline" size="lg">
              View All Items
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Join Our Growing Community</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1,234</div>
              <div className="text-purple-100">Items Swapped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">567</div>
              <div className="text-purple-100">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-purple-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <Card className="p-12 max-w-2xl mx-auto">
          <Heart className="h-12 w-12 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who are already making a difference, one swap at a time.
          </p>
          <Link to="/signup">
            <Button size="lg">
              Join ReWear Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Landing;