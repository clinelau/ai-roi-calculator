import astroImg from './assets/astro.png'

function AstroConnector() {
  return (
    <div className="astro-connector">
      <div className="astro-line" />
      <img src={astroImg} alt="Salesforce Astro" className="astro-img" />
      <div className="astro-line" />
    </div>
  )
}

export default AstroConnector
