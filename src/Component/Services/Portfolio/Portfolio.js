import React, { useState } from 'react';
import './Portfolio.css';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import {
  FaPalette, FaLaptopCode, FaFileUpload, FaMobileAlt, FaEnvelope, FaShareAlt, FaQuestionCircle, FaRegFileImage
} from 'react-icons/fa';

const Portfolio = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioHTML, setPortfolioHTML] = useState('');

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
  };

  const generatePortfolioHTML = async () => {
    let html = '';

    if (selectedTheme === 'theme1') {
      const response = await fetch('https://raw.githubusercontent.com/dineshsaste/Dinesh_Portfolio/master/index.html');
      html = await response.text();
    } else if (selectedTheme === 'theme2') {
      // Fetch HTML for other theme
    }
    
    html = html.replace('${name}', name);
    html = html.replace('${email}', email);

    setPortfolioHTML(html);
  };

  const downloadPortfolio = async () => {
    const zip = new JSZip();

    zip.file('index.html', portfolioHTML);

    if (selectedTheme === 'theme1') {
      const cssResponse = await fetch('https://raw.githubusercontent.com/dineshsaste/Dinesh_Portfolio/master/style.css');
      const cssContent = await cssResponse.text();
      zip.file('style.css', cssContent);
    } else if (selectedTheme === 'theme2') {
      // Fetch and include CSS for other theme
    }

    zip.file('README.txt', `
      Instructions to run your portfolio locally:
      1. Extract the zip file.
      2. Open index.html in a web browser.
      3. To deploy on GitHub, create a new repository and push the extracted files.
    `);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'portfolio.zip');
    });
  };

  return (
    <div className="portfolio-wrapper">
      <div className="header-container">
        <h1 className="header">Unleash Your Potential with Our Portfolio Wizardry</h1>
      </div>

      <div className="intro-container">
        <p className="intro-paragraph">
          TechSamarth Innovations is your trusted partner in crafting professional portfolios that elevate your brand and showcase your unique talents. With a focus on innovation and creativity, we specialize in delivering tailored solutions that resonate with your audience and leave a lasting impression. Our team of experts works tirelessly to ensure your portfolio stands out in today's competitive landscape, offering a seamless blend of captivating design and intuitive functionality. Whether you're an aspiring entrepreneur, seasoned professional, or creative freelancer, we're committed to empowering you with the tools and expertise needed to succeed. Partner with TechSamarth Innovations and unlock the full potential of your professional portfolio.
        </p>
        <div className="animated-meme-container">
          <img src="https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif" alt="Animated Meme" className="animated-meme" />
        </div>
      </div>

      <div className="divider"></div>

      <div className="services-container">
        <h2 className="services-header">Our Services</h2>
        <div className="card-container">
          <div className="card">
            <FaPalette className="feature-icon" />
            <h3 className="card-title">Custom Portfolio Design</h3>
            <p className="card-description">Offer personalized portfolio designs tailored to the client's profession and style preferences.</p>
          </div>
          <div className="card">
            <FaLaptopCode className="feature-icon" />
            <h3 className="card-title">Portfolio Development</h3>
            <p className="card-description">Develop and build the portfolio website from scratch or using customizable templates.</p>
          </div>
          <div className="card">
            <FaFileUpload className="feature-icon" />
            <h3 className="card-title">Content Upload</h3>
            <p className="card-description">Assist clients in uploading and organizing their portfolio content, including projects, case studies, and images.</p>
          </div>
          <div className="card">
            <FaMobileAlt className="feature-icon" />
            <h3 className="card-title">Responsive Design</h3>
            <p className="card-description">Ensure the portfolio website is optimized for all devices, providing a seamless viewing experience.</p>
          </div>
          <div className="card">
            <FaEnvelope className="feature-icon" />
            <h3 className="card-title">Contact Form Integration</h3>
            <p className="card-description">Include a contact form to enable potential clients or employers to reach out to the portfolio owner.</p>
          </div>
          <div className="card">
            <FaShareAlt className="feature-icon" />
            <h3 className="card-title">Social Media Integration</h3>
            <p className="card-description">Integrate social media links to allow visitors to easily connect with the portfolio owner on various platforms.</p>
          </div>
          <div className="card">
            <FaQuestionCircle className="feature-icon" />
            <h3 className="card-title">Training and Support</h3>
            <p className="card-description">Provide initial training and ongoing support to help clients manage and update their portfolios effectively.</p>
          </div>
        </div>
      </div>

      <div className="demo-portfolio-container">
        <h2 className="demo-portfolio-header">Demo Portfolio</h2>
        <div className="demo-portfolio-cards">
          <div className="demo-card">
            <FaRegFileImage className="demo-icon" />
            <p>Akanksha Mhetre</p>
            <button className="preview-button" onClick={() => window.open('https://akankshamhetre.github.io/Portfolio/', '_blank')}>Preview</button>
            <button className="create-button" onClick={() => handleThemeSelection('theme1')}>Create Portfolio</button>
          </div>
          <div className="demo-card">
            <FaRegFileImage className="demo-icon" />
            <p>Dinesh Saste</p>
            <button className="preview-button" onClick={() => window.open('https://techsamarthinnovations.github.io/Dinesh_Portfolio/', '_blank')}>Preview</button>
            <button className="create-button" onClick={() => handleThemeSelection('theme2')}>Create Portfolio</button>
          </div>
        </div>
      </div>

      {selectedTheme && (
        <div className="portfolio-generation-container">
          <h2 className="portfolio-generation-header">Generate Your Portfolio</h2>
          <div className="portfolio-form">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={generatePortfolioHTML}>Generate Portfolio</button>
          </div>
        </div>
      )}

      {portfolioHTML && (
        <div className="portfolio-preview-container">
          <h2 className="portfolio-preview-header">Portfolio Preview</h2>
          <div className="portfolio-preview" dangerouslySetInnerHTML={{ __html: portfolioHTML }}></div>
        </div>
      )}

      {portfolioHTML && (
        <div className="download-portfolio-container">
          <button onClick={downloadPortfolio}>Download Portfolio</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

