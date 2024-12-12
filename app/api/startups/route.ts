const posts = [
  {
    _createdAt: "2015-12-11T10:00:00Z",
    views: "1500",
    author: "Sam Altman",
    _id: 1,
    description: "OpenAI is an AI research company aiming to benefit humanity.",
    image: "https://www.asilodigital.com/content/images/2023/02/twitter-1.png",
    founderImage:
      "https://media.wired.com/photos/655cf58564de22446963f396/1:1/w_1498,h_1498,c_limit/Sam-Altman-OpenAI-Return-Business-1258197415.jpg",
    category: "Artificial Intelligence",
    title: "OpenAI",
  },
  {
    _createdAt: "2002-03-14T10:00:00Z",
    views: "2500",
    author: "Elon Musk",
    _id: 2,
    description: "SpaceX designs advanced rockets and spacecraft.",
    image:
      "https://www.greendrive-accessories.com/blog/wp-content/uploads/2024/09/SpaceX-Makes-History-with-Polaris-Dawn-1024x726.png",
    founderImage:
      "https://static01.nyt.com/images/2024/09/16/multimedia/16trump-shooting-musk-ztvp/16trump-shooting-musk-ztvp-mediumSquareAt3X.jpg",
    category: "Aerospace",
    title: "SpaceX",
  },
  {
    _createdAt: "2010-03-01T10:00:00Z",
    views: "1800",
    author: "Patrick Collison",
    _id: 3,
    description: "Stripe builds economic infrastructure for the internet.",
    image:
      "https://www.bobsguide.com/wp-content/uploads/2024/06/1510164528_150_social-mobile.jpg",
    founderImage:
      "https://imageio.forbes.com/specials-images/imageserve/619e651e6b47f0c29e025b72/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds",
    category: "Financial Services",
    title: "Stripe",
  },
  {
    _createdAt: "2008-08-11T10:00:00Z",
    views: "2200",
    author: "Brian Chesky",
    _id: 4,
    description: "Airbnb is an online marketplace for lodging and activities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBheFWGH5E1B5B-vdhAOaN7e6HXesAzN-ukA&s",
    founderImage:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2016/10/140602_AirBnb_Brian_3837_SquareCrop.jpg",
    category: "Hospitality",
    title: "Airbnb",
  },
  {
    _createdAt: "2013-04-18T10:00:00Z",
    views: "1700",
    author: "Vlad Tenev",
    _id: 5,
    description: "Robinhood offers commission-free trades via a mobile app.",
    image:
      "https://images.ctfassets.net/ilblxxee70tt/1MXqbgveTatTROdavAHPlR/a8f395b95d9b729f8f741fb686cd7272/Meta_Thumbnail_Icon.jpg",
    founderImage:
      "https://static01.nyt.com/images/2021/07/01/business/01db-robinhood/merlin_184480200_6257d3ce-7fa2-45f6-b4af-9c107c6bfdbb-mediumSquareAt3X.jpg",
    category: "Financial Services",
    title: "Robinhood",
  },
];

export async function GET() {
  return Response.json(posts);
}
