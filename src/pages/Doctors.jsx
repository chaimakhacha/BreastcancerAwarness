import "../styling/Doctors.css";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('All');

  const screeningData = [
    {
      province: "Multiple Provinces",
      location: "Algiers, Constantine, Laghouat, Jijel, Maghnia",
      organization: "National Social Insurance Fund (CNAS)",
      program: "National free cancer screening program for insured women",
      details: "Comprehensive screening program covering multiple provinces across Algeria.",
      beneficiaries: "Insured women",
    },
    {
      province: "Laghouat",
      location: "Guélouma Clinic & Ahmed Chatta Medical Center",
      organization: "Local Health Directorate",
      program: "Free breast cancer screening campaign",
      details: "Free screening campaign benefiting over 100 women.",
      beneficiaries: "100+ women",
      source: "Esseha",
    },
    {
      province: "Tlemcen",
      location: "Various locations across Tlemcen",
      organization: "Pink October Campaign Committee",
      program: "Octobre Rose - Mobile screening program",
      details: "Free and mobile screening program organized at multiple locations for maximum accessibility.",
      beneficiaries: "Women in various communities",
    },
    {
      province: "Annaba",
      location: "Multiple locations in Annaba",
      organization: "ALISC Association",
      program: "Pink October Initiative",
      details: "Comprehensive program including free screening and educational activities for women over 40.",
      beneficiaries: "Women over 40 years",
      source: "Seybouse Times",
    },
    {
      province: "Tissemsilt",
      location: "Layoune, Mghlida, Bordj Bounaama, Bordj Emir Abdelkader",
      organization: "Al-Fajr Association & Health Directorate",
      program: "Early breast cancer screening campaign",
      details: "More than 600 screenings conducted across several municipalities.",
      beneficiaries: "600+ women",
    },
    {
      province: "Khenchela",
      location: "Mazal El-Kheir Club",
      organization: "EHS Belkacem Sahli Hospital",
      program: "Free awareness and early detection campaign",
      details: "Targeting women who had never been screened before for breast and cervical cancer.",
      beneficiaries: "Previously unscreened women",
    },
    {
      province: "Oran",
      location: "Mobile clinics across Oran",
      organization: "Algerian Red Crescent",
      program: "October screening caravan",
      details: "Two mobile clinics equipped for breast and cervical cancer screenings.",
      beneficiaries: "Women across Oran",
    },
    {
      province: "Setif",
      location: "EPSP Beni Aziz Clinic",
      organization: "Al-Wafa Association - El Eulma",
      program: "Beni Aziz screening campaign",
      details: "210 women screened on October 25, with free mammography for suspicious cases.",
      beneficiaries: "210 women",
    },
    {
      province: "Setif",
      location: "Province-wide mobile clinics",
      organization: "National Campaign Committee",
      program: "Pink October caravan",
      details: "Two mobile clinics equipped for breast cancer detection touring the province.",
      beneficiaries: "Women across Setif",
    },
    {
      province: "Setif",
      location: "University Center of Setif 2 (Mohamed El-Amin Dabbaghine)",
      organization: "Specialized medical team",
      program: "National early diagnosis caravan",
      details: "University-based screening with specialized doctors.",
      beneficiaries: "University community & public",
      source: "elwatan-dz.com",

    }
  ];

  const provinces = ['All', ...new Set(screeningData.map(item => item.province))];

  const filteredData = screeningData.filter(item => {
    const matchesSearch = 
      item.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.program.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvince = selectedProvince === 'All' || item.province === selectedProvince;
    
    return matchesSearch && matchesProvince;
  });

  return (
    <div className="screening-container">
      <section className="screening-header">
        <h2>Free Screening Centers in Algeria</h2>
        <p>Find <span>free breast cancer screening</span> locations across Algeria.</p>
        <p>Part of the <b>Octobre Rose</b> (Pink October) initiative to promote early detection.</p>
      </section>

      <section className="screening-filters">

        <div className="province-filter">
          <label>Filter by Province:</label>
          <select 
            value={selectedProvince} 
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="province-select"
          >
            {provinces.map((province, index) => (
              <option key={index} value={province}>{province}</option>
            ))}
          </select>
        </div>

        <div className="results-count">
          <span className="count-number">{filteredData.length}</span>
          <span className="count-text">screening centers found</span>
        </div>
      </section>

      <section className="screening-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="screening-card">
              <div className="card-icon">{item.icon}</div>
              
              <div className="card-header">
                <h3 className="card-title">{item.program}</h3>
                <span className="province-badge">
                  <LocationOnIcon fontSize="small" />
                  {item.province}
                </span>
              </div>

              <div className="card-info">
                <div className="info-item">
                  <LocalHospitalIcon className="info-icon" />
                  <div>
                    <span className="info-label">Organization:</span>
                    <span className="info-value">{item.organization}</span>
                  </div>
                </div>

                <div className="info-item">
                  <LocationOnIcon className="info-icon" />
                  <div>
                    <span className="info-label">Location:</span>
                    <span className="info-value">{item.location}</span>
                  </div>
                </div>

                {item.beneficiaries && (
                  <div className="info-item">
                    <PeopleIcon className="info-icon" />
                    <div>
                      <span className="info-label">Target Group:</span>
                      <span className="info-value">{item.beneficiaries}</span>
                    </div>
                  </div>
                )}
              </div>

              <p className="card-details">{item.details}</p>

              {item.source && (
                <div className="card-source">
                  <span>Source: {item.source}</span>
                </div>
              )}

              <div className="card-footer">
                <CalendarMonthIcon fontSize="small" />
                <span>October Campaign</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No screening centers found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      <section className="screening-info">
        <div className="info-banner">
          <h3>🌸 About Pink October in Algeria</h3>
          <p>
            The <strong>Octobre Rose</strong> (Pink October) campaign is a national initiative 
            across Algeria to promote breast cancer awareness and provide free screening services 
            to women. Multiple organizations, including CNAS, local health directorates, and 
            non-profit associations, collaborate to offer accessible healthcare services.
          </p>
          <p>
            <strong>Early detection saves lives!</strong> Take advantage of these free screening 
            opportunities available during October and beyond.
          </p>
        </div>
      </section>
    </div>
  );
}