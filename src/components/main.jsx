import '../styling/maincontent.css';

export default function MainDiv() {
  return (
    <div className="mymaincontent">
      <div className="overlay"></div>
      <div className="content">
        <h2 id="maintitle">Together, We Fight with Hope </h2>
        <p>
          Knowledge empowers. Awareness protects. Unity heals. Join us in raising awareness, 
          supporting those in the fight, and celebrating survivors who remind us that hope 
          is powerful medicine.
        </p>
        <button className="learnmore">Learn More</button>
      </div>
    </div>
  );
}
