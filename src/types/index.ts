export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  points: number;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface ClothingItem {
  id: string;
  title: string;
  description: string;
  category: 'tops' | 'bottoms' | 'dresses' | 'outerwear' | 'shoes' | 'accessories';
  type: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  condition: 'new' | 'like-new' | 'good' | 'fair';
  tags: string[];
  images: string[];
  uploaderId: string;
  uploaderName: string;
  uploaderAvatar?: string;
  pointValue: number;
  status: 'pending' | 'approved' | 'rejected' | 'available' | 'swapped';
  createdAt: Date;
  approvedAt?: Date;
}

export interface SwapRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  itemId: string;
  itemTitle: string;
  offeredItemId?: string;
  offeredItemTitle?: string;
  type: 'direct' | 'points';
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  message?: string;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}
