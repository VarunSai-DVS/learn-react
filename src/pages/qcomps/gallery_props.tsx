import {ScientistProps} from "@/types/scientist";

function Profile({scientist, size=70}: ScientistProps) {
  return (
      <section className= "profile">
        <h2>{scientist.name}</h2>
        <img
            className="avatar"
            src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
            alt={scientist.name}
            width={size}
            height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.noOfAwards} </b>
            {scientist.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return(
      <div>
          <Profile scientist={{name: "Maria Skłodowska-Curie", imageId: "szV5sdGs", profession: "physicist and chemist",
              noOfAwards: 4, awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)", discovery: "polonium (element)"}}
                   size={70}
          />
          <Profile scientist={{name: "Katsuko Saruhashi", imageId: "YfeOqp2s", profession: "geochemist",
              noOfAwards: 2, awards: "(Miyake Prize for geochemistry, Tanaka Prize)", discovery: "a method for measuring carbon dioxide in seawater"}}
                   size={70}
          />
      </div>
  );
}
