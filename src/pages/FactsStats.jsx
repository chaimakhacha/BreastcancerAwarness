import "../styling/FactsStats.css";
export default function FactsStats() {
  return (
    <div className="modell-container">
      <h2>Facts & Stats</h2>
      <section className="facts-section">
        <div className="div1">
          <p>
            Breast cancer is the most common type of cancer <span> worldwide</span> and one of the leading causes of cancer-related deaths among women. <br/>According to the World Health Organization's 2024 reports, approximately 2.3 million new cases of breast cancer were recorded globally, resulting in around 670,000 deaths. Estimates from the International Agency for Research on Cancer for 2025 indicate that incidence rates continue to rise globally, with roughly 1 in 12 women being diagnosed with breast cancer during their lifetime. Projections also show that the number of new cases could reach about 3.2 million annually by 2050, with approximately 1.1 million deaths per year if current trends persist.<br/> Recent surveillance data show that breast cancer now accounts for about 12% of all registered cancer cases worldwide, maintaining its position as the most common and widespread type of cancer.
          </p>
        </div>
        <div className="div2">
              <img className="stats" src="../src/pictures/Screenshot 2025-10-26 132415.png" alt="Breast Cancer Stats" />
              <img className="stats" src="../src/pictures/Screenshot 2025-10-26 132455.png" alt="Breast Cancer Stats 2" />
        </div>
            <div className="div1">
          <p>
         <span> Statistics in Algeria</span><br/>
Analysis of recent statistics on breast cancer in Algeria provides an accurate picture of the disease and its prevalence. According to the 2024 data sheet issued by the Swedish Institute for Health Economics, breast cancer accounts for approximately 43% of all new cancer diagnoses among women and contributes to about 30% of female cancer-related deaths. A study conducted in the Eastern region – southern part of eastern Algeria – between 2014 and 2018 showed that the age-standardized incidence rate reached 65.1 cases per 100,000 women, with a projected 45% increase in new cases by 2025, equivalent to roughly 7,500 additional cases nationwide. Furthermore, a 2024 report indicated that 8,731 new cancer cases were recorded in Algiers province in 2021, compared to 7,615 cases in 2020, without specifying the exact proportion of breast cancer among these numbers.
         </p>
        </div>

      </section>
                </div>
        );
        }