// Disease knowledge
const knowledgeBase = {
  diabetes: {
    symptoms: "Frequent urination, excessive thirst, fatigue, blurred vision.",
    ayurveda: "In Ayurveda, diabetes is known as 'Madhumeha', caused by imbalance in Kapha dosha.",
    remedies: "Consume bitter foods like karela, neem, and fenugreek seeds.",
    diet: "Avoid sugar and refined carbs. Prefer whole grains and leafy vegetables."
  },

  headache: {
    symptoms: "Pain in head, sensitivity to light, stress.",
    ayurveda: "Often linked to Vata imbalance.",
    remedies: "Apply peppermint oil, practice meditation.",
    diet: "Stay hydrated, avoid excessive caffeine."
  }
};


// Suggestions data (for autocomplete)
const data = {
  general: ["headache", "fever", "cough", "stress", "fatigue"],
  remedy: ["acidity", "constipation", "cold", "insomnia"],
  disease: ["diabetes", "arthritis", "migraine"],
  lifestyle: ["morning routine","sleep schedule","yoga for stress","meditation habits","daily detox routine"]
}