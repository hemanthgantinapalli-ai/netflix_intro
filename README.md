🎬 Netflix Intro & Profile Selection Clone
A high-fidelity recreation of the iconic Netflix cinematic intro animation followed by the "Who's Watching?" profile selection screen. Built using modern HTML5, CSS3 (Keyframes & Flexbox), and Vanilla JavaScript.

🚀 Features
Cinematic Animation: Smooth SVG scaling that mimics the "zoom-through" effect of the original Netflix startup.

Dynamic Transition: Seamless handoff from the intro animation to the profile UI.

Responsive Profile UI: Hover-interactive profile cards with a clean, dark-mode aesthetic.

Optimized Performance: Uses hardware-accelerated CSS transforms for 60fps smoothness.

🛠️ Tech Stack
HTML5: Semantic structure and SVG integration.

CSS3: Custom keyframe animations, Bezier curves, and Flexbox layouts.

JavaScript: DOM manipulation and timing events to synchronize the user experience.

📁 Project Structure
Plaintext

├── index.html   # Page structure & SVG logo
├── style.css    # Animations, transitions, and profile styling
└── script.js    # Logic for screen swapping and audio triggers
⚙️ Implementation Details
The Intro Animation
The "real" look is achieved through a specific animation curve. The logo starts with a subtle zoom (scale(1.2)) before exploding toward the camera (scale(15)), creating the illusion of entering the screen.

The Profile Transition
Once the logo animation completes, the intro-container is removed from the layout flow using JavaScript, and the profile-screen is revealed with a soft opacity fade-in.

🖥️ How to Use
Clone the repository:

Bash

git clone https://github.com/your-username/netflix-intro-clone.git
Open the project: Simply open index.html in any modern web browser.

Customization:

Change profile names and images in the index.html file.

Adjust the zoomIn duration in style.css to speed up or slow down the intro.

💡 Future Improvements
[ ] Add the "Ta-dum" audio synchronization.

[ ] Implement a fully functional home dashboard after selecting a profile.

[ ] Add a "Profile PIN" entry system for restricted profiles.
