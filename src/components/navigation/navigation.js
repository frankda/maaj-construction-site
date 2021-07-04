import React, {useState, useEffect} from 'react';
import './navigation.scss';

const Navigation = (props) => {
  const [currentScrollPosState, setCurrentScrollPosState] = useState(0);
  const [currentInnerWidthState, setCurrentInnerWidthState] = useState(0);
  const [isSidebarActiveState, setIsSidebarActiveState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavBarTriggeredState, setIsNavBarTriggeredState] = useState(false);
  const [isNavBarHiddenState, setIsNavBarHiddenState] = useState(false);
  const [previousScrollPosState, setPreviousScrollPosState] = useState(0);

  const MOBILE_THRESHOLD = 1070;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    handleScroll();
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentInnerWidthState > MOBILE_THRESHOLD) {
      setIsSidebarActiveState(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [currentInnerWidthState]);

  useEffect(() => {
    setCurrentScrollPosState(currentScrollPosState);
  }, [currentScrollPosState]);

  useEffect(() => {
    if (currentScrollPosState > 100 && !isNavBarTriggeredState) {
      setIsNavBarTriggeredState(true);
    }
    if (currentScrollPosState === 0) {
      setIsNavBarTriggeredState(false);
    }
    (currentScrollPosState > previousScrollPosState && currentScrollPosState > 100) ?
            setIsNavBarHiddenState(true) : setIsNavBarHiddenState(false);
    setPreviousScrollPosState(currentScrollPosState);
  }, [currentScrollPosState]);

  
  const handleScroll = () => {
    setCurrentScrollPosState(window.pageYOffset);
  };

  const handleResize = () => {
    setCurrentInnerWidthState(window.innerWidth);
  };

  const navBarClass = (isNavBarTriggered, isNavBarHidden) => {
    const baseCss = 'global-nav ';

    if (!isNavBarTriggered) {
      return baseCss;
    }

    return isNavBarHidden ?
            `${baseCss} global-nav--scroll-down` : `${baseCss} global-nav--scroll-up`;
  };

  const links = [
    {
      linkName: 'About',
      linkHref: '#'
    },
    {
      linkName: 'Practitioners',
      linkHref: '#'
    },
    {
      linkName: 'Our Products',
      linkHref: '#'
    },
  ]

  return (
    <div className={navBarClass(isNavBarTriggeredState, isNavBarHiddenState)}>
      <div className="global-nav__brand-container">
        <div className="global-nav__brand">
          <p>Brand</p>
        </div>

        {props.isMobile
        ?
        // <React.Fragment>
        //   <HamburgerIcon
        //       setIsSidebarActiveState={props.setIsSidebarActiveState}
        //       isSidebarActiveState={props.isSidebarActiveState}
        //   />
        //   {props.isSidebarActiveState ? <SlideDownBar links={links} setIsSidebarActiveState={props.setIsSidebarActiveState}/> : undefined}
        // </React.Fragment>
        <h1>Mobile</h1>
        :
        <React.Fragment>
          <nav className="global-nav__nav-links">
            {links.map((link, i) => {
              return (
                <a className="global-nav__nav-link" key={i} href={link.linkHref}>{link.linkName}</a>
              )
            })}
          </nav>
        </React.Fragment>
        }
      </div>
    </div>
  )
}

export default Navigation;