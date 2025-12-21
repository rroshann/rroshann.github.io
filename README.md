# Portfolio / Source

This is the source code for my personal portfolio website, [rroshann.github.io](https://rroshann.github.io).

It serves as a showcase for my work in Data Science, Engineering, and AI, demonstrating not just the projects themselves but also the ability to build performant, scalable frontend systems.

## Architecture

The site is built as a static web application to ensure maximum performance and zero server-side maintenance overhead.

**Core Stack:**
*   **Next.js 15 (App Router)** - For component-based architecture and build optimization.
*   **TypeScript** - For type safety and maintainable code.
*   **Tailwind CSS** - For a design-system-first approach to styling.
*   **Framer Motion** - For fluid, physics-based interactions and scroll dynamics.

## Design Philosophy

The design implements a **Kinetic Brutalist** aesthetic. Key characteristics include:
*   **Fluid Typography:** Text scales mathematically with viewport width using CSS `clamp()`.
*   **Physics-Based Motion:** Animations replicate real-world mass and velocity.
*   **Strict Design Tokens:** No arbitrary values. All spacing, colors, and type sizes are tokenized.
*   **Performance First:** Zero layout shift, optimized asset loading, and static generation.

## Development

To run this project locally:

1.  Clone the repository.
    ```bash
    git clone https://github.com/rroshann/rroshann.github.io.git
    cd portfolio
    ```

2.  Install dependencies.
    ```bash
    npm install
    ```

3.  Start the development server.
    ```bash
    npm run dev
    ```

## Deployment

The project is configured for static export (`output: 'export'`) and uses a custom GitHub Actions workflow to build and deploy to GitHub Pages automatically upon pushing to `main`.

---

**Roshan Siddartha Sivakumar**
Data Scientist & Engineer
[roshan.siddartha.sivakumar@vanderbilt.edu](mailto:roshan.siddartha.sivakumar@vanderbilt.edu)
