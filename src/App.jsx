import "./App.css";
import First from "./Components/FirstSection";
import Second from "./Components/SecondSection";
function App() {
  const dataArray = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400",
      venue: "Yaan Wellness Treat Done Forevener ",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      location: "Eklingi Udai..",
      type: "4 Start & Above",
      discription:
        "Welcome to Yaan Wellness Forever, where your dream wedding becomes an enchanting reality. Tucked away in a secluded oasis, this venue offers a serene escape from the hustle and bustle of everyday life. As you arrive, you're greeted by a winding pathway lined with fragrant jasmine bushes leading to the main event spac.The ceremony unfolds in a picturesque garden adorned with blooming roses and cascading vines, creating a romantic ambiance. Yaan Wellness Forever provides a variety of ceremony setups, from a quaint gazebo nestled among trees to an open-air platform overlooking a tranquil pond.Following the exchange of vows, guests are invited to mingle in the lush courtyard, sipping on signature cocktails crafted with fresh herbs from the venue's garden. As the sun sets, the reception area comes to life with soft candlelight and the gentle glow of string lights hanging from ancient oak trees.Inside the elegant reception hall, guests find their seats at beautifully decorated tables adorned with delicate lace runners and crystal vases filled with vibrant blooms. The air is filled with the aroma of gourmet cuisine prepared by the venue's renowned chefs, tantalizing the taste buds and ensuring a culinary experience to remember.A dedicated dance floor awaits, surrounded by floor-to-ceiling windows offering panoramic views of the surrounding natural beauty. Whether you're dancing under the stars or under the shimmering lights of the venue, Yaan Wellness Forever provides an unforgettable backdrop for your special day.",
      price: "58000",
    },
  ];
  return (
    <div className="main">
      <First item={dataArray} />

      <Second item={dataArray[0].discription} name={dataArray[0].venue} />
    </div>
  );
}

export default App;
