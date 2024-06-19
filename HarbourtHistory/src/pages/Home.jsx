import Container from 'react-bootstrap/Container';

//Add picture and text to the front page

const Home = () => {
  return (
    <Container className='main-content-wrapper'>
      <h1 className="home-style">Welcome to Harbourt History!</h1>
      <p className="lead">
        This website is dedicated to the lineage of the Harbourt family.
      </p>
      <hr className="my-4" />
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more about me
      </a>
    </Container>
    
  );
};

export default Home;
