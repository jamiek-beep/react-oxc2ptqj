export default async function handler(req, res) {
  const q = req.query.q;

  const GOOGLE_API_KEY = "AIzaSyAW0uxQ4m9SuejT6Ur_Y0Qk6GlcHzLIrN4";
  const GOOGLE_CX = "90c479d0c427545b6";

  const url =
  `https://www.googleapis.com/customsearch/v1?` +
  `key=${GOOGLE_API_KEY}` +
  `&cx=${GOOGLE_CX}` +
  `&searchType=image` +
  `&q=${encodeURIComponent(q + " logo")}`;
console.log(url);

const response = await fetch(url);
console.log(url);



  
  const data = await response.json();

  res.status(200).json({
    images_results:
      data.items?.map((item) => ({
        thumbnail: item.image?.thumbnailLink || item.link,
      })) || [],
  });
}