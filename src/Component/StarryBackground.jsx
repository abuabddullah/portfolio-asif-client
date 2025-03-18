// StarryBackground.jsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarryBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      if (isMounted) {
        setInit(true);
      }
    };

    initializeParticles();

    return () => {
      isMounted = false;
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#000000",
      },
      zIndex : "-1"
    },
    fpsLimit: 120,
    interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 9
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.3
        },
        number: {
          density: {
            enable: true
          },
          value: 900
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5
          },
          value: { min: 0.3, max: 0.6 }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 1
        }
      }
    }), []);

  return init ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{ zIndex: -999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  ) : null;
};

export default StarryBackground;
