const PERSONAL_DETAILS = {
    name: "Shubham Sharma",
    title: "AI & Full Stack Engineer",
    phone: "+91 8859499262",
    email: "shubham12sharma06@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubham-sharma-ss8859/",
    github: "https://github.com/shubham8859",
    location: "Chandigarh, India",
    locationMap: "https://www.google.com/maps?q=Chandigarh,+India",
    gitRepositories: [
        {
            name: "Agent Studio Platform",
            link: "https://github.com/dummy/agent-studio",
            description: "Repository for the Agent Studio platform showcasing pro-code and low-code agent creation."
        },
        {
            name: "Generative AI Service",
            link: "https://github.com/dummy/generative-ai-service",
            description: "Repository for the Generative AI Service with advanced RAG and Chain of Thought implementations."
        }
    ],
    certifications: [
        {
            name: "Infosys Python Developer",
            link: "",
            description: "Certification for Python development expertise."
        },
        {
            name: "Infosys Responsible AI Landscape",
            link: "",
            description: "Certification for understanding responsible AI practices."
        },
        {
            name: "Infosys AI Consumering Developer",
            link: "",
            description: "Certification for AI consumer applications."
        },
        {
            name: "Infosys AI Professional",
            link: "https://www.infosys.com/certifications/ai-professional",
            description: "Certification for professional AI expertise."
        },
        {
            name: "Infosys Certified Spring Developer",
            link: "https://www.infosys.com/certifications/spring-developer",
            description: "Certification for Spring development expertise."
        }
    ],
    summary: "Highly accomplished and innovative AI & Full Stack Engineer with a strong background in Full Stack Development and 3+ years of experience specializing in Generative AI, AI Platform Development, and Conversational AI. Proven leader in designing, developing, and deploying cutting-edge AI solutions, with expertise in end-to-end project lifecycle management, team leadership, and advanced framework integration. Passionate about leveraging AI to drive business value and enhance user experiences.",
    skills: [
        {
            name: "Languages",
            icon: "fas fa-code",
            skills: ["Python", "Java", "HTML", "CSS", "SCSS", "TypeScript"]
        },
        {
            name: "Frameworks",
            icon: "fas fa-cogs",
            skills: ["Spring Boot", "Angular", "Streamlit"]
        },
        {
            name: "AI Frameworks",
            icon: "fas fa-brain",
            skills: ["LangChain", "LangGraph", "CrewAI", "Google ADK", "MCP"]
        },
        {
            name: "Databases",
            icon: "fas fa-database",
            skills: ["PostgreSQL", "ChromaDB", "SQLite", "Redis"]
        },
        {
            name: "DevOps & Tools",
            icon: "fas fa-tools",
            skills: ["Docker", "Git", "REST APIs", "OAuth 2.0", "OIDC"]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology",
            field: "Computer Science and Engineering",
            institution: "SRMS College of Engineering Technology and Research",
            location: "Bareilly, Uttar Pradesh",
            duration: "May 2017 – May 2021"
        },
        {
            degree: "Higher Secondary Education",
            field: "Science (PCM)",
            institution: "DAV Senior Secondary School",
            location: "Haldwani, Uttrakhand",
            duration: "2015 – 2017"
        }
    ],
    experience: [
        {
            title: "Senior Systems Engineer",
            company: "Applied AI Platform (Advanced Research Center)",
            location: "Chandigarh",
            duration: "Feb 2024 – Present",
            projects: [
                {
                    name: "Agent Studio Platform",
                    achievements: [
                        "Led the development and architecture of an Agent Studio, a versatile platform supporting both pro-code and low-code/no-code agent creation, real-time testing, deployment, and log monitoring (Loki, LLM traces) internal/external APIs.",
                        "Engineered and integrated complex workflow orchestration capabilities, enabling the creation of multi-agent and tool-based low-code solutions.",
                        "Optimized deployment with Knative Service for agents and robust job scheduling, preventing system overload.",
                        "Drove project success through development, code reviews, demos, and architectural design."
                    ],
                    technologies: ["Python", "Java", "Spring Boot", "Angular", "Generative AI Frameworks (LangChain, LangGraph, CrewAI, Google ADK, MCP)", "Kubernetes", "Knative Service"]
                },
                {
                    name: "Generative AI Service",
                    achievements: [
                        "Designed and developed an Agentic System with advanced RAG and Chain of Thought, ensuring real-time processing and data privacy.",
                        "Integrated the Agentic System with the Infosys Chatbot Platform, enhancing conversational intelligence.",
                        "Innovated and showcased two key applications at Mobile World Congress and NVIDIA Summit 2024:",
                        " Interviewing Agent (Streamlined candidate evaluation with AI-driven insights)",
                        " ITSM Agent (Automated IT service management tasks for improved efficiency)."
                    ],
                    technologies: ["Python", "Streamlit", "Generative AI Frameworks (LangChain, LangGraph, CrewAI)", "SpringBoot"]
                }
            ]
        },
        {
            title: "Systems Engineer",
            company: "Infosys",
            location: "Chandigarh",
            duration: "Feb 2022 – Feb 2024",
            projects: [
                {
                    name: "Infosys Chatbot Platform",
                    achievements: [
                        "Worked with a cross-functional team to successfully integrate Generative AI functionalities into the Infosys Chatbot Platform.",
                        "Implemented document-based query processing and image analysis, achieving a processing time of 30-40 seconds for a normal 1-page document."
                    ],
                    technologies: ["Python", "Generative AI Frameworks", "REST APIs", "Kubernetes"]
                },
                {
                    name: "Infosys Conversational AI Suite",
                    achievements: [
                        "Implemented OAuth 2.0 with OpenID Connect (OIDC) Authentication via Keycloak, enhancing platform security.",
                        "Developed and integrated REST API Microservices to enable seamless communication between modules."
                    ],
                    technologies: ["Keycloak", "REST APIs", "OAuth 2.0", "OIDC"]
                },
                {
                    name: "Conversational Testing Platform",
                    achievements: [
                        "Developed automated Test-Suite creation module via RESTful APIs, significantly reducing resource needs.",
                        "Enabled generation of hundreds of thousands of test suites in 4-5 minutes.",
                        "Managed and optimized underlying database structures to support rapid test suite generation.",
                        "Designed REST API Microservices to handle test suite creation and execution workflows efficiently."
                    ],
                    technologies: ["REST APIs", "PostgreSQL", "Python", "Automation Frameworks"]
                }
            ]
        }
    ]
};