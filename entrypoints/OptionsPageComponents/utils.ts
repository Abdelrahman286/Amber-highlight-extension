// generate random UUID
export function generateUUID(): string {
  return crypto.randomUUID(); // available in modern browsers
}
