export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

function ScientistInfo({person, size=100}) {
  return (
      <section className="profile">
        <h2>person.name</h2>
        <img
            className="avatar"
            src={'https://i.imgur.com/' + person.imageId + '.jpg'}
            alt={person.name}
            width={size}
            height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.numAwards} </b>
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery_props() {
  return (
      <div>
        <ScientistInfo
            person={{ name: 'Woon sen', imageId: 'OKS67lh',
              profession: 'physicist and chemist',
              numAwards: 4,
              awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,'
                      + ' Matteucci Medal)',
              discovery: 'discovery'
            }}
            size={200} />
        <Avatar
            person={{ name: 'Ron Ayah', imageId: 'YfeOqp2'}}
            size={150} />
      </div>
  );
}
