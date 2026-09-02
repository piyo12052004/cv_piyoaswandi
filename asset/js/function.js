function portfolioApp() {
    return {
        theme: 'dark',
        activeSlide: 'development',
        activeContent: 'project',
        searchProject: '',
        searchDevops: '',
        searchDatabase: '',
        searchDeveloper: '',
        searchInfrastructure: '',
        certificateModal: null,

        projects: [
            {
                id: 2,
                category: 'project',
                badge: 'Project',
                badgeColor: 'bg-green-100 text-green-700',
                borderColor: 'border-t-green-500',
                icon: 'fa-solid fa-diagram-project',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 6,
                dateLabel: 'Jun 2026',
                title: 'Asset Inventory Management System',
                subtitle: 'Branch : data-aset-barang',
                description:
                    'A web-based asset inventory management system developed using PHP Native and MySQL. The application manages company assets, categories, suppliers, locations, transactions, and reporting. It is containerized with Docker and deployed automatically using Jenkins CI/CD.',
                tech: ['PHP Native', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Docker', 'Jenkins', 'GitHub'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/project_hanina',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 3,
                category: 'project',
                badge: 'Project',
                badgeColor: 'bg-green-100 text-green-700',
                borderColor: 'border-t-green-500',
                icon: 'fa-solid fa-diagram-project',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 7,
                dateLabel: 'Jul 2026',
                title: 'Personal Portfolio Website',
                subtitle: 'Branch : main',
                description:
                    'A responsive personal portfolio website built with HTML and Tailwind CSS to showcase projects, documentation, skills, and professional experience. The website is hosted using GitHub Pages, allowing anyone to access it directly from a web browser.',
                tech: ['HTML5', 'Tailwind CSS', 'Alpine.js', 'GitHub', 'GitHub Pages'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/project_hanina',
                        icon: 'fa-solid fa-code'
                    },
                    {
                        label: 'Live Demo',
                        url: 'https://haninanurfaizah.github.io/portofolio_nina',
                        icon: 'fa-solid fa-arrow-up-right-from-square'
                    }
                ]
            },
            {
                id: 4,
                category: 'project',
                badge: 'Team Project',
                badgeColor: 'bg-green-100 text-green-700',
                borderColor: 'border-t-green-500',
                icon: 'fa-solid fa-diagram-project',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 1,
                dateLabel: 'Jan 2026',
                title: 'Company Profile Website',
                subtitle: 'Branch : main',
                description:
                    'A responsive company profile website developed collaboratively using Laravel Blade. The project showcases company information, services, portfolio, and contact pages with a clean and modern user interface. Built as a team project following the Laravel MVC architecture.',
                tech: ['Laravel', 'Blade', 'PHP', 'MySQL', 'Bootstrap', 'Git', 'Team Collaboration'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/frelance_company_profile_team_work',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 5,
                category: 'project',
                badge: 'Full Stack Project',
                badgeColor: 'bg-emerald-100 text-emerald-700',
                borderColor: 'border-t-emerald-500',
                icon: 'fa-solid fa-layer-group',
                hoverColor: 'hover:text-emerald-600',
                year: 2026,
                month: 4,
                dateLabel: 'Apr 2026',
                title: 'Product Management Application',
                subtitle: 'Branch : main',
                description:
                    'A modern full-stack product management application built with a decoupled architecture using Nuxt 3, NestJS, Laravel 11 Filament, and PostgreSQL. The project includes a responsive frontend, RESTful API backend, and an administrative dashboard for complete product management.',
                tech: ['Nuxt 3', 'NestJS', 'Laravel 11', 'Filament', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'Full Stack'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/nuxt-nest-filament-product-app',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 6,
                category: 'project',
                badge: 'JavaScript Project',
                badgeColor: 'bg-yellow-100 text-yellow-700',
                borderColor: 'border-t-yellow-500',
                icon: 'fa-solid fa-calculator',
                hoverColor: 'hover:text-yellow-600',
                year: 2025,
                month: 7,
                dateLabel: 'Jul 2025',
                title: 'Simply Supported Beam Analysis',
                subtitle: 'Branch : calculator-test',
                description:
                    'A JavaScript-based engineering calculation application for analyzing simply supported beams. The project calculates support reactions and internal forces based on beam loading conditions, following the provided engineering calculation model.',
                tech: ['JavaScript', 'HTML5', 'CSS3', 'Engineering Calculation', 'Beam Analysis'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/piyo-assignment/tree/calculator-test',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 7,
                category: 'project',
                badge: 'Laravel Project',
                badgeColor: 'bg-red-100 text-red-700',
                borderColor: 'border-t-red-500',
                icon: 'fa-solid fa-laptop-code',
                hoverColor: 'hover:text-red-600',
                year: 2025,
                month: 7,
                dateLabel: 'Jul 2025',
                title: 'Supplier & CLT Management System',
                subtitle: 'Branch : feature-test',
                description:
                    'A Laravel-based management system for handling Suppliers, CLT Layups, and Layers with a hierarchical data structure. The application supports full CRUD operations, data import/export, conflict resolution during import, and follows Laravel best practices for scalable development.',
                tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Import / Export', 'CRUD', 'Repository Pattern', 'Feature Testing'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/piyo-assignment/tree/feature-test',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 8,
                category: 'project',
                badge: '3D Graphics Project',
                badgeColor: 'bg-indigo-100 text-indigo-700',
                borderColor: 'border-t-indigo-500',
                icon: 'fa-solid fa-cube',
                hoverColor: 'hover:text-indigo-600',
                year: 2025,
                month: 7,
                dateLabel: 'Jul 2025',
                title: '3D Wood Model Viewer',
                subtitle: 'Branch : three-dimension-test',
                description:
                    'A JavaScript-based 3D visualization project built with Three.js to render an interactive wooden model from an FBX file. The application recreates a realistic 3D scene with camera controls, lighting, and accurate model scaling.',
                tech: ['JavaScript', 'Three.js', 'WebGL', 'FBX Loader', 'HTML5', 'CSS3'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/piyo-assignment/tree/three-dimension-test',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 9,
                category: 'project',
                badge: 'Desktop Application',
                badgeColor: 'bg-cyan-100 text-cyan-700',
                borderColor: 'border-t-cyan-500',
                icon: 'fa-solid fa-desktop',
                hoverColor: 'hover:text-cyan-600',
                year: 2026,
                month: 4,
                dateLabel: 'Apr 2026',
                title: 'Parking Entry Management System',
                subtitle: 'Branch : main',
                description:
                    'A desktop-based parking entry management system developed with Python and PyQt5. The application records incoming vehicles using QR Code / Barcode scanning or manual license plate input, automatically stores entry time, and saves parking data into a database.',
                tech: ['Python', 'PyQt5', 'OpenCV', 'QR Code', 'SQLite', 'MySQL'],
                links: [
                    {
                        label: 'View Source Code',
                        url: 'https://github.com/piyo12052004/in_parkir_system_pyqt',
                        icon: 'fa-solid fa-arrow-up-right-from-square'
                    }
                ]
            },
            {
                id: 10,
                category: 'project',
                badge: 'Desktop Application',
                badgeColor: 'bg-orange-100 text-orange-700',
                borderColor: 'border-t-orange-500',
                icon: 'fa-solid fa-right-to-bracket',
                hoverColor: 'hover:text-orange-600',
                year: 2026,
                month: 4,
                dateLabel: 'Apr 2026',
                title: 'Parking Exit Management System',
                subtitle: 'Branch : main',
                description:
                    'A desktop-based parking exit management system developed using Python and PyQt5. The application processes outgoing vehicles through QR Code / Barcode scanning or manual license plate input, updates parking records, and synchronizes data with the database in real time.',
                tech: ['Python', 'PyQt5', 'OpenCV', 'QR Code', 'SQLite', 'MySQL'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/out_parkir_system_pyqt',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 11,
                category: 'project',
                badge: 'Laravel Web App',
                badgeColor: 'bg-rose-100 text-rose-700',
                borderColor: 'border-t-rose-500',
                icon: 'fa-solid fa-film',
                hoverColor: 'hover:text-rose-600',
                year: 2026,
                month: 2,
                dateLabel: 'Feb 2026',
                title: 'Movie Information Application',
                subtitle: 'Branch : main',
                description:
                    'A Laravel-based movie information application integrated with the OMDb API. Users can search for movies, view detailed movie information, save favorite movies, and manage their personal favorite list through a responsive web interface.',
                tech: ['Laravel 5.5', 'PHP', 'Blade', 'Tailwind CSS', 'PostgreSQL', 'OMDb API', 'Guzzle HTTP'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/laravel-movie-app',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 12,
                category: 'project',
                badge: 'Full Stack Project',
                badgeColor: 'bg-violet-100 text-violet-700',
                borderColor: 'border-t-violet-500',
                icon: 'fa-solid fa-layer-group',
                hoverColor: 'hover:text-violet-600',
                year: 2025,
                month: 2,
                dateLabel: 'Feb 2025',
                title: 'Dynamic Portfolio Website',
                subtitle: 'Branch : main',
                description:
                    'A dynamic portfolio website built with a decoupled architecture, using Vue.js for the frontend and Laravel REST API for the backend. The application integrates PostgreSQL for data management and supports Google Authentication for secure user login.',
                tech: ['Vue.js', 'Laravel', 'REST API', 'PostgreSQL', 'Google OAuth', 'JWT Authentication', 'Full Stack'],
                note: 'Backend: Private',
                links: [
                    {
                        label: 'Source Code Frontend',
                        url: 'https://github.com/piyo12052004/portofolio_piyo_fe',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 13,
                category: 'project',
                badge: 'Laravel Project',
                badgeColor: 'bg-orange-100 text-orange-700',
                borderColor: 'border-t-orange-500',
                icon: 'fa-solid fa-graduation-cap',
                hoverColor: 'hover:text-orange-600',
                year: 2025,
                month: 4,
                dateLabel: 'Apr 2025',
                title: 'Online Student Admission System (PPDB)',
                subtitle: 'Branch : dev',
                description:
                    'A Laravel-based online student admission (PPDB) system featuring applicant registration, an administrative dashboard, and integrated online payments using the Midtrans Payment Gateway. The application streamlines the admission process from registration through payment verification.',
                tech: ['Laravel', 'PHP', 'MySQL', 'Midtrans', 'Payment Gateway', 'Bootstrap', 'Admin Dashboard'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/frelance_ppdb_sekolah/tree/dev',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 14,
                category: 'project',
                badge: 'Portfolio Website',
                badgeColor: 'bg-emerald-100 text-emerald-700',
                borderColor: 'border-t-emerald-500',
                icon: 'fa-solid fa-globe',
                hoverColor: 'hover:text-emerald-600',
                year: 2025,
                month: 8,
                dateLabel: 'Aug 2025',
                title: 'Freelance Portfolio – Natanusa',
                subtitle: 'Branch : production',
                description:
                    'A modern and responsive portfolio website developed using Vue.js. The application showcases company information, services, featured projects, and contact details with a clean user interface and component-based architecture for maintainability and scalability.',
                tech: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'GitHub'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/freelance_profile_natanusa/tree/production',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 15,
                category: 'project',
                badge: 'E-Commerce Project',
                badgeColor: 'bg-orange-100 text-orange-700',
                borderColor: 'border-t-orange-500',
                icon: 'fa-solid fa-cart-shopping',
                hoverColor: 'hover:text-orange-600',
                year: 2025,
                month: 5,
                dateLabel: 'May 2025',
                title: 'Online Store Management System',
                subtitle: 'Branch : production',
                description:
                    'A web-based e-commerce application developed using PHP Native and MySQL. The system enables customers to browse products, manage shopping activities, and supports product management through an administrative interface.',
                tech: ['PHP Native', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/frelance-toko_oneline/tree/production',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 16,
                category: 'project',
                badge: 'Laravel Project',
                badgeColor: 'bg-teal-100 text-teal-700',
                borderColor: 'border-t-teal-500',
                icon: 'fa-solid fa-car-side',
                hoverColor: 'hover:text-teal-600',
                year: 2025,
                month: 0,
                dateLabel: '2025',
                title: 'Car Rental Management System',
                subtitle: 'Branch : main',
                description:
                    'A web-based car rental management system developed using Laravel and PostgreSQL. The application provides complete CRUD functionality for managing vehicle data, rental transactions, customer information, and rental records through an intuitive web interface.',
                tech: ['Laravel', 'PHP', 'PostgreSQL', 'Bootstrap', 'CRUD', 'MVC'],
                links: [
                    {
                        label: 'Source Code',
                        url: 'https://github.com/piyo12052004/peminjaman_mobil',
                        icon: 'fa-solid fa-code'
                    }
                ]
            },
            {
                id: 17,
                category: 'devops',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 7,
                dateLabel: 'Jun 2026',
                title: 'CI/CD GitHub, Jenkins, and Docker',
                subtitle: 'CI/CD',
                description:
                    'Documentation of a CI/CD pipeline implementation using GitHub, Jenkins, and Docker. Covers GitHub Webhook integration, automated build and deployment processes, Docker image creation, container deployment, and Jenkins pipeline configuration to streamline software delivery.',
                tech: ['GitHub', 'Jenkins', 'Docker'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://docs.google.com/document/d/1gvPX8GdwfEl7_188AcA9DHOOvrrdOwTCx8qfJFnyvAw/edit?usp=sharing',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            },
            {
                id: 18,
                category: 'devops',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 7,
                dateLabel: 'Jul 2026',
                title: 'Deploy Flask Application on Linux VPS',
                subtitle: 'Docker, MySQL, Nginx & SSL',
                description:
                    "Comprehensive deployment documentation for a Flask-based CoffeeShop Recommendation application on an Ubuntu VPS. Covers Docker, Docker Compose, MySQL 8.0, Docker Networking, phpMyAdmin, Nginx Reverse Proxy, Let's Encrypt SSL, database import, and deployment verification.",
                tech: ['Ubuntu Server', 'Linux', 'Docker', 'Docker Compose', 'Python', 'Flask', 'MySQL 8.0', 'phpMyAdmin', 'Nginx', "Let's Encrypt", 'Certbot', 'GitHub'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://docs.google.com/document/d/1MbyUQyaFgzxMuhPr5NUlJuNeFtmL5Wjpyhlb1MyCijs/edit?usp=sharing',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            },
            {
                id: 19,
                category: 'developer',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 9,
                dateLabel: 'Sep 2026',
                title: 'HTML Fundamentals Guide',
                subtitle: 'Basic HTML documentation covering web structure and essential elements',
                description:
                    'Comprehensive introductory guide covering foundational web structure concepts: HTML document boilerplate, tags, attributes, headings, paragraphs, hyperlinks, images, lists, tables, forms, and semantic elements.',
                tech: ['HTML5', 'Semantic HTML', 'HTML Elements', 'HTML Forms', 'HTML Tables'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://www.figma.com/slides/NvXepyCkQgAlo1xw7DjqWK',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            },
            {
                id: 20,
                category: 'developer',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 9,
                dateLabel: 'Sep 2026',
                title: 'Git Version Control Fundamentals',
                subtitle: 'Basic Git documentation for source code versioning and repository management',
                description:
                    'Introductory Git guide explaining version control fundamentals, installation and setup, working directory, staging area, commits, branch handling, and core CLI commands to track project changes.',
                tech: ['Git', 'Git Bash', 'GitHub', 'Repository', 'Commit', 'Version Control'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://www.figma.com/slides/BLMhvBlvnxHbqHJO92Job4',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            },
            {
                id: 21,
                category: 'infrastructure',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 7,
                dateLabel: 'Jul 2026',
                title: 'Kubernetes Hands-on Guide',
                subtitle: 'Kubernetes Fundamentals, Pods & Hands-on Labs',
                description:
                    'Comprehensive Kubernetes learning documentation covering Kubernetes fundamentals, modern infrastructure evolution, environment setup with MicroK8s, kubectl configuration, Pod architecture, Pod lifecycle, imperative and declarative resource management, YAML manifests, and hands-on exercises. Created as a structured learning guide to build a strong foundation before exploring Deployments, Services, Ingress, Helm, and Google Kubernetes Engine (GKE).',
                tech: ['Kubernetes', 'MicroK8s', 'kubectl', 'YAML'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://docs.google.com/document/d/1mkCc03OLioTqhpb6zcyJi1b5_Nq-h3EFTQbD2xoSCqU/edit?usp=sharing',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            },
            {
                id: 1,
                category: 'infrastructure',
                badge: 'Documentation',
                badgeColor: 'bg-blue-100 text-blue-700',
                borderColor: 'border-t-blue-500',
                icon: 'fa-solid fa-file-lines',
                hoverColor: 'hover:text-blue-600',
                year: 2026,
                month: 7,
                dateLabel: 'Jul 2026',
                title: 'Terraform GCP Documentation',
                subtitle: 'Google Cloud Platform',
                description:
                    'Comprehensive documentation covering Terraform modules, Google Cloud infrastructure, VPC, Compute Engine, Cloud NAT, Cloud SQL, IAM, Monitoring, Infrastructure as Code (IaC), and deployment best practices for production environments.',
                tech: ['Terraform', 'Google Cloud', 'DevOps', 'Infrastructure as Code', 'Cloud Computing'],
                links: [
                    {
                        label: 'View Documentation',
                        url: 'https://docs.google.com/document/d/1le4eUokA1sMhx1qKFlUpiBwa7GGoF05Y29OKZYsFMKw/edit?usp=sharing',
                        icon: 'fa-solid fa-arrow-up-right-from-square text-sm'
                    }
                ]
            }
        ],

        get projectItems() {
            return this.projects.filter(project => project.category === 'project');
        },

        get devopsProjects() {
            return this.projects.filter(project => project.category === 'devops');
        },

        get databaseDocumentasi() {
            return this.projects.filter(project => project.category === 'database');
        },

        get developerDokumentasi() {
            return this.projects.filter(project => project.category === 'developer');
        },

        get infrastructureDokumentasi() {
            return this.projects.filter(project => project.category === 'infrastructure');
        },

        get filteredProjects() {
            const search = this.searchProject.toLowerCase().trim();
            if (!search) return this.projectItems;

            return this.projectItems.filter(project => {
                const title = project.title?.toLowerCase() || '';
                const subtitle = project.subtitle?.toLowerCase() || '';
                const badge = project.badge?.toLowerCase() || '';
                const description = project.description?.toLowerCase() || '';
                const technologies = (project.tech || []).join(' ').toLowerCase();

                return (
                    title.includes(search) ||
                    subtitle.includes(search) ||
                    badge.includes(search) ||
                    description.includes(search) ||
                    technologies.includes(search)
                );
            });
        },

        get filteredDevopsProjects() {
            const search = this.searchDevops.toLowerCase().trim();
            if (!search) return this.devopsProjects;

            return this.devopsProjects.filter(project => {
                const title = project.title?.toLowerCase() || '';
                const subtitle = project.subtitle?.toLowerCase() || '';
                const badge = project.badge?.toLowerCase() || '';
                const description = project.description?.toLowerCase() || '';
                const technologies = (project.tech || []).join(' ').toLowerCase();

                return (
                    title.includes(search) ||
                    subtitle.includes(search) ||
                    badge.includes(search) ||
                    description.includes(search) ||
                    technologies.includes(search)
                );
            });
        },

        get filteredDatabaseProjects() {
            const search = this.searchDatabase.toLowerCase().trim();
            if (!search) return this.databaseDocumentasi;

            return this.databaseDocumentasi.filter(project => {
                const title = project.title?.toLowerCase() || '';
                const subtitle = project.subtitle?.toLowerCase() || '';
                const badge = project.badge?.toLowerCase() || '';
                const description = project.description?.toLowerCase() || '';
                const technologies = (project.tech || []).join(' ').toLowerCase();

                return (
                    title.includes(search) ||
                    subtitle.includes(search) ||
                    badge.includes(search) ||
                    description.includes(search) ||
                    technologies.includes(search)
                );
            });
        },

        get filteredDeveloper() {
            const search = this.searchDeveloper.toLowerCase().trim();
            if (!search) return this.developerDokumentasi;

            return this.developerDokumentasi.filter(project => {
                const title = project.title?.toLowerCase() || '';
                const subtitle = project.subtitle?.toLowerCase() || '';
                const badge = project.badge?.toLowerCase() || '';
                const description = project.description?.toLowerCase() || '';
                const technologies = (project.tech || []).join(' ').toLowerCase();

                return (
                    title.includes(search) ||
                    subtitle.includes(search) ||
                    badge.includes(search) ||
                    description.includes(search) ||
                    technologies.includes(search)
                );
            });
        },

        get filteredInfrastructure() {
            const search = this.searchInfrastructure.toLowerCase().trim();
            if (!search) return this.infrastructureDokumentasi;

            return this.infrastructureDokumentasi.filter(project => {
                const title = project.title?.toLowerCase() || '';
                const subtitle = project.subtitle?.toLowerCase() || '';
                const badge = project.badge?.toLowerCase() || '';
                const description = project.description?.toLowerCase() || '';
                const technologies = (project.tech || []).join(' ').toLowerCase();

                return (
                    title.includes(search) ||
                    subtitle.includes(search) ||
                    badge.includes(search) ||
                    description.includes(search) ||
                    technologies.includes(search)
                );
            });
        },

        activeCertificate: 0,

        certificates: [
            {
                id: 1,
                badge: 'Work Experience Certificate',
                title: 'Certificate of Employment',
                description:
                    'Certificate of employment from PT Jasamedika Saranatama verifying completed tenure and contributions to the development of IT-based systems and applications.',
                image: 'asset/sertifikat_jasmed.jpeg',
                url: 'https://drive.google.com/file/d/1khA_G4-ErLRl1b5ax1PRQ1lct124ZGEN/view?usp=drive_link'
            },
            {
                id: 2,
                badge: 'BBPVP Certificate',
                title: 'Junior Web Developer Training',
                description:
                    'Certificate of completion for the Junior Web Developer vocational training at BBPVP Bekasi, covering web development fundamentals, HTML, CSS, JavaScript, databases, and standard industry practices.',
                image: 'asset/setifikat_bbpvp.jpeg',
                url: 'https://drive.google.com/file/d/1GZimXp7tX_L3cFrOWFL_xvTXHrmvSgYK/view?usp=drive_link'
            },
            {
                id: 3,
                badge: 'Competency Certificate',
                title: 'Junior Web Developer Competency Certificate',
                description:
                    'National competency certificate certifying successful qualification in the Junior Web Developer competency assessment, demonstrating proficiency in web application development against national standards.',
                image: 'asset/sertifikat-bbpvp-kompetensi.jpeg',
                url: 'https://drive.google.com/file/d/1dew8desS_XVJNzPGI2g3vObVg_2NWcqj/view?usp=drive_link'
            },
            {
                id: 4,
                badge: 'Seminar Certificate',
                title: 'Metaverse: The Future of Virtual Technology',
                description:
                    'Certificate of participation in a technology seminar discussing the metaverse and emerging virtual world trends, held on August 8, 2023.',
                image: 'asset/ser-2.jpeg',
                url: 'https://drive.google.com/file/d/1ffliZrWs3xICKtxLZWJWmMibve0MZJR3/view?usp=drive_link'
            }
        ],

        nextCertificate() {
            if (!this.certificates.length) return;
            this.activeCertificate = (this.activeCertificate + 1) % this.certificates.length;
        },

        prevCertificate() {
            if (!this.certificates.length) return;
            this.activeCertificate = (this.activeCertificate - 1 + this.certificates.length) % this.certificates.length;
        },

        selectCertificate(index) {
            this.activeCertificate = index;
        },

        getCertificateStyle(index) {
            const total = this.certificates.length;
            if (!total) return '';

            const current = this.activeCertificate;
            let position = index - current;

            if (position > total / 2) position -= total;
            if (position < -total / 2) position += total;

            if (position === 0) {
                return `
            transform: translate(-50%, -50%) translateX(0) scale(1);
            opacity: 1;
            z-index: 30;
            pointer-events: auto;
          `;
            }

            if (position === -1) {
                return `
            transform: translate(-50%, -50%) translateX(-82%) scale(.82);
            opacity: .25;
            z-index: 20;
            pointer-events: none;
          `;
            }

            if (position === 1) {
                return `
            transform: translate(-50%, -50%) translateX(82%) scale(.82);
            opacity: .25;
            z-index: 20;
            pointer-events: none;
          `;
            }

            return `
          transform: translate(-50%, -50%) scale(.7);
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        `;
        },

        init() {
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            this.theme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
            this.applyTheme();
        },

        applyTheme() {
            document.body.classList.toggle('light-mode', this.theme === 'light');
        },

        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
            this.applyTheme();
        }
    };
}