import "./App.css";
import Contact from "./Contact";
import Joke from "./Joke";
function App() {
  return (
    <div className="contacts">
      <Contact
        img="https://media.istockphoto.com/id/1308542628/photo/young-business-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=oQfuyDCgNm9IUlPP9humlj3R1HB22dDOH74GFgsiwZQ="
        name="Mrs. Pallavi"
        phone="1223045564"
        email="pallavi@gmail.com"
      />
      <Contact
        img="https://media.istockphoto.com/id/1288148699/photo/young-business-woman-in-office-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=K-GKLOIEwGJVrZRC4WVG4yD4Fthl8GuaumMh_iYzVRo="
        name="Mrs. Aditi"
        phone="9876464759"
        email="aditi@gmail.com"
      />
      <Contact
        img="https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?b=1&s=170667a&w=0&k=20&c=ywaPLXj8meNw8tmZ3rOju5nrtlmhMwrQnjpW4nlqy_s="
        name="Mr.Rishi"
        phone="898989898"
        email="rishi@gmail.com"
      />
      <Contact
        img="https://media.istockphoto.com/id/1171169099/photo/man-with-crossed-arms-isolated-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=W5AFEjtmFjyyIGF40oSTOm6E0rj7AjF_zIIF-0zdVxk="
        name="Mr.Rohit"
        phone="1223045564"
        email="rohit@gmail.com"
      />
      <Joke 
      setup = " I got my daughter a fridge for her birthday."
      punchline = "I can't wait to see her face light up when she opens it."
      />
      <Joke 
      setup = " How did the hacker escape the police?"
      punchline = "How did the hacker escape the police?"
      />
      <Joke 
      setup = " Why don't pirates travel on mountain roads?"
      punchline = "Scurvy."
      />
      <Joke 
      setup = "Why do bees stay in the hive in the winter?"
      punchline = "Swarm"
      />
      <Joke 
      setup = "Whats the best thing about switzerland"
      punchline = "I dont know, but the flas is a big plus"
      />
    </div>
  );
}

export default App;
