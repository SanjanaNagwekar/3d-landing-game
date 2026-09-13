# 3D Balloon Landing Game

A 3D C++ landing game built with openFrameworks. Pilot a hot-air balloon across an island environment, manage a limited fuel supply, and land safely on one of three difficulty-rated landing pads. The project combines force-based movement, octree collision queries, multiple camera modes, and shader-driven particle effects.

<!-- Add the gameplay trailer/GIF immediately below this introduction. -->

Developed as a San José State University **CS 134 final project** by **Ramya Nayak** and **Sanjana Nagwekar** in May 2025.

## Highlights

- Physics-based balloon movement with thrust, gravity, velocity, and frame-time integration.
- Octree-backed terrain and landing-pad collision detection.
- Three landing challenges with different target pads and landing outcomes.
- Main, tracking, and onboard camera modes.
- Real-time altitude and fuel tracking.
- Particle-based exhaust rendered with GLSL shaders while thrust is active.
- Landing/crash detection, scoring, restart flow, sound effects, and game-over states.
- Debug visualization for octrees, points, and wireframes.

## Tech Stack

- **Language:** C++
- **Framework:** openFrameworks
- **Graphics:** OpenGL / GLSL, GLM
- **3D Models:** `ofxAssimpModelLoader`
- **UI / Debug Controls:** `ofxGui`
- **Core concepts:** real-time simulation, spatial partitioning, collision detection, particle systems, camera systems, game-state management

## Technical Design

### Physics and movement

The balloon is represented by a `Lander` object with position, velocity, acceleration, and accumulated forces. Player input updates thrust along the vertical, lateral, and heading axes while gravity is applied during movement. Integration uses frame time so movement remains stable across varying frame rates.

### Spatial collision detection

The island terrain is subdivided with octrees. Separate octrees are built for the easy, medium, and hard landing pads as well as the water surface. Bounding-box and ray queries are used for terrain intersection, altitude estimation, landing detection, and preventing the balloon from passing through the terrain.

### Particle exhaust

When thrust is active, a `ParticleEmitter` spawns particles behind the balloon. Each particle tracks position, velocity, lifetime, and opacity. The particles are rendered through an `ofVboMesh` and GLSL vertex/fragment shaders to create a fading exhaust effect.

### Camera system

The game provides three viewpoints:

1. **Main camera** — free overview of the environment.
2. **Tracking camera** — maintains focus on the balloon.
3. **Onboard camera** — follows the balloon and looks downward toward the terrain.

## Gameplay

The goal is to maneuver the balloon onto one of three colored landing pads while managing fuel and landing speed:

- **Easy:** yellow landing pad
- **Medium:** orange landing pad
- **Hard:** red landing pad

A safe landing earns **50 points**, a hard landing earns **20 points**, and a crash earns **0 points**. The game also detects running out of fuel and supports restarting after a completed attempt.

## Controls

| Input | Action |
| --- | --- |
| `Space` | Start / restart the game |
| Arrow keys | Move up, down, left, and right |
| `F` / `B` | Move forward / backward along the balloon heading |
| `N` / `M` | Rotate the balloon heading |
| `F1` | Main camera |
| `F2` | Tracking camera |
| `F3` | Onboard camera |
| `A` | Toggle altitude display |
| `Q` | Quit the current game / exit |
| `O` | Toggle octree visualization |
| `W` | Toggle wireframe mode |
| `V` | Toggle point display |
| `C` | Toggle mouse camera controls |

## My Contributions

This was a collaborative team project. My verified contributions include:

- Implementing automatic balloon model loading/reset behavior and improving frame-time-based lander integration.
- Building the particle exhaust system, including particle spawning, lifetime/velocity updates, VBO-based rendering, and integration with the game's thrust/update loop.
- Developing the GLSL shaders used to render the exhaust effect and integrating the effect into the main rendering pipeline.

The repository preserves the original team commit history so individual contributions remain attributable.

## Repository Structure

```text
3d-landing-game/
├── src/                    # C++ game, physics, octree, and rendering code
├── data/
│   ├── geo/                # Balloon and island 3D assets
│   ├── images/             # Environment textures/backgrounds
│   ├── shaders/            # GLSL particle shaders
│   ├── sounds/             # Thrust and game-state audio
│   └── fonts/              # UI fonts
├── addons.make             # openFrameworks addon dependencies
└── README.md
```

## Build and Run

### Prerequisites

Install [openFrameworks](https://openframeworks.cc/) for your operating system. This project uses the bundled addons:

- `ofxGui`
- `ofxAssimpModelLoader`

### Generate the project files

1. Clone this repository into your openFrameworks `apps/myApps` directory:

   ```bash
   cd <openFrameworks>/apps/myApps
   git clone https://github.com/SanjanaNagwekar/3d-landing-game.git
   ```

2. Open the openFrameworks **Project Generator** and select the `3d-landing-game` folder.
3. Confirm that `ofxGui` and `ofxAssimpModelLoader` are included. The repository also includes these dependencies in `addons.make`.
4. Generate the project files for your platform.

### Data directory

The repository keeps the original project assets in the top-level `data/` directory. openFrameworks-generated projects commonly resolve runtime assets from `bin/data/`. If your generated project does so, copy or symlink the included `data/` directory to `bin/data/` before running the game.

### Run

Build and run the generated openFrameworks project using Xcode, Visual Studio, or your platform's supported build workflow. The game opens in a `1280 × 1024` window.

## Team

- Ramya Nayak
- Sanjana Nagwekar

San José State University — CS 134 Final Project, May 2025.
