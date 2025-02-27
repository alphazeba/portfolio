import {Link} from 'react-router'
import logo from '/harverestWeb.svg'

export default function Home() {
    const renderName = () => {
      const w = 100;
      const r = 40;
      return <svg
        viewBox={`0 0 ${w} ${w}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          id="circlePath"
          d={`
            M ${w/2-r}, ${w/2}
            a ${r},${r} 0 1,1 ${r*2},0
            ${r},${r} 0 1,1 ${-r*2},0
          `}
        />
        <text fill="#ffb6c1">
          <textPath 
            href="#circlePath"
            textLength={Math.floor(Math.PI * 2 * r)}
            fontWeight="bold"
            fontSize="0.75em"
          >
            aron hommas
          </textPath>
          <textPath
            fontSize="0.5em"
            href="#circlePath"
            startOffset="47%"
          >
            backend software engineer
          </textPath>
        </text>
      </svg>
    
    }
  
    return <>
      <div>
        <Link to="/work" className='container logo'>
          <img src={logo} className="logo"/>
          <div className="nameBlock outlineText">
              {renderName()}
          </div>
        </Link>
      </div>
      <p className="read-the-docs">
        click to enter
      </p>
    </>
  }