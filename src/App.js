import "./styles.css";
import React, { useState } from "react";

const foodData = {
  NorthKarnataka: [
    {
      name: "Jolad Rotti",
      description:
        "Ragi rotti  is prepared  using with ragi or finger millet flour."
    },
    {
      name: "Girmit",
      description:
        "A paste sort of prepared which is called gojju which contains onion, tomato, chillies and curry leaves if needed. This mixture is mixed with puffed rice and usually served with Mirchi baiji or some people even prefer to eat with curd."
    },
    {
      name: "Ennegayi",
      description:
        "The highlight of this dish is brinjal, but has many other flavours which compliment together very well. This is a favourite among many people and is preferably eaten along with roti."
    }
  ],

  SouthKarnataka: [
    {
      name: "Ragi ball(Ragi mudde)",
      description:
        "Ragi mudde, a storehouse of multi-nutrients, has only two ingredients, the ragi (finger millet) flour and water."
    },
    {
      name: "Benne Dosa (Butter dosa)",
      description:
        " It is prepared by addition of generous amount of butter while preparing the normal dose, and accompanied by coconut chutney."
    },
    {
      name: "Bisi bele bhath",
      description:
        "It is preparation involves the use of spicy masala, toor dal, rice, ghee and vegetables."
    }
  ],
  CostalKarnataka: [
    {
      name: "Neer Dosa",
      description:
        " A popular vegan and gluten-free crepe made with rice, coconut and doesn’t require fermentation."
    },
    {
      name: "Patrode",
      description:
        "A tasty, healthy and steamed appetiser made with colocasia leaves, rice, spices and jaggery."
    },

    {
      name: "Fish pulimunchi",
      description:
        "Fish pulimunchi is traditionally a hot and sour fish curry that originated from the Bunt community of Tulu Nadu."
    },

    {
      name: "Goli baje",
      description:
        "Goli baje is a fried snack item made by combining flour. curd, coconut, curry leaves, and chilies. These cute little fried balls look utterly appetizing and are best relished with coconut chutney. "
    }
  ]
};

export default function App() {
  var [selectedState, setselectedState] = useState("NorthKarnataka");

  function genreclickHandler(state) {
    setselectedState(state);
  }

  var selectedArray = Object.keys(foodData);

  return (
    <div className="App">
      <h1>Karnataka Food Recommender App</h1>
      <h2>ಕನ್ನಡ</h2>

      <h3>Find out some mouth watering delicacies from Karnataka</h3>
      <div style={{ padding: "2rem" }}>
        {selectedArray.map((state) => (
          <button onClick={() => genreclickHandler(state)} key={state}>
            {state}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center", padding: "30px" }}>
        <ul>
          {foodData[selectedState].map((food) => (
            <li key={food.name}>
              <div
                className="list-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}
              >
                {" "}
                <u> {food.name} </u>{" "}
              </div>

              <div className="list-text" style={{ fontSize: "1rem" }}>
                {food.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
