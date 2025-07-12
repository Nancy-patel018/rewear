import { ClothingItem, SwapRequest } from '../types';

export const mockClothingItems: ClothingItem[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic blue denim jacket in excellent condition. Perfect for layering and adding a vintage touch to any outfit.',
    category: 'outerwear',
    type: 'jacket',
    size: 'M',
    condition: 'good',
    tags: ['vintage', 'denim', 'casual', 'blue'],
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: 'user-2',
    uploaderName: 'Sarah Johnson',
    pointValue: 45,
    status: 'approved',
    createdAt: new Date('2024-01-15'),
    approvedAt: new Date('2024-01-16'),
  },
  {
    id: '2',
    title: 'Floral Summer Dress',
    description: 'Beautiful floral print dress perfect for summer occasions. Lightweight and comfortable fabric.',
    category: 'dresses',
    type: 'midi dress',
    size: 'S',
    condition: 'like-new',
    tags: ['floral', 'summer', 'midi', 'feminine'],
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: 'user-3',
    uploaderName: 'Emma Wilson',
    pointValue: 55,
    status: 'approved',
    createdAt: new Date('2024-01-20'),
    approvedAt: new Date('2024-01-21'),
  },
  {
    id: '3',
    title: 'Black Leather Boots',
    description: 'Stylish black leather ankle boots. Great for both casual and formal occasions.',
    category: 'shoes',
    type: 'ankle boots',
    size: 'M',
    condition: 'good',
    tags: ['leather', 'black', 'boots', 'versatile'],
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: 'user-4',
    uploaderName: 'Mike Chen',
    pointValue: 65,
    status: 'approved',
    createdAt: new Date('2024-01-25'),
    approvedAt: new Date('2024-01-26'),
  },
  {
    id: '4',
    title: 'Cozy Knit Sweater',
    description: 'Warm and cozy knit sweater in cream color. Perfect for chilly days.',
    category: 'tops',
    type: 'sweater',
    size: 'L',
    condition: 'new',
    tags: ['knit', 'cozy', 'cream', 'winter'],
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    uploaderId: 'user-5',
    uploaderName: 'Lisa Park',
    pointValue: 40,
    status: 'pending',
    createdAt: new Date('2024-01-28'),
  },
];

export const mockSwapRequests: SwapRequest[] = [
  {
    id: '1',
    requesterId: 'user-1',
    requesterName: 'John Doe',
    itemId: '1',
    itemTitle: 'Vintage Denim Jacket',
    type: 'points',
    status: 'pending',
    message: 'I love this jacket! Would like to redeem it with points.',
    createdAt: new Date('2024-01-30'),
  },
  {
    id: '2',
    requesterId: 'user-1',
    requesterName: 'John Doe',
    itemId: '2',
    itemTitle: 'Floral Summer Dress',
    offeredItemId: '5',
    offeredItemTitle: 'Blue Cotton Shirt',
    type: 'direct',
    status: 'accepted',
    message: 'Would love to swap my blue shirt for this dress!',
    createdAt: new Date('2024-01-28'),
  },
];
