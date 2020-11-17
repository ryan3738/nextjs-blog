import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Hero(props) {
  return (
    <>
      <div id='welcome' className='welcome-container'>
        <div className='welcome-box'>
          <div className='welcome-inner-box'>
            {/* <!-- <div class="welcome-contents"> --> */}
            <p className={utilStyles.spacedText}>Est. | 2006</p>
            <h1 className='title'>FRASERS</h1>

            <img
              className='welcome-logo'
              src='images/frasers-logo.gif'
              alt='Frasers Gourmet Hideaway Logo'
            />

            {/* <!-- <h6>HOME OF EXQUISITE<br />TASTES AND SERVICE</h6> --> */}
            <br />
            <a
              href='https://www.google.com/maps/dir//Frasers+Gourmet+Hideaway+1191+SE+Dock+St+STE+101,+Oak+Harbor,+WA+98277'
              target='_blank'
              rel='noreferrer noopener'
            >
              1191 SE Dock St #101
              <br />
              Oak Harbor, WA 98277
            </a>
            <br />
            <br />
            <a href='tel:13602791231'>360-279-1231</a>
            <br />
            <br />
            <p>
              <strong> CALL FOR TAKEOUT</strong>
            </p>

            <h4 className='primary-color'>SEATING TIMES</h4>

            {/* <!-- <p> <strong>CLOSED</strong> <br>9/8/20 to 9/9/20</p><br> --> */}
            <p>
              <strong className='primary-color'>TUE - THUR</strong> <br />
              {/* <!-- <span style="white-space: nowrap;"> --> */}
              4:30 | 5:00 | 5:30 | 7:00 | 7:30
              {/* <!-- </span> --> */}
              <br />
              <br />
            </p>
            <p>
              <strong className='primary-color'>FRI - SAT</strong>
              <br />
              {/* <!-- <span style="white-space: nowrap;"> --> */}
              4:30 | 5:00 | 5:30 | 7:00 | 7:30 | 8:00
              {/* <!-- </span> --> */}
              <br />
              <br />
            </p>
            <p>
              {' '}
              <strong className='primary-color'>Sun - Mon</strong> | CLOSED
              <br />
            </p>
            {/* <!-- </div> --> */}
          </div>
        </div>
      </div>
      <style jsx>{`

        .primary-color{
          color : var(--primary-color);
        }
        .welcome-container {
          display: grid;
          justify-content: center;
          align-content: center;
          grid-template-columns: 2vw auto 2vw;
          grid-template-rows: 1fr 20fr 1fr;
          grid-template-areas:
            '. . .'
            '. w .'
            '. . .';
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: none;
          background-color: var(--background-color);
        }

        .welcome-box {
          width: minmax(240px, auto);
          padding: 10%;
          grid-area: w;
          background: var(--background-color);
          opacity: 0.97;
        }

        .welcome-inner-box {
          outline: thin solid var(--primary-color);
          padding: 10%;
          /*background: var(--background-color);*/
        }

        .welcome-logo {
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
        }

        .title {
          /* font-size: 3rem; */
          color: var(--primary-color);
          text-align: center;
          display: none;
        }
        @media (min-width: 460px) {
          .welcome-container {
            
        }
      `}</style>
    </>
  );
}

{
  /* background-image: url('images/calamari-blue-cheese-sauce.jpg'); */
}
