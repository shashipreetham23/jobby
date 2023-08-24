import Header from '../Header'

import './index.css'

const notFoundImage = ''

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <div className="not-found-img-container">
        <img src={notFoundImage} alt="not found" className="not-found-img" />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
