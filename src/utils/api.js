// Centralized API utility for frontend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export async function fetchItems() {
  const res = await fetch(`${API_BASE_URL}/items`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

export async function addItem(formData, token) {
  // formData should be a FormData instance
  const res = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      // Do not set Content-Type header; browser will set it for FormData
    },
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to add item');
  return res.json();
}

// Add more API functions as needed (auth, swaps, moderation, etc.)
