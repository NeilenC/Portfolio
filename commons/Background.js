import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { loadStarsPreset } from "tsparticles-preset-stars";
// #2d2e47
// #142157
import React from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="absolute ">
      <Particles

        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        preset: "stars",
          background: {
            color: {
              value: "#fffff",
            },
          },
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "ed6c02",
            },
            links: {
              color: "ed6c02",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "polygon",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        // options={{
        //   preset: "triangles",
        // }}
      />
    </div>
  );
};

export default ParticlesBackground;
