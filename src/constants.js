export const STATUSES = ["⚪", "✔️", "❌"];
export const STATUS_STRINGS = ["default", "active", "inverted"];

export const EVIDENCE_MAP = {
  emf: "EMF Level 5",
  fingerprints: "Fingerprints",
  freezing: "Freezing",
  orbs: "Ghost Orbs",
  writing: "Ghost Writing",
  box: "Spirit Box",
};

export const EVIDENCE = Object.entries(EVIDENCE_MAP).map(([key, name]) => ({
  key,
  name,
  status: STATUSES[0],
  statusString: STATUS_STRINGS[0],
}));

export const GHOSTS = [
  {
    name: "banshee",
    evidence: [
      EVIDENCE_MAP.emf,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.freezing,
    ],
    valid: true,
  },
  {
    name: "demon",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.box, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "jinn",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.orbs, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "mare",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "oni",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.box, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "phantom",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs],
    valid: true,
  },
  {
    name: "poltergeist",
    evidence: [EVIDENCE_MAP.orbs, EVIDENCE_MAP.fingerprints, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "revenant",
    evidence: [
      EVIDENCE_MAP.emf,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.writing,
    ],
    valid: true,
  },
  {
    name: "shade",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.orbs, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "spirit",
    evidence: [
      EVIDENCE_MAP.box,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.writing,
    ],
    valid: true,
  },
  {
    name: "wraith",
    evidence: [
      EVIDENCE_MAP.freezing,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.box,
    ],
    valid: true,
  },
  {
    name: "yurei",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs, EVIDENCE_MAP.writing],
    valid: true,
  },
];

