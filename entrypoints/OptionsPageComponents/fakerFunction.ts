import { faker } from "@faker-js/faker";
import { User } from "./types";

export function generateFakeUsers(count: number): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    createdAt: String(Date.now()),
    age: faker.number.int({ min: 12, max: 80 }), // realistic age
  }));
}
