import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileImage } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const { category } = useParams();

  // Modal state for details
  const [detailsOpen, setDetailsOpen] = useState<null | { title: string; details: string }>(null);

  const projectData = {
    "academic": {
      title: "Academic Projects",
      description: "Academic projects completed during university studies",
      projects: [
        {
          title: "C-NIOSH-RWL: Automated Ergonomics Risk Assessment Tool",
          description: "A capstone project developing a web-based tool to automate NIOSH Recommended Weight Limit (RWL) calculations, aimed at improving workplace safety and ergonomic education for industrial engineering students.",
          summary: "Web-based tool for automated ergonomic risk assessment (NIOSH RWL), adopted in university curriculum, 100% usability test success, and reduced calculation time from 10+ minutes to <5 seconds.",
          technologies: [
            "Ergonomics", 
            "NIOSH Compliance", 
            "Spring Boot", 
            "JavaScript", 
            "UX Design", 
            "Educational Tool",
            "Team Project"
          ],
          image: "/images/projects/academic/niosh-cover.png",
          gallery: [
            "/images/projects/academic/niosh-cover.png",
            "/images/projects/academic/niosh-1.png",
            "/images/projects/academic/niosh-2.png",
            "/images/projects/academic/niosh-3.png"
          ],
          pdfUrl: "/pdf/projects/academic/capstone_thesis.pdf",
          details: `Category: Full-Stack Development
Duration: 2 semesters (~8 months)
Team Size: 6 people (Industrial & Software Engineers)
My Role: Software Engineer (Frontend Development, Integration)

Problem:
Manual NIOSH RWL calculations are error-prone, time-consuming, and lack educational tools for students, leading to inefficiencies in ergonomic risk assessments.

Solution:
Developed a responsive web application that automates RWL/Lifting Index (LI) calculations, provides real-time risk feedback, and generates PDF reports. Integrated educational videos and tooltips to enhance learning.

Impact:
- User Testing Success Rate: 100% task completion (30 participants)
- Educational Integration: Adopted in INE2012 Work Study & Ergonomics course
- Technical Stack: Spring Boot, Thymeleaf, Bootstrap, iTextPDF
- Accessibility: WCAG 2.1 AA compliant

Key Contributions:
- Frontend Development: Built responsive UI with Bootstrap, dynamic form validation, and tooltips using JavaScript.
- Integration: Connected Thymeleaf templates with Spring Boot backend for seamless data processing.
- Testing: Conducted usability tests (30 participants) and analyzed T-CSUQ metrics (System Usefulness R²=0.52).
- Documentation: Co-authored project report and GitHub repository maintenance.

Outcomes:
- Efficiency: Reduced calculation time from manual 10+ minutes to <5 seconds.
- Educational Value: Integrated learning resources (videos, explainer tooltips) for NIOSH RWL principles.
- Scalability: Designed for 50+ concurrent users with AWS-hosted prototype.

Collaborators:
Academic Advisors: Assoc. Prof. Dr. Oğuzhan Erdinç (Industrial Eng), Asst. Prof. Özge Yücel Kasap (Software Eng)
Team Members: Çağla Bakışgan, Yiğit Demirbilek, Hermann Knudsen, Başak Müzik, Zeynep Uçar, Ümmü Gülsüm Ergin
`
        },
        {
          title: "Avocado Alarm",
          description: "A semester-long digital fabrication project creating a low-cost, motion-activated anti-theft alarm for backpacks, designed to deter pickpocketing in crowded environments through real-time audible alerts.",
          technologies: [
            "Anti-Theft Tech", 
            "Arduino Prototyping", 
            "User-Centered Design",
            "Fusion 360", 
            "DFPlayer Mini", 
            "Public Safety",
            "Team Project"
          ],
          image: "/images/projects/academic/avoalarm-cover.jpg",
          pdfUrl: "/pdf/projects/academic/avo-alarm.pdf",
          manuscriptUrl: "/pdf/projects/academic/avo-alarm-manuscript.pdf",
          posterUrl: "/pdf/projects/academic/avo-alarm-poster.pdf",
          gallery: [
            "/images/projects/academic/avoalarm-cover.jpg",
            "/images/projects/academic/avo1.jpg",
            "/images/projects/academic/avo2.jpg",
            "/images/projects/academic/avo3.jpg"
          ],
          details: `Category: Product Design | Hardware Prototyping
Duration: 1 semester (~4 months)
Team Size: 3 people
My Role: User Research & Testing, Poster Design, Final Documentation

Problem:
Students and commuters lack affordable, real-time theft protection for their belongings in crowded spaces, leading to stress and frequent item loss (e.g., 250K+ items lost annually on Deutsche Bahn trains).

Solution:
Developed a discreet Arduino-based alarm that triggers when bag zippers are opened unexpectedly. Key features: magnetic reed switch sensor, 100dB alarm, manual toggle arming, and compact 3D-printed casing.

Impact:
- Prototype Success: Detected 100% of simulated theft attempts in real-world tests
- User Feedback: 8/8 participants confirmed alarm effectiveness in crowded spaces
- Innovation: Magnetic reed switch + toggle mechanism for low-power triggering

Process:
- Research: Analyzed existing solutions (e.g., Trackers, Pacsafe) to identify gaps in real-time alerts
- Prototyping: Used DFPlayer Mini for alarm sounds, Fusion 360 for casing design
- Testing: Conducted theft simulations with 8 users across buses, cafés, and trains
- Iteration: Refined based on feedback (e.g., size reduction, toggle visibility)

User Insights:
- ‘The alarm is loud enough to make people notice.’ — Kavisha (HSRW Student)
- ‘A smaller version would be perfect.’ — Alekhya (HSRW Student)
Key Findings:
- Visibility Tradeoff: Users wanted discretion but acknowledged loud alarms deter theft
- Toggle Vulnerability: Manual switch required stealthier placement

Next Steps:
- Miniaturize design with custom PCB
- Explore NFC-based arming for security
- Integrate tamper-proof toggle mechanism

Collaborators:
- Harsh: Casing Design (Fusion 360)
- Sumaira: Electronics Integration & Testing
- Ümmü: User Research & Feedback Analysis
`
        },
        {
          title: "ARPA Project",
          description: "BridgeUp – Academic Networking and Event Discovery Platform. A semester project: mobile app for university students to find research collaborators and academic events.",
          technologies: [
            "UX Research",
            "Mobile App",
            "Figma",
            "User Interviews",
            "Prototyping",
            "Branding",
            "Team Project"
          ],
          image: "/images/projects/academic/arpa-cover.png",
          pdfUrl: "/pdf/projects/academic/arpa.pdf",
          gallery: [
            "/images/projects/academic/arpa-cover.png",
            "/images/projects/academic/arpa-wireframe.png",
            "/images/projects/academic/arpa-hifi.png",
            "/images/projects/academic/arpa-moodboard.png",
            "/images/projects/academic/arpa-logo.png"
          ],
          details: `Category: Academic Project
Duration: 1 Semester
Team Size: 3 People
My Role: UX/UI Designer & Research Contributor

Problem:
University students often struggle to find suitable research collaborators and discover relevant academic events. Existing platforms like LinkedIn and ResearchGate are either too broad or fragmented, leading to inefficient networking and missed opportunities.

Solution:
Developed BridgeUp, a smartphone app that connects students with potential research collaborators and centralizes academic event listings. Key features include personalized peer matching, event filters by location/relevance, and in-app communication tools.

Impact:
- Enhanced networking efficiency for students in academic settings.
- Provided a centralized hub for conferences, workshops, and research events.
- Delivered a validated, user-tested prototype ready for future development.

Key Contributions:
- Research & Analysis: Conducted 10 user interviews, competitor analysis, and created detailed personas and scenarios.
- Prototyping: Designed low-fidelity wireframes and refined them through usability testing with 8 participants.
- UI Design: Created a high-fidelity interactive prototype in Figma, integrating a vibrant color scheme and Rubik typography.
- Usability Testing: Ran tests with 9 participants, improving navigation clarity and messaging indicators.
- Branding & Marketing: Developed app branding (logo, tagline: Bridge Up Your Opportunities) and outlined a phased marketing plan.
- Final Delivery: Compiled research, design artifacts, and testing results into a final report and presentation.

Technologies & Tools Used:
- Figma (Wireframes & Prototypes)
- User Interview & Usability Testing Methods
- Competitor & Persona Analysis Frameworks

Outcome:
- Validated user needs and optimized design through iterative testing.
- Delivered functional prototypes covering core networking and event features.
- Established a future roadmap including dark mode and funding integration.
`
        },
        {
          title: "Rebooked",
          description: "Sustainable Second-Hand Marketplace App. Academic project focused on user research, usability, and sustainable swap features.",
          technologies: [
            "UX Research",
            "User Interviews",
            "Persona",
            "Figma",
            "Heuristic Evaluation",
            "Prototyping",
            "Team Project"
          ],
          image: "/images/projects/academic/rebooked-cover.png",
          pdfUrl: "/pdf/projects/academic/user experience design.pdf",
          gallery: [
            "/images/projects/academic/rebooked-cover.png",
            "/images/projects/academic/rebooked-persona.png",
            "/images/projects/academic/rebooked-ui.png"
          ],
          details: `Category: Academic Project (User Experience Design)
Duration: 1 Semester
Team Size: 6 People
My Role: UX Designer & Research Contributor

Problem:
Second-hand marketplace apps often lack sustainable swap options, accurate search/filtering, and effective communication features. Users struggle to find rare items affordably while ensuring seller reliability and sustainability.

Solution:
Designed a sustainable second-hand mobile app prototype focusing on usability, accurate search, secure transactions, and a swap option. Developed through user interviews, persona/scenario creation, heuristic evaluation, and iterative redesign in Figma.

Impact:
- Addressed real user needs validated through 12 user interviews.
- Integrated sustainable item exchange (swap) features.
- Improved usability via heuristic evaluation and design iteration.

Key Contributions:
- User Research: Conducted interviews with 12 participants to identify key priorities such as item condition, price, and seller trust.
- Persona & Scenarios: Created detailed persona (“Can Demir”) and activity/problem scenarios to guide design decisions.
- Prototyping: Built a Figma prototype including login, product search, filtering, product details, messaging, cart, and dark mode.
- Heuristic Evaluation: Identified 4 major usability issues (e.g., inaccurate filtering, missing feedback in messaging) and proposed targeted fixes.
- Redesign: Added search suggestions, read receipts, numeric cart indicators, and confirmation dialogs.

Technologies & Tools Used:
- Figma (Prototyping & UI Design)
- Heuristic Evaluation Methods
- Persona & Scenario-Based Design

Outcome:
- Delivered a user-validated, sustainable second-hand marketplace app prototype.
- Enhanced usability through iterative improvements based on heuristic evaluation.
- Created a foundation for further development with refined UI and improved search, filtering, and communication features.
`
        },
        {
          title: "Busuu Language Learning App – UX Research Case Study",
          description: "UX research and UI redesign for Busuu mobile app. Individual project focused on usability, onboarding, and interface improvements.",
          technologies: ["UX Research", "UI Design", "Usability Testing", "Persona", "Wireframing", "Prototyping"],
          image: "/images/projects/academic/busu6.png",
          presentationUrl: "/presentations/ux-usability-1.pdf",
          pdfUrl: "/pdf/projects/academic/busuu review.pdf",
          gallery: [
            "/images/projects/academic/busu1.png",
            "/images/projects/academic/busu2.png",
            "/images/projects/academic/busu3.png",
            "/images/projects/academic/busu4.png",
            "/images/projects/academic/busu5.png",
            "/images/projects/academic/busu6.png",
            "/images/projects/academic/busu7.png",
            "/images/projects/academic/busu8.png",
            "/images/projects/academic/busu9.png"
          ],
          details: `Category: UX Research & UI Redesign for Mobile Application
Duration: 2 Week (Research + Redesign phase)
Team Size: Individual Project
My Role: UX Researcher & UI Designer

Problem:
While Busuu offers structured language courses and an interactive community, usability issues in registration, navigation, and interface interactions hinder user engagement. Complex onboarding, language selection difficulties, and unintuitive features reduce learning efficiency and discourage continued use.

Solution:
Conducted a full UX research case study to identify pain points through silent observation, usability testing, and persona analysis. Designed wireframes and high-fidelity mockups to address issues such as confusing registration, non-clickable elements, cluttered homepages, and low engagement in community features.
Proposed a simplified interface, streamlined onboarding, clear navigation for language selection, improved matching exercises, and motivation-boosting features such as free lessons and a cleaner homepage layout.

Impact:
- Improved Onboarding: Login and registration processes simplified, reducing confusion.
- Higher Engagement: Weekly tasks and assignments became the most-used features, particularly among users who previously avoided community features.
- UI Enhancements: Homepage redesign enabled faster navigation; schedule feature rose to second-most used functionality.
- Usability Gains: Cleaner layouts, clickable and accessible elements, and multi-choice task formats improved task completion rates.

Key Contributions:
- User Research: Conducted 35-minute silent observations and structured interviews to capture real-world interaction challenges.
- Persona Development: Identified primary/secondary personas, including “primary rejecting” learners preferring test-based methods over community features.
- Wireframing & Prototyping: Created paper and digital wireframes, integrating user feedback to refine layouts.
- UI Redesign: Improved clickability, reduced visual clutter, redesigned underused pages, and added motivational incentives (free lessons).
- Usability Testing: Validated design improvements through iterative tests and incorporated feedback into final mockups.

Outcomes:
- Efficiency: Reduced time to navigate and complete tasks.
- User Satisfaction: Increased positive feedback on app structure and clarity.
- Accessibility: Adjusted design for older and younger user needs, ensuring clarity and usability for all age groups.

Collaborators:
Project by: Ümmü Gülsüm Ergin
`
        },
        {
          title: "Heuristic Evaluation of ZIRAAT Mobile Banking App",
          description: "Heuristic evaluation and UX recommendations for ZIRAAT Mobile Banking App.",
          technologies: ["UX", "Usability", "Heuristic Evaluation", "Jakob Nielsen", "Mobile Banking"],
          image: "/images/projects/academic/ziraat1.png",
          pdfUrl: "/pdf/projects/academic/ziraat.pdf",
          gallery: [
            "/images/projects/academic/ziraat1.png",
            "/images/projects/academic/ziraat2.png",
            "/images/projects/academic/ziraat3.png",
            "/images/projects/academic/ziraat4.png"
          ],
          details: `Category: Academic Project (UX Evaluation)
Duration: 1 Semester
Team Size: Individual
My Role: UX Evaluator & Researcher

Problem:
Although the ZIRAAT Mobile Banking App provides a variety of financial services, certain usability issues can cause errors, reduce accessibility, and hinder user satisfaction. Missing confirmations, unclear icons, and weak error recovery mechanisms present critical risks in a high-stakes financial environment.

Solution:
Conducted a heuristic evaluation based on Jakob Nielsen’s 10 usability principles to identify strengths, usability gaps, and improvement opportunities. Delivered actionable recommendations including clearer progress indicators, improved iconography, standardized confirmations, enhanced personalization, and inclusive design elements.

Impact:
- Identified critical usability risks such as accidental financial transactions due to missing dual confirmations.
- Proposed design changes to improve accessibility, inclusivity, and trust.
- Suggested enhancements to error prevention, recovery, and system feedback for better user experience.

Key Contributions:
- Heuristic Analysis: Evaluated app against Jakob Nielsen’s 10 usability heuristics, documenting strengths and issues.
- Critical Risk Assessment: Highlighted potential for irreversible financial errors and accessibility gaps.
- Actionable Recommendations: Suggested dual confirmation for transfers, universally recognized icons, inclusive profile avatars, and improved search recovery.
- UX Enhancement Proposals: Designed improvements for dashboard personalization, clearer terminology through tooltips, and minimized non-essential UI distractions.

Technologies & Tools Used:
- Jakob Nielsen’s 10 Usability Heuristics
- UX Evaluation Frameworks
- Qualitative Analysis & Reporting

Outcome:
- Delivered a structured usability report with prioritized issues and recommendations.
- Established success metrics for post-implementation evaluation, including reduced errors, higher satisfaction scores, and faster task completion.
`
        }
      ]
    },
    "game-design": {
      title: "Game & Interaction Design",
      description: "Game design, graphic design, and interactive media projects",
      projects: [
        {
          title: "Blender 3D Modeling: Room & Chess Set",
          description: "3D modeling, texturing, and lighting of a detailed room interior and a chess set in Blender.",
          technologies: ["Blender", "3D Modeling", "Texturing", "Rendering", "UV Mapping", "Lighting"],
          image: "/images/projects/game-design/r6.png",
          gallery: [
            "/images/projects/game-design/r0.png",
            "/images/projects/game-design/r1.png",
            "/images/projects/game-design/r2.png",
            "/images/projects/game-design/r3.png",
            "/images/projects/game-design/r4.png",
            "/images/projects/game-design/r5.png",
            "/images/projects/game-design/r6.png",
            "/images/projects/game-design/r7.png",
            "/images/projects/game-design/s1.png",
            "/images/projects/game-design/s2.png",
            "/images/projects/game-design/s3.png",
            "/images/projects/game-design/s5.png",
            "/images/projects/game-design/s6.png",
            "/images/projects/game-design/s7.png",
            "/images/projects/game-design/t1.png"
          ],
          details: `<b>Category:</b> 3D Modeling & Texturing
<b>Duration:</b> 1 Semester
<b>Team Size:</b> Individual
<b>My Role:</b> 3D Artist

<b>Overview:</b>
This project involved creating multiple 3D scenes in Blender, focusing on modeling, texturing, and lighting. The two main outputs were:
<li>A detailed room interior scene featuring furniture, appliances, and decorative elements.</li>
<li>A chess set with individually modeled pieces, each textured for realistic appearance.</li>

<b>Process & Workflow:</b>
<b>Modeling:</b>
<li>Built room structure and furniture from scratch using Blender’s mesh modeling tools.</li>
<li>Created full chess piece set (pawn, rook, knight, bishop, queen, king) with proportional accuracy.</li>

<b>Texturing:</b>
<li>Applied custom textures and realistic materials for wood, fabric, and ceramics.</li>
<li>Experimented with color variations and surface properties (e.g., gloss, roughness).</li>

<b>Lighting & Rendering:</b>
<li>Used HDRI and point lights for realistic indoor illumination.</li>
<li>Adjusted shadows and reflections for a more natural look.</li>

<b>Tools & Techniques:</b>
<li>Blender (Modeling, Texturing, Rendering)</li>
<li>UV Mapping for custom texture placement</li>
<li>HDRI Lighting for realism</li>

<b>Outcome:</b>
<li>Produced high-quality renders of both a stylized cafe-like room and a detailed chess set.</li>
<li>Improved skills in UV mapping, material creation, and scene composition.</li>
<li>Gained semester-long experience in managing multi-asset 3D projects from start to finish.</li>
`
        },
        {
          title: "Narrative Storytelling (D&D)",
          description: "Branching narrative RPG scenario set in the Planescape universe. Focus on player agency, world-building, and interactive storytelling.",
          technologies: ["Narrative Design", "Storytelling", "D&D", "RPG", "Midjourney","Interactive Fiction"],
          image: "/images/projects/game-design/dndcover.png",
          gallery: [
            "/images/projects/game-design/dndcover.png",
            "/images/projects/game-design/dnd1.png",
            "/images/projects/game-design/dnd2.png",
            "/images/projects/game-design/dnd3.png",
            "/images/projects/game-design/dnd4.png",
            "/images/projects/game-design/dnd5.png"
          ],
          pdfUrl: "/pdf/projects/game-design/dndstory.pdf",
          details: `Category: Interactive Storytelling / Role-Playing Game (RPG)
Duration: 3 Months
Team Size: 1 (Writer & Designer)
My Role: Narrative Designer & Story Writer – Crafted Riven’s story, world-building, character development, and player interactions.

Problem:
Creating an engaging, player-driven narrative in the Planescape universe that balances personal character growth with high-stakes multiversal consequences.

Solution:
<li>Designed "Riven", a branching narrative RPG featuring:</li>
<li>Player Agency: Choices in exploration, combat, and diplomacy shape the story.</li>
<li>Dynamic World: Travel across planes (Arborea, Limbo) with shifting environments (e.g., living maps, chaotic terrain).</li>
<li>Consequences: Decisions impact relationships, faction alliances, and the fate of the multiverse.</li>

Impact:
<li>Educational Value: Teaches narrative design principles, branching storytelling, and RPG mechanics.</li>
<li>Innovation: Introduced mechanics like "living maps" (magical, ever-changing guides) and "planequakes" (tactical environmental shifts).</li>

Key Contributions:
<li>Story Arc: Wrote Riven’s quest to find the Moonflower, her missing father, and confront the Lord of Chaos.</li>
<li>World-Building: Developed Limbo’s reality-warping lore and faction dynamics (e.g., Harmonium, chaos mages).</li>
<li>Interactive Design: Scripted dialogue options, combat scenarios, and puzzles tied to player choices.</li>
Outcomes:
<li>Scalability: Modular design allows expansion with new planes, factions, or side quests.</li>
<li>Efficiency: Structured narrative templates ensured consistency across branching paths.</li>
Collaborators:
<li>Academic Advisor: Ümmü Gülsüm Ergin (Basics of Storytelling course)</li>
<li>Team Member: Solo project – all content and design by me.</li>
Note: This project demonstrates expertise in immersive storytelling and RPG design, suitable for portfolios under "Narrative Design" or "Game Writing."
Optional Additions for Portfolio:
Snippet: "Will Riven reclaim the Moonflower, or will Limbo’s chaos consume her? The choice is yours."
`
        },
        {
          title: "Zephyr: Fictional Creature Design",
          description: "Concept art and worldbuilding for Zephyr, a fictional desert-dwelling creature. Focus on biology, adaptation, and cultural significance.",
          technologies: [
            "Creature Design",
            "Worldbuilding",
            "Concept Art",
            "Environmental Storytelling",
            "Individual Project"
          ],
          image: "/images/projects/game-design/final.png",
          gallery: [
            "/images/projects/game-design/final.png",
            "/images/projects/game-design/front1.jpg",
            "/images/projects/game-design/back1.jpg",
            "/images/projects/game-design/finalcharachter.jpg",
            "/images/projects/game-design/inspiration.png",
            "/images/projects/game-design/stages.png",
            "/images/projects/game-design/stages.jpg",  
            "/images/projects/game-design/stg1.png",
            "/images/projects/game-design/progress1.png",
            "/images/projects/game-design/progress2.png",
            "/images/projects/game-design/progress3.png",
            "/images/projects/game-design/ins1.png",
            "/images/projects/game-design/ins2.png",
            "/images/projects/game-design/ins3.png",
          ],
          details: `<b>Category:</b> Creative Design & Worldbuilding<br/><b>Duration:</b> Concept Development Project<br/><b>Team Size:</b> Individual<br/><b>My Role:</b> Worldbuilder & Character Designer<br/>
<b>Overview:</b>
Zephyr is a fictional creature created as part of a character design and environmental storytelling exercise. This project explores the creature’s biology, habitat, cultural significance, and survival strategies, emphasizing adaptation to harsh desert-like conditions.<br/>
<b>Habitat:</b>
Zephyr inhabits a cold, sandy planet with constant wind and airborne particles. The terrain features large rock formations and canyons, which provide shelter but also pose hazards like falling rocks and narrow passages. The environment is populated by reptiles that leave poisonous secretions and contains rare, high-viscosity drinking water sources.<br/>
<b>Appearance:</b>
<li>Long legs for swift movement across sand.</li>
<li>Head extensions with smaller secondary extensions used for energy generation.</li>
<li>Narrow ears to protect against airborne particles.</li>
<li>Rounded circular mouth.</li>
<b>Biology & Behavior:</b>
<li><b>Diet:</b> Roots, tubers, and hard-shelled plants adapted to sandy conditions.</li>
<li><b>Energy Source:</b> Generates energy via head extensions.</li>
<li><b>Lifespan:</b> 116 years.</li>
<li><b>Social Structure:</b> Lives in groups of 10–15 for safety; migrates every 3 years.</li>
<li><b>Reproduction:</b> Secretes a substance from its mouth that is carried by wind to new areas for reproduction.</li>
<li><b>Intelligence:</b> Low individual intelligence; relies on group protection.</li>
<b>Special Abilities:</b>
<li>Can drill through hard surfaces, aiding in resource gathering and survival.</li>
<b>Cultural Significance:</b>
Zephyr’s species is seen as a symbol of resilience and adaptation to extreme environments. Its drilling ability and speed in sand make it a crucial part of the local ecosystem. In some cultures, the creature’s head extensions are viewed as symbols of strength and power.
<br/><b>Threats:</b>
The greatest danger to Zephyr is if its drilling mechanism is poisoned by secretions from other local species, which can be fatal.
<br/><b>Outcome:</b>
The Zephyr design combines ecological realism with fantastical worldbuilding, creating a creature that feels biologically plausible within its fictional environment. It can be further developed for use in game design, science fiction writing, or visual storytelling.
`
        }
      ]
    },
    "ux-research": {
      title: "UX Research & Testing",
      description: "User research, usability tests, and eye tracking studies",
      projects: [
        {
          title: "User Research and Testing: Observational Study and Task Analysis of Body Temperature Measurement",
          description: "Observational study and interviews on how people measure body temperature, including pain points and device preferences.",
          technologies: ["User Research", "Interview", "Task Analysis", "Observational Study"],
          pdfUrl: "/pdf/projects/ux-research/body-temperature-study.pdf",
          image: "/images/projects/ux-research/temperature.png"
        }
      ]
    },
    "data-viz": {
      title: "Data Visualization & Eye Tracking",
      description: "Data visualization projects and psychology/eye tracking experiments",
      projects: [
        {
          title: "Accelerometer Data Classification",
          description: "Academic project: End-to-end activity recognition pipeline using Python and machine learning for wearable sensor data.",
          details: `Category: Academic Project (Machine Learning & Signal Processing)
Duration: 1 Week
Team Size: 3 People
My Role: Data Analyst & Model Developer

Problem:
Raw accelerometer data from wearable devices contains noise and is difficult to interpret directly. Without proper preprocessing and classification, activity recognition (e.g., walking, running, climbing stairs) becomes inaccurate, limiting potential applications in sports tracking, health monitoring, and wearable tech.

Solution:
Developed a Python-based activity recognition pipeline to process and classify accelerometer signals. The workflow included data cleaning, signal smoothing, feature extraction, and supervised machine learning classification using a Decision Tree model.

Implementation Steps:
- Data Collection: Imported accelerometer datasets for walking, running, stairs, and jumping activities.
- Preprocessing:
  • Calculated total acceleration magnitude.
  • Applied rolling average smoothing to reduce noise.
  • Labeled datasets by activity type.
- Feature Extraction:
  • Segmented signals into fixed-size windows.
  • Extracted mean, standard deviation, and maximum values for each segment.
- Model Development:
  • Combined labeled data into a single dataset.
  • Split into training (80%) and testing (20%) sets.
  • Trained a Decision Tree Classifier to predict activity labels.
- Evaluation:
  • Achieved 65% overall accuracy.
  • High precision for “running” (0.86), lower accuracy for “stairs” and “walking” due to signal similarity.
  • Visualized performance using a confusion matrix.

Technologies & Tools Used:
- Languages: Python
- Libraries: Pandas, NumPy, Matplotlib, Seaborn, scikit-learn
- Techniques: Rolling average smoothing, sliding window segmentation, feature engineering, classification models

Outcome:
- Created a working prototype for wearable sensor activity recognition.
- Demonstrated end-to-end workflow from raw signal preprocessing to classification.
- Identified improvements for future iterations, such as using more advanced classifiers (Random Forest, SVM) and additional features (frequency-domain analysis) to boost accuracy.
`,
          technologies: [
            "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn",
            "scikit-learn", "Machine Learning", "Signal Processing"
          ],
          image: "/images/projects/data-viz/acc1.png",
          gallery: [
            "/images/projects/data-viz/acc1.png",
            "/images/projects/data-viz/acc2.png",
            "/images/projects/data-viz/acc3.png",
            "/images/projects/data-viz/acc4.png"
          ],
          pdfUrl: "/pdf/projects/data-viz/acc.pdf"
        },
        {
          title: "Eye Tracking Experiment: Attention Attraction in Ad Layouts Featuring Different Dog Breeds",
          description: "Academic project: Eye-tracking study on how different dog breeds in ads affect user attention and product recall.",
          details: `Category: Academic Project (Usability & Cognitive Psychology)
Duration: 1 Semester
Team Size: 3 People
My Role: Researcher & Data Analyst

Problem:
In advertising, “cute” animals are often used to attract attention, but it is unclear whether they help or distract from the main product. Different dog breeds might shift user focus away from the intended message, impacting ad effectiveness.

Solution:
Conducted an eye-tracking experiment comparing two advertisement designs — one featuring a small, visually appealing dog (e.g., Pomeranian) and another with a larger, less conventionally “cute” dog (e.g., Bulldog). Measured gaze fixations, scanpaths, and microsaccades to determine how breed type affects visual attention and product recall.

Impact:
- Revealed that visual prominence and placement of key elements (product, logo) influence attention more than breed “cuteness” alone.
- Showed that familiarity with a dog breed can guide attention toward related elements.
- Provided ad design recommendations for balancing text and imagery to avoid overshadowing the product.

Key Contributions:
- Experiment Design: Defined hypothesis, selected stimuli, and controlled breed type as the main variable.
- Data Collection: Conducted tests with 3 participants using eye-tracking software to generate heatmaps and scanpaths.
- Quantitative Analysis: Measured microsaccade frequency (200–400/sec) and fixation distribution.
- Qualitative Analysis: Used questionnaires to gather emotional responses and recall accuracy.

Findings:
- Participants focusing on text-heavy areas overlooked the product.
- One participant’s familiarity with breeds increased product engagement in the second ad.
- Product visibility improved when placed closer to the main visual subject.

Technologies & Tools Used:
- Eye-tracking software (heatmap & scanpath analysis)
- Qualitative questionnaires
- Cognitive processing metrics (microsaccades, fixation analysis)

Outcome:
- Identified design strategies to increase product salience in ads.
- Demonstrated that emotional engagement with imagery should be balanced with clear product placement.
- Recommended enlarging product/logo size and optimizing placement to enhance recall.
`,
          technologies: [
            "Eye Tracking", "Usability", "Cognitive Psychology", "Heatmap", "Scanpath", "Quantitative Analysis", "Qualitative Analysis"
          ],
          image: "/images/projects/data-viz/eye1.png",
          gallery: [
            "/images/projects/data-viz/eye1.png",
            "/images/projects/data-viz/eye2.png",
            "/images/projects/data-viz/eye3.png",
            "/images/projects/data-viz/eye4.png"
          ],
          pdfUrl: "/pdf/projects/data-viz/eye.pdf"
        }
      ]
    },
    "software": {
      title: "Software Projects",
      description: "Mini software projects on GitHub and open source contributions",
      projects: [
        {
          title: "Football Game Interface",
          description: "A simple, interactive football game interface to practice HTML, CSS, and JavaScript fundamentals. Features a static football field, start button, and score display.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/software/football.png",
          githubUrl: "https://gulsumergin.github.io/football-game-pointo-staj/football_area/football.html"
        },
        {
          title: "Valentine's Day",
          description: "A fun and interactive Valentine's Day themed project.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/software/valentine.png",
          githubUrl: "https://gulsumergin.github.io/valentines-day/index_updated.html"
        },
        {
          title: "Todo Web App",
          description: "A simple and effective todo web application.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/software/todo.png",
          githubUrl: "https://gulsumergin.github.io/todo-app-final2/todo's_app/"
        },
        {
          title: "Welcome Home Project",
          description: "A web project for celebrating and gifting for a new home.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/software/welcome.png",
          githubUrl: "https://gulsumergin.github.io/yeni-evin-hay-rl-olsun/yeni-ev-hediyesi-formlu/index.html"
        },
        {
          title: "Exchange App",
          description: "Türk Lirası'nı Euro'ya çeviren ve son 7 günün istatistik ekranını gösteren bir döviz uygulaması.",
          technologies: ["HTML", "CSS", "JavaScript"],
          image: "/images/projects/software/exchange.png",
          githubUrl: "https://gulsumergin.github.io/exchange-app/"
        }
      ]
    },
    "design-projects": {
      title: "Design Projects",
      description: "Business cards, invitations, brochures, infographics, and social media designs.",
      projects: [
        {
          title: "Business Card Collection",
          description: "A set of creative business card designs for various clients.",
          technologies: ["Canva", "Sketch", "Print Design"],
          gallery: [
            "/images/projects/design-projects/business-card-1.png",
            "/images/projects/design-projects/business-card-2.png"
          ],
          canvaUrl: "https://www.canva.com/design/DAGN7IaBW-0/DL5cElE2l862ipfLoberTw/edit?utm_content=DAGN7IaBW-0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          image: "/images/projects/design-projects/businesscard.png"
        },
        {
          title: "Invitation Designs",
          description: "Modern and elegant invitation cards for events and organizations.",
          technologies: ["Canva", "Sketch", "Print Design"],
          image: "/images/projects/design-projects/invitation.png",
          canvaUrl: "https://www.canva.com/design/DAGTZZ8f6Ms/IHePYDjyD89UMrdxgcGjpw/edit?utm_content=DAGTZZ8f6Ms&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          // No gallery, only cover image
        },
        {
          title: "Infographic",
          description: "An informative infographic designed in order to raise awareness for technology addiction.",
          technologies: ["Canva", "Sketch", "Infographic"],
          image: "/images/projects/design-projects/infograph.png",
          canvaUrl: "https://www.canva.com/design/DAGElhsNrSY/vsWi85B-0-aF2WsDPQT7ow/edit?utm_content=DAGElhsNrSY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Brochure - UX Project",
          description: "Brochure design focused on eye tracking heatmaps and heuristic evaluation findings.",
          technologies: ["Miro", "Canva", "UX", "Print", "Eye Tracking", "Heuristic Evaluation"],
          image: "/images/projects/design-projects/uxeye.png",
          canvaUrl: "https://www.canva.com/design/DAGZZYv7d5g/95bROJW65SK6-yAL5_75QQ/edit?utm_content=DAGZZYv7d5g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Brochure - Digital Fabrication",
          description: "Brochure for a digital fabrication workshop. Features the Avocado Alarm project: a device that sounds an alarm in theft situations. Detailed study is available in academic projects.",
          technologies: ["Canva", "Sketch", "Digital Fabrication", "Print", "Hardware"],
          image: "/images/projects/design-projects/avo.png",
          canvaUrl: "https://www.canva.com/design/DAGs_rRUflo/Ud42LCLQEbsx3NHwjPAvJA/edit?utm_content=DAGs_rRUflo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Brochure - Fair Event",
          description: "Brochure designed for a trade fair event. Designed for a consultancy firm participating in an education and overseas consultancy fair.",
          technologies: ["Canva", "Sketch", "Event", "Print"],
          image: "/images/projects/design-projects/fair.png",
          canvaUrl: "https://www.canva.com/design/DAGTaE-9U5k/vVfKZUvdyogxTHb1_RsFiw/edit?utm_content=DAGTaE-9U5k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Social Media Visuals",
          description: "A collection of social media post designs.",
          technologies: ["Canva", "Sketch", "Social Media"],
          image: "/images/projects/design-projects/social.png",
          canvaUrl: "https://www.canva.com/design/DAF7Rxu8Y1A/kv_DpdyS2sEmVtIh1wv-rg/edit?utm_content=DAF7Rxu8Y1A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
          title: "Logo Design",
          description: "Logo designed for Bahçeşehir University Photography Club.",
          technologies: ["Canva", "Logo Design"],
          image: "/images/projects/design-projects/logo.png",
          canvaUrl: "https://www.canva.com/design/DAFw45gvoUY/B-y4qKGO9ZQ_cguVM0_FLw/edit?utm_content=DAFw45gvoUY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        }
      ]
    },
    "project-management": {
      title: "Project Management",
      description: "Project management experiences and academic projects.",
      projects: [
        {
          title: "Netaş Agile Project Management (nalbursepeti.com)",
          description: "Agile project management experience at Netaş. Developed nalbursepeti.com, an e-commerce platform for hardware stores.",
          technologies: [
            "Agile", "Scrum", "Project Management", "Full-Stack", "ASP.NET Core", "C#", "SQL Server"
          ],
          image: "/images/projects/project-management/netas1.png",
          gallery: [
            "/images/projects/project-management/netas1.png",
            "/images/projects/project-management/netas2.png",
            "/images/projects/project-management/netas3.png"
          ],
          pdfUrl: "/pdf/projects/project-management/netas.pdf",
          details: `Category: Full-Stack Development & Agile Project Management
Duration: 8 Weeks (4 Sprints)
Team Size: 8 people (Software Engineers, UI/UX Designers, Test Engineers)
My Role: Scrum Master & Coordination Lead (Agile facilitation, backlog management, sprint planning)

Problem:
The absence of a user-friendly and secure e-commerce platform tailored for local hardware stores resulted in inefficiencies in product ordering, payment, and delivery tracking.

Solution:
Developed nalbursepeti.com, an e-commerce web application enabling users to search hardware store products, add them to the cart, place orders, view order history, and track deliveries in real time. Integrated secure payment processing, user reviews, ratings, and location-based nearby store recommendations. Managed development using the Scrum framework.

Impact:
- User Testing: All planned features delivered successfully at the end of each sprint.
- Business Value: Provided local hardware stores with a digital sales channel.
- Technical Stack: ASP.NET Core, C#, HTML, CSS, JavaScript, SQL Server
- Agile Adoption: Fully implemented Scrum ceremonies across 4 sprints.

Key Contributions:
- Agile Facilitation: Led Daily Scrum, Sprint Planning, Review, and Retrospective meetings.
- Backlog Management: Collaborated with the Product Owner to prioritize tasks using the T-Shirt Size estimation method.
- Team Coordination: Facilitated communication between developers, designers, and testers, removing blockers when necessary.
- Progress Tracking: Monitored sprint progress and maintained Trello boards.
- Risk Mitigation: Identified and addressed project risks through additional coordination sessions.

Outcomes:
- Efficiency: Optimized order placement and transaction processing time.
- User Experience: Enhanced engagement with user reviews, ratings, and store suggestions based on location.
- Scalability: Designed with multi-user support and mobile responsiveness in mind.

Collaborators:
Course Instructor / Advisor: Taner Girgin
Team Members: Sude Naz Öğdem, Selin Çeçen, Ümmü Gülsüm Ergin (myself), Furkan Vural Okur, Alp Taşkıran, Turgay Kırıkkale, Yiğit Efe Yılmaz, Yusuf İlham Çetinkaya
`
        },
        {
          title: "Software Project Management: Otoprime",
          description: "Otoprime: Mobile parking management app for real-time space availability, reservations, and navigation. Developed with Agile methods.",
          technologies: [
            "Project Management", "Agile", "Scrum", "Mobile App", "Android", "iOS", "API", "SQL"
          ],
          image: "/images/projects/project-management/oto1.png",
          gallery: [
            "/images/projects/project-management/oto1.png",
            "/images/projects/project-management/oto2.png",
            "/images/projects/project-management/oto3.png"
          ],
          pdfUrl: "/pdf/projects/project-management/oto.pdf",
          details: `Category: Mobile App Development & Agile Project Management
Duration: Not specified (Full software development life cycle)
Team Size: 6 people (Software Engineers, Designers, Analysts, Testers)
My Role: Software Engineer (Backend & Integration Support)

Problem:
In large metropolitan areas like Istanbul, finding available parking spaces is time-consuming and inefficient. Drivers often lack real-time occupancy data, reservation options, and integrated navigation to parking locations.

Solution:
Developed Otoprime, a mobile parking management application that allows users to locate nearby parking lots, view real-time occupancy rates, reserve spaces in advance, and access directions. The app also integrates features such as parking history, feedback submission, promotional coupons, and favorite location tracking.

Implemented a color-coded availability system (Green = vacant, Orange = reserved, Red = full) and a push notification system for nearby space availability.

Impact:
- User Reach: Projected 2 million downloads in 4 years with a 4-star rating on app stores.
- Business Value: Increased visibility and revenue for parking lot owners through reservations and discount promotions.
- Technical Stack: Android (Java/Kotlin), iOS (Swift), API integration, SQL database, Git version control.
- Agile Adoption: Scrum framework with daily stand-ups, sprint reviews, and retrospectives.

Key Contributions:
- Backend Development: Assisted in database design and API integration for reservation and payment systems.
- Feature Implementation: Developed functions for parking history retrieval, reservation cancellation, and occupancy rate updates.
- Integration: Coordinated with frontend team for smooth UI-API data flow.
- Testing Support: Participated in alpha/beta testing phases and implemented bug fixes.
- Documentation: Contributed to technical documentation and user guide creation.

Outcomes:
- Efficiency: Reduced average time to find and book parking in city centers.
- User Experience: Enhanced with real-time updates, intuitive navigation, and loyalty rewards.
- Scalability: Designed for city-wide deployment with architecture adaptable for nationwide expansion.

Collaborators:
Course Instructor / Advisor: Prof. Yücel Batu Salman
Team Members: Begüm Kaya, Selin Çeçen, Ecem Aydoğan, Meltem Meydan, Ümmü Gülsüm Ergin (myself), Alper Kaan Mazinoğlu
`
        }
      ]
    }
  };

  const currentCategory = category || "ux-research";
  const categoryData = projectData[currentCategory as keyof typeof projectData];

  // Image gallery modal state
  const [galleryOpen, setGalleryOpen] = useState<null | string[]>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Project details modal state (for gallery/details)
  const [projectModal, setProjectModal] = useState<null | { project: Project; galleryIndex: number }>(null);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  // Helper: get details if present
  type Project = {
    title: string;
    description: string;
    summary?: string;
    technologies: string[];
    image?: string;
    gallery?: string[];
    demoUrl?: string;
    githubUrl?: string;
    presentationUrl?: string;
    caseStudyUrl?: string;
    storyUrl?: string;
    details?: string;
    pdfUrl?: string;
  };

  const getProjectDetails = (project: Project) => project.details || "";

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {categoryData.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {[
            "game-design",
            "software",
            "academic",
            "data-viz",
            "design-projects",
            "project-management",
            "ux-research"
          ].map(key => {
            const data = projectData[key as keyof typeof projectData];
            return (
              <Button
                key={key}
                variant={currentCategory === key ? "default" : "outline"}
                asChild
                className={currentCategory === key ? "bg-gradient-primary" : ""}
              >
                <Link to={`/projects/${key}`}>
                  {data.title}
                </Link>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className="aspect-video bg-muted rounded-md mb-4 overflow-hidden flex items-center justify-center"
                  // Disable gallery popup for design-projects
                  onClick={() => {
                    if (
                      currentCategory !== "design-projects" &&
                      project.gallery &&
                      project.gallery.length > 0
                    ) {
                      setProjectModal({ project, galleryIndex: 0 });
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View images for ${project.title}`}
                  // Fix: Ensure the container has a minHeight so images always show
                  style={{ minHeight: "160px", background: "#f3f4f6" }}
                >
                  {/* Fix: Prefer project.image if exists, else gallery[0] */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ display: "block" }}
                    />
                  ) : project.gallery && project.gallery.length > 0 ? (
                    <img
                      src={project.gallery[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ display: "block" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-base font-semibold">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.summary ? project.summary : project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {/* Website button if githubUrl exists */}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="w-4 h-4" />
                        Website
                      </a>
                    </Button>
                  )}
                  {/* View Canva button if canvaUrl exists */}
                  {project.canvaUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.canvaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <FileImage className="w-4 h-4" />
                        View Work
                      </a>
                    </Button>
                  )}
                  {/* View PDF button if pdfUrl exists */}
                  {project.pdfUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View PDF
                      </a>
                    </Button>
                  )}
                  {/* View Manuscript button if manuscriptUrl exists */}
                  {project.manuscriptUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.manuscriptUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Manuscript
                      </a>
                    </Button>
                  )}
                  {/* View Poster button if posterUrl exists */}
                  {project.posterUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.posterUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Poster
                      </a>
                    </Button>
                  )}
                  {/* View Details button if details or gallery exists, except for design-projects */}
                  {(currentCategory !== "design-projects") && (project.details || (project.gallery && project.gallery.length > 0)) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setProjectModal({ project, galleryIndex: 0 })}
                    >
                      View Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details Modal */}
        {detailsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative bg-background rounded-xl shadow-2xl p-6 max-w-2xl w-full flex flex-col items-center border border-border animate-fade-in">
              <button
                className="absolute top-4 right-6 text-3xl font-bold text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setDetailsOpen(null)}
                aria-label="Close"
                tabIndex={0}
              >
                ×
              </button>
              <h2 className="text-2xl font-extrabold mb-4 text-center text-primary">{detailsOpen.title}</h2>
              <div className="w-full max-h-[60vh] overflow-y-auto px-2 py-1 mb-4 rounded bg-muted/40 text-foreground text-base leading-relaxed whitespace-pre-wrap shadow-inner">
                {detailsOpen.details}
              </div>
            </div>
          </div>
        )}

        {/* D&D Image Gallery Modal */}
        {galleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative bg-background rounded-lg shadow-xl p-4 max-w-2xl w-full flex flex-col items-center">
              <button
                className="absolute top-2 right-4 text-2xl font-bold text-muted-foreground hover:text-primary"
                onClick={() => setGalleryOpen(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={galleryOpen[galleryIndex]}
                alt={`D&D Image ${galleryIndex + 1}`}
                className="max-h-[60vh] w-auto rounded mb-4"
                style={{ maxWidth: "100%" }}
              />
              <div className="flex gap-2 mb-2">
                <button
                  className="px-3 py-1 rounded bg-muted text-foreground hover:bg-primary hover:text-white transition"
                  onClick={() => setGalleryIndex(i => (i > 0 ? i - 1 : galleryOpen.length - 1))}
                  disabled={galleryOpen.length <= 1}
                >
                  {"<"}
                </button>
                <span className="text-sm text-muted-foreground">
                  {galleryIndex + 1} / {galleryOpen.length}
                </span>
                <button
                  className="px-3 py-1 rounded bg-muted text-foreground hover:bg-primary hover:text-white transition"
                  onClick={() => setGalleryIndex(i => (i < galleryOpen.length - 1 ? i + 1 : 0))}
                  disabled={galleryOpen.length <= 1}
                >
                  {">"}
                </button>
              </div>
              <div className="flex gap-1 mt-2">
                {galleryOpen.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`thumb-${idx + 1}`}
                    className={`h-10 w-auto rounded border cursor-pointer ${galleryIndex === idx ? "border-primary" : "border-muted"}`}
                    style={{ minWidth: 36, opacity: galleryIndex === idx ? 1 : 0.6 }}
                    onClick={() => setGalleryIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Details Modal with Gallery and Summary */}
        {projectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div
              className="relative bg-background rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col items-center border border-border animate-fade-in"
              style={{
                padding: "2rem 1rem",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* Modal Header: Title and summary centered at top */}
              <div className="w-full flex flex-col items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-2">
                  {projectModal.project.title}
                </h2>
                {/* Sadece C-NIOSH-RWL için summary/description gösterme */}
                {projectModal.project.title !== "C-NIOSH-RWL: Automated Ergonomics Risk Assessment Tool" && projectModal.project.summary && (
                  <div className="text-base text-foreground font-medium text-center bg-muted/40 rounded p-3 max-w-2xl mb-2">
                    {projectModal.project.summary}
                  </div>
                )}
              </div>
              {/* Close button */}
              <button
                className="absolute top-4 right-6 text-3xl font-bold text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setProjectModal(null)}
                aria-label="Close"
                tabIndex={0}
              >
                ×
              </button>
              {/* Main Content: Side by side, equal height boxes */}
              <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
                {/* Left: Info */}
                <div className="flex-1 min-w-[260px] max-w-full md:max-w-[50%] flex flex-col"
                  style={{ display: "flex", flexDirection: "column", height: "56vh" }}>
                  {projectModal.project.details && (
                    <div
                      className="mb-0 rounded-lg shadow-lg border bg-white text-foreground flex-1"
                      style={{
                        height: "100%",
                        overflowY: "auto",
                        padding: "1.1rem 1rem",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        letterSpacing: "0.01em",
                        textAlign: "left",
                        fontFamily: "Segoe UI, Arial, sans-serif",
                        boxSizing: "border-box"
                      }}
                      dangerouslySetInnerHTML={{
                        __html: projectModal.project.details
                          // Academic ve Data Visualization & Eye Tracking başlıklarını bold yap
                          .replace(/^(Category:|Duration:|Team Size:|My Role:|Problem:|Solution:|Impact:|Key Contributions:|Outcomes:|Outcome:|Collaborators:|Technologies & Tools Used:|Implementation Steps:|Findings:)/gm, '<b>$1</b>')
                          .replace(/\n/g, "<br/>")
                      }}
                    />
                  )}
                </div>
                {/* Right: Vertical scrollable gallery, all images visible, clickable (open in new tab) */}
                {projectModal.project.gallery && projectModal.project.gallery.length > 0 && (
                  <div className="flex-1 min-w-[220px] max-w-full md:max-w-[50%] flex flex-col items-center overflow-y-auto rounded-lg"
                    style={{ height: "56vh" }}>
                    <div className="flex flex-col gap-4 w-full items-center">
                      {projectModal.project.gallery.map((img, idx) => (
                        <a
                          key={img}
                          href={img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full flex flex-col items-center border rounded-lg shadow transition-all duration-200 cursor-pointer border-muted group`}
                          style={{
                            background: "#f8f8f8",
                            padding: "0.5rem",
                            maxWidth: 360,
                            textDecoration: "none"
                          }}
                          onClick={() =>
                            setProjectModal(modal =>
                              modal ? { ...modal, galleryIndex: idx } : null
                            )
                          }
                        >
                          <img
                            src={img}
                            alt={`gallery-${idx + 1}`}
                            className="rounded-lg transition-transform duration-200 group-hover:scale-105"
                            style={{
                              width: "100%",
                              maxWidth: 340,
                              maxHeight: 220,
                              objectFit: "contain",
                              border: "1px solid #e5e7eb",
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* PDF link at the bottom, inside modal, always visible */}
              {projectModal.project.pdfUrl && (
                <div className="w-full flex justify-center mt-6 mb-2">
                  <a
                    href={projectModal.project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-border text-foreground font-medium shadow hover:bg-muted transition"
                    style={{
                      fontSize: "1rem",
                      minWidth: 140,
                      justifyContent: "center"
                    }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;