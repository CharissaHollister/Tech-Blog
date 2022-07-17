const { Comment } = require("../models");

const commentdata = [
  {
    comment_text:
      "Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball.",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text:
      "Homer is smart, he owns the company but on his taxes he's just an employee.",
    user_id: 6,
    post_id: 8,
  },
  {
    comment_text: "US Army is wrapping up early clinical trials on a vaccine",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text:
      "Gotta love his realistic expectations in regards to his position.",
    user_id: 3,
    post_id: 8,
  },

  {
    comment_text:
      "The jab could also help protect against other coronaviruses beyond COVID-19",
    user_id: 1,
    post_id: 10,
  },

  {
    comment_text: "RTX off: Fine per second RTX on: flames per second",
    user_id: 7,
    post_id: 4,
  },
  {
    comment_text:
      "The Sleep app doesn’t just track your sleep. It works with your iPhone to help you create a schedule and bedtime routine so you can meet your sleep goals.",
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: "self-assembling protein nanoparticle.",
    user_id: 6,
    post_id: 10,
  },
  {
    comment_text:
      "A desktop will probably not go like this... A laptop however, like what we see here, is more likely to cause a fire due to the onboard Lithium batteries.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "so the computer explodes all the time?",
    user_id: 5,
    post_id: 4,
  },

  {
    comment_text: "People watching this on laptop like: 😰",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text:
      "Notifications in the Heart Rate app will alert you to irregularities",
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: "Apple Watch is rated water resistant 50 meters",
    user_id: 8,
    post_id: 2,
  },
  {
    comment_text:
      "Pre-clinical results are promising and human results are coming soon, says the Army",
    user_id: 2,
    post_id: 10,
  },
  {
    comment_text:
      "Jupiter rotates once about every 10 hours (a Jovian day), but takes about 12 Earth years to complete one orbit of the Sun (a Jovian year).",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text:
      "this is a “hybrid” cooler, means it uses both air and liquid",
    user_id: 5,
    post_id: 3,
  },

  {
    comment_text: "That's what u get for trying to play gta v on it",
    user_id: 6,
    post_id: 4,
  },
  {
    comment_text: "Early results in primates suggest the shot could work",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text:
      "I like how Homer tries to look stern and intelligent in his reading glasses.",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text:
      "A friend of mine started a website, I imagined this is how it went.",
    user_id: 4,
    post_id: 8,
  },

  {
    comment_text:
      "The market for smart ingestible electronics will be worth almost $680 million by 2022",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Jupiter has more than 75 moons.",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text:
      "I'm not allowed to turn off my computer, since it needs to do updates and backups, so yeah.",
    user_id: 10,
    post_id: 4,
  },
  {
    comment_text: "They have the internet on computers now?",
    user_id: 10,
    post_id: 8,
  },
  {
    comment_text: "Nine spacecraft have visited Jupiter.",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text:
      "This ingestible battery, which relies on stomach acid to complete its circuit, offers a way to power devices that could monitor health within the gastrointestinal tract",
    user_id: 8,
    post_id: 5,
  },
  {
    comment_text: "So, note7 all over again?",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text:
      "Jupiter's Great Red Spot is a gigantic storm that’s about twice the size of Earth and has raged for over a century.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Increased use of videoconferencing apps during pandemic led to more fatigue among workers",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text:
      "many employees attended meetings virtually using technologies",
    user_id: 9,
    post_id: 6,
  },
  {
    comment_text: "There's a summary chart showing the relative performance",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Jupiter also has a large presence in pop culture, including many movies, TV shows, video games, and comics",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text:
      "Our GPU benchmarks hierarchy ranks all the current and previous generation graphics cards by performance",
    user_id: 2,
    post_id: 9,
  },
  {
    comment_text:
      "It's similar to a star, but it never got big enough to start burning.",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "It is the fitness partner that fits on your wrist!",
    user_id: 10,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
