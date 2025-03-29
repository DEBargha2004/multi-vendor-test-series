export const testDifficulty = [
  {
    value: "easy",
    label: "Easy",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "hard",
    label: "Hard",
  },
];

export const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "hi",
    label: "Hindi",
  },
  {
    value: "bn",
    label: "Bengali",
  },
];

export const categories = [
  {
    value: "math",
    label: "Mathematics",
  },
  {
    value: "physics",
    label: "Physics",
  },
  {
    value: "chemistry",
    label: "Chemistry",
  },
  {
    value: "biology",
    label: "Biology",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "geography",
    label: "Geography",
  },
  {
    value: "politics",
    label: "Politics",
  },
  {
    value: "economics",
    label: "Economics",
  },
  {
    value: "sociology",
    label: "Sociology",
  },
  {
    value: "psychology",
    label: "Psychology",
  },
  {
    value: "philosophy",
    label: "Philosophy",
  },
  {
    value: "literature",
    label: "Literature",
  },
  {
    value: "art",
    label: "Art",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "medicine",
    label: "Medicine",
  },
];

export const visibilityOptions = [
  {
    value: "public",
    label: "Public",
  },
  {
    value: "private",
    label: "Private",
  },
  {
    value: "anyone_with_link",
    label: "Anyone with link",
  },
];

export const checkingStrategies = [
  { value: "strict", label: "Strict" },
  { value: "partial", label: "Partial" },
];

export const getLanguage = (lang: string) => {
  return languages.find((l) => l.value === lang);
};

export const getDifficulty = (diff: string) => {
  return testDifficulty.find((d) => d.value === diff);
};

export const getCategory = (cat: string) => {
  return categories.find((c) => c.value === cat);
};

export const getVisibility = (vis: string) => {
  return visibilityOptions.find((v) => v.value === vis);
};

export const getCheckingStrategy = (val: string) => {
  return checkingStrategies.find((cs) => cs.value === val);
};
