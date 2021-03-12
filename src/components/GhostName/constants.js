export const GHOST_NAMES = {
  male: [
    "Charles",
    "Christopher",
    "Daniel",
    "David",
    "Donald",
    "George",
    "James",
    "John",
    "Joseph",
    "Kenneth",
    "Mark",
    "Michael",
    "Paul",
    "Richard",
    "Robert",
    "Steven",
    "Thomas",
    "William",
  ],
  female: [
    "Barbara",
    "Betty",
    "Carol",
    "Donna",
    "Dorothy",
    "Elizabeth",
    "Helen",
    "Jennifer",
    "Karen",
    "Linda",
    "Lisa",
    "Margaret",
    "Maria",
    "Mary",
    "Nancy",
    "Patricia",
    "Ruth",
    "Sandra",
    "Susan",
  ],
  surname: [
    "Anderson",
    "Brown",
    "Clark",
    "Davis",
    "Garcia",
    "Harris",
    "Jackson",
    "Johnson",
    "Jones",
    "Martin",
    "Martinez",
    "Miller",
    "Moore",
    "Robinson",
    "Smith",
    "Taylor",
    "Thomas",
    "Thompson",
    "Williams",
    "Wilson",
    "White",
  ],
};

export const FIRST_NAMES = [...GHOST_NAMES.male, ...GHOST_NAMES.female];
export const FIRST_NAME_FIRST_LETTERS = [
  ...new Set(FIRST_NAMES.map((name) => name.slice(0, 1))),
].sort();
export const SURNAME_FIRST_LETTERS = [
  ...new Set(GHOST_NAMES.surname.map((name) => name.slice(0, 1))),
].sort();
