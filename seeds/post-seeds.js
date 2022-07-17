const { Post } = require("../models");

const postdata = [
  {
    title: "James Webb Space Telescope - First Jupiter Images",
    post_url:
      "https://gizmodo.com/webb-telescope-jupiter-images-nasa-1849182469",
    user_id: 10,
  },
  {
    title: "New Apple Watch - Series 7",
    post_url: "https://www.apple.com/apple-watch-series-7/",
    user_id: 8,
  },
  {
    title: "RTX 3090 Ti - NVIDIA Video Card",
    post_url:
      "https://www.extremetech.com/gaming/337929-evgas-rtx-3090-ti-is-the-most-outlandish-gpu-ever-made",
    user_id: 1,
  },
  {
    title: "Be Careful With Your Laptop",
    post_url: "https://www.youtube.com/watch?v=2aOICtMyKTk",
    user_id: 4,
  },
  {
    title: "Swallowable Electronics Are The FUTURE!",
    post_url:
      "https://cen.acs.org/articles/95/i41/Swallowable-electronics-future-medical-devices.html",
    user_id: 7,
  },
  {
    title: "I knew video conferencing was terrible",
    post_url:
      "https://phys.org/news/2022-07-videoconferencing-apps-pandemic-fatigue-workers.html",
    user_id: 4,
  },
  {
    title: "Computers Make Now Art Now",
    post_url: "https://www.wired.com/story/when-ai-makes-art/",
    user_id: 1,
  },
  {
    title: "Homer's Internet Company - FUNNY LOLOLOL",
    post_url: "https://www.youtube.com/watch?v=yemjuMX_x5U",
    user_id: 1,
  },
  {
    title: "Best Graphics Cards Ranked",
    post_url: "https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html",
    user_id: 9,
  },
  {
    title: "A Vaccine To Dominate all Coronavirus Variants",
    post_url:
      "https://www.businessinsider.com/us-army-universal-vaccine-target-spfn-variants-pan-coronavirus-sars-2021-12",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
