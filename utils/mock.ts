// Randomize and Fetch artworks mock images
export const randomMockMedia = (numberOfElement: Number) => {
  const arrayElements = Array.from(
    Array(numberOfElement),
    (_, index) => index + 1
  );
  return arrayElements[Math.floor(Math.random() * arrayElements.length)];
};
