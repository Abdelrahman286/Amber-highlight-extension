export const getActionsBoxCoord = (
  x: number,
  y: number,
  width: number,
  height: number
): { x: number; y: number } => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let newX = x;
  let newY = y;

  // Prevent going out on the right
  if (newX + width > viewportWidth) {
    newX = viewportWidth - width - 30;
  }

  // Prevent going out on the bottom
  if (newY + height > viewportHeight) {
    newY = viewportHeight - height;
  }

  // Prevent negative (left / top overflow)
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;

  return { x: newX, y: newY };
};

export const getTriggersButtonsCoord = (
  x: number,
  y: number
): { x: number; y: number } => {
  const width = 70;
  const height = 30;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let newX = x;
  let newY = y;

  // Prevent going out on the right
  if (newX + width > viewportWidth) {
    newX = viewportWidth - width - 30;
  }

  // Prevent going out on the bottom
  if (newY + height > viewportHeight) {
    newY = viewportHeight - height;
  }

  // Prevent negative (left / top overflow)
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;

  return { x: newX, y: newY };
};
