export const bank = [
  "Your ears pop in airplanes because the air high above the surface of Earth is less dense than air near the surface, because air near the surface has all the air above it pushing down. Your inner ear has air trapped in it and as the atmospheric pressure changes, it causes pressure on your ear drum.",
  "In 1941 during the run-up to the American involvement in World War II, Salvador Dali, who would become the world's most famous Surrealist, held a fundraising party for displaced European artists in California's Hotel del Monte.",
  "The speed of light. Light travels at approximately 186,282 miles per second (299,792 km per second). Therefore, a light shining from the surface of Mars would take the following amount of time to reach Earth (or vice versa): Closest approach: 182 seconds, or just over 3 minutes.",
  "Since trees are different sizes, it would be difficult to say how much paper comes from one tree. according to one paper manufacturer, however, a cord of wood measuring 4 feet by 4 feet by 8 feet—or 128 cubic feet—produces nearly 90,000 sheets of bond-quality paper or 2,700 copies of a 35-page newspaper.",
  "According to legend, Ancient Rome was founded by the two brothers, and demi-gods, Romulus and Remus, on 21 April 753. The legend claims that, in an argument over who would rule the city (or, in another version, where the city would be located) Romulus killed Remus and named the city after himself.",
  "Iceland is closer to continental Europe than to mainland North America; thus, the island is generally included in Europe for historical, political, cultural, and practical reasons. Geologically the island includes parts of both continental plates.",
  "All you need to do is fill a bowl with cold water and place the egg inside. If it sinks to the bottom, it's good. If it sinks but stands on its point, it's good, but won't be good for much longer and should be used soon. If it floats, toss it.",
];

export const getRandomBlock = () =>
  bank[Math.floor(Math.random() * bank.length)].toLowerCase();
