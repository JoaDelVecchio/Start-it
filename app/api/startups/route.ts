export const posts = [
  {
    _createdAt: "2015-12-11T10:00:00Z",
    views: "1500",
    founder: "Sam Altman",
    _id: 1,
    description: "OpenAI is an AI research company aiming to benefit humanity.",
    image: "https://www.asilodigital.com/content/images/2023/02/twitter-1.png",
    founderImage:
      "https://media.wired.com/photos/655cf58564de22446963f396/1:1/w_1498,h_1498,c_limit/Sam-Altman-OpenAI-Return-Business-1258197415.jpg",
    category: "Artificial Intelligence",
    title: "OpenAI",
    startupStory:
      "OpenAI was founded with the goal of ensuring artificial intelligence benefits humanity. It started as a research-focused organization but later expanded to build transformative AI products. Key milestones include GPT-3 and ChatGPT, which revolutionized natural language processing.",
    founderStory:
      "Sam Altman, a visionary entrepreneur, was the former president of Y Combinator before co-founding OpenAI. He has been a strong advocate for ethical AI development and has played a pivotal role in shaping the AI landscape.",
  },
  {
    _createdAt: "2002-03-14T10:00:00Z",
    views: "2500",
    founder: "Elon Musk",
    _id: 2,
    description: "SpaceX designs advanced rockets and spacecraft.",
    image:
      "https://www.greendrive-accessories.com/blog/wp-content/uploads/2024/09/SpaceX-Makes-History-with-Polaris-Dawn-1024x726.png",
    founderImage:
      "https://static01.nyt.com/images/2024/09/16/multimedia/16trump-shooting-musk-ztvp/16trump-shooting-musk-ztvp-mediumSquareAt3X.jpg",
    category: "Aerospace",
    title: "SpaceX",
    startupStory:
      "Founded in 2002, SpaceX aimed to reduce space transportation costs and enable the colonization of Mars. The company achieved historic milestones, such as the first privately funded spacecraft to reach orbit and the development of reusable rockets like the Falcon 9.",
    founderStory:
      "Elon Musk, an innovator and entrepreneur, founded SpaceX with a dream of making humanity a multi-planetary species. Known for his ambitious vision, he has transformed industries ranging from space travel to electric vehicles with Tesla.",
  },
  {
    _createdAt: "2010-03-01T10:00:00Z",
    views: "1800",
    founder: "Patrick Collison",
    _id: 3,
    description: "Stripe builds economic infrastructure for the internet.",
    image:
      "https://www.bobsguide.com/wp-content/uploads/2024/06/1510164528_150_social-mobile.jpg",
    founderImage:
      "https://imageio.forbes.com/specials-images/imageserve/619e651e6b47f0c29e025b72/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds",
    category: "Financial Services",
    title: "Stripe",
    startupStory:
      "Stripe was founded in 2010 to simplify online payments for businesses. It has grown to become a leading financial infrastructure provider, enabling millions of companies worldwide to process payments seamlessly.",
    founderStory:
      "Patrick Collison, an Irish entrepreneur, co-founded Stripe with his brother John. Together, they created one of the most innovative companies in the financial technology space, earning accolades for their customer-first approach.",
  },
  {
    _createdAt: "2008-08-11T10:00:00Z",
    views: "2200",
    founder: "Brian Chesky",
    _id: 4,
    description: "Airbnb is an online marketplace for lodging and activities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBheFWGH5E1B5B-vdhAOaN7e6HXesAzN-ukA&s",
    founderImage:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2016/10/140602_AirBnb_Brian_3837_SquareCrop.jpg",
    category: "Hospitality",
    title: "Airbnb",
    startupStory:
      "Airbnb was born out of necessity when Brian Chesky and his co-founders rented out air mattresses in their apartment to cover rent. The idea evolved into a global platform connecting travelers with unique stays worldwide.",
    founderStory:
      "Brian Chesky, a former industrial designer, co-founded Airbnb to revolutionize the way people travel. Under his leadership, Airbnb has become a symbol of the sharing economy, offering unique lodging experiences.",
  },
  {
    _createdAt: "2013-04-18T10:00:00Z",
    views: "1700",
    founder: "Vlad Tenev",
    _id: 5,
    description: "Robinhood offers commission-free trades via a mobile app.",
    image:
      "https://images.ctfassets.net/ilblxxee70tt/1MXqbgveTatTROdavAHPlR/a8f395b95d9b729f8f741fb686cd7272/Meta_Thumbnail_Icon.jpg",
    founderImage:
      "https://static01.nyt.com/images/2021/07/01/business/01db-robinhood/merlin_184480200_6257d3ce-7fa2-45f6-b4af-9c107c6bfdbb-mediumSquareAt3X.jpg",
    category: "Financial Services",
    title: "Robinhood",
    startupStory:
      "Robinhood was founded to democratize finance, offering commission-free trading for stocks and ETFs. It gained massive popularity among young investors for its user-friendly mobile app and innovative approach.",
    founderStory:
      "Vlad Tenev, a Bulgarian-American entrepreneur, co-founded Robinhood with the goal of making financial markets accessible to everyone. His vision reshaped retail trading and attracted millions of users worldwide.",
  },
];

export async function GET() {
  return Response.json(posts);
}
