import '../styling/model.css';

export default function Model() {
  return (
    <div className="model-container">
      <section className="model-text">
        <h2>💡 Surprising Fact</h2>
        <p>Around <span>1 in 100</span> breast cancer cases occurs in <b>men</b>.</p>
        <p>men also have breast tissue, which means they can develop breast cancer too. Unfortunately, because it’s so rare and less 
            talked about</p>
        <button className="model-btn">Explore More</button>
      </section>

      <section className="model-image">
        <img src="../src/pictures/mencancer.png" alt="Male Breast Cancer Awareness" />
      </section>
    </div>
  );
}
