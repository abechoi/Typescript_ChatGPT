import { relative } from 'path';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div style={{backgroundColor: '#C8E3E0'}}>
      <Navbar />
      {/* ... */}
        <div style={{
          overflow: 'hidden',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto'

        }}>
          <div style={{
            display: 'flex',
            margin: '0 auto',
            padding: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            }}>
            <img src={`/lapastel1.png`} alt="pastel"
              style={{
                borderRadius: '0%',
                height: '100vh',
                boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.4)',
            }}/>
            <div style={{position: 'absolute', width: '100%'}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{ fontSize: '40px'}}>based in</p>
                <h1 style={{
                  fontFamily: 'Imperial Script',
                  fontSize: '120px',
                }}>Los Angeles</h1>
              </div>
              <div style={{
                borderRadius: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#fff',
                display: 'flex',
                position: 'relative',
                fontSize: '100px',
                width: '800px',
                margin: '0 auto',
                marginTop: '200px',
                }}>
                  <img src={`/me.jpg`} alt="me" width="30%" height="30%"
                  style={{
                    borderRadius: '50%',
                    marginLeft: '-110px',
                  }}/>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    }}>
                    <p style={{ fontSize: '20px', margin: '20px'}}>
                      I specialize in using AI to generate art, web content, and code that is both visually stunning and functional. My goal is to push the boundaries of what is possible with technology and create unique, cutting-edge projects that stand out from the rest. Whether it's through my Etsy store, which features AI-generated art, or through my web development projects, I am always exploring new ways to use AI to bring my ideas to life. Please feel free to reach out to me if you are in need of my services!
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;