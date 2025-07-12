// Helper for point system
function calculatePoints(item) {
  // Example: assign points based on item condition/type
  let base = 10;
  if (item.condition === 'new') base += 5;
  if (item.type === 'premium') base += 10;
  return base;
}

module.exports = { calculatePoints };
