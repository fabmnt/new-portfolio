from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"


RESUMES = {
    "en": {
        "filename": "fabian-montoya-cv-en.pdf",
        "name": "Fabian Oswaldo Montoya Palma",
        "title": "Full Stack Engineer | Automation Engineer",
        "contact": (
            "Nicaragua - "
            '<link href="mailto:fabianmontoya2802@gmail.com" color="blue">fabianmontoya2802@gmail.com</link>'
            " - +505 8771 5943 - "
            '<link href="https://fabmnt.dev" color="blue">https://fabmnt.dev</link>'
        ),
        "summary": (
            "Full Stack Engineer with 3+ years building internal systems, automation tooling, and AI-integrated workflows "
            "for operations teams. Strong in React, Next.js, Angular, Node.js, .NET, Python, and data-heavy interfaces, "
            "with experience supporting 150 internal users and increasing verification throughput by 10x."
        ),
        "section_titles": {
            "experience": "Professional Experience",
            "freelance": "Freelance",
            "skills": "Technical Skills",
            "education": "Education",
        },
        "experience": [
            {
                "company": "Dentalrobot.ai",
                "period": "Oct 2022 - Present",
                "role": "Full Stack & RPA Developer",
                "description": "Automation company focused on high-volume dental appointment verification for U.S. insurers.",
                "bullets": [
                    "Maintain and extend CC (Control Central), the company's cross-team workflow management system used by 150 internal users, improving Angular-based UX, accessibility, stability, and scalability.",
                    "Built Formless, a browser-based editor for table- and bookmark-driven patient audit forms, replacing fragile DOCX editing workflows and moving audit review directly into the main system.",
                    "Developed the Parallel Engine in Python to execute verification robots concurrently, increasing patient verification throughput by 10x in the same time window while keeping resource usage controlled.",
                    "Built the Rocketbot Interpreter with FastAPI and Docker Compose using Python 3.12 and 3.6 services, centralized logs, reproducible debugging, and parallel execution support, eliminating the complex Windows setup previously required to test and review robots with real company data.",
                ],
            },
            {
                "company": "Roca Company Solutions",
                "period": "Apr 2025 - Mar 2026",
                "role": "Frontend Web Developer",
                "description": "Company providing DMV, vehicle insurance, and product operations services in the U.S.",
                "bullets": [
                    "Built the frontend from scratch for Maya, the company's first operations dashboard for DMV cases, insurance, products, invoices, and service management, delivering the initial system in 3 months with React, Vite, TanStack Query, and TanStack Table.",
                    "Designed spreadsheet-familiar interfaces and helped migrate high-volume operational data from Google Sheets into Maya, reducing friction for existing users moving into the new system.",
                    "Implemented exports to XLSX, PDF, and images and optimized data-heavy modules for fast rendering across cases, clients, products, insurance, users, and logs.",
                ],
            },
        ],
        "freelance": [
            "Built and maintained websites for small organizations with WordPress and other CMS platforms, including ASOHUMA, with features such as SEO, event calendars, forms, email delivery, and WhatsApp integration.",
        ],
        "skills": [
            "Frontend: React, Next.js, Angular, TypeScript, Astro, TanStack Query, TanStack Table, Redux Toolkit, Zustand.",
            "Backend and APIs: Node.js, FastAPI, .NET, REST APIs, SQL Server, MySQL, Supabase, MongoDB Atlas, AWS RDS.",
            "Automation and testing: Python, Selenium, Playwright, Beautiful Soup, scraping, workflow tooling, and data analysis.",
            "AI integrations and product workflow: frontend AI integrations, backend AI integrations, internal tooling, and operations-focused interfaces.",
            "UI and developer workflow: Tailwind CSS, shadcn/ui, React Aria, Bootstrap, GitHub Actions, Vitest, Testing Library.",
            "Languages: Spanish (Native). English: Fluent reading and listening, intermediate writing, basic speaking.",
        ],
        "education": [
            "Information Systems Engineering, Universidad Nacional Autonoma de Nicaragua - Leon, graduated 2024.",
            "International Ethical Hacking and Cybersecurity Course, Universidad Nacional de Ingenieria, 2024.",
            "General Accounting Technician, Instituto Nacional Tecnologico, 2024.",
        ],
    },
    "es": {
        "filename": "fabian-montoya-cv-es.pdf",
        "name": "Fabian Oswaldo Montoya Palma",
        "title": "Ingeniero Full Stack | Ingeniero de Automatización",
        "contact": (
            "Nicaragua - "
            '<link href="mailto:fabianmontoya2802@gmail.com" color="blue">fabianmontoya2802@gmail.com</link>'
            " - +505 8771 5943 - "
            '<link href="https://fabmnt.dev" color="blue">https://fabmnt.dev</link>'
        ),
        "summary": (
            "Ingeniero Full Stack con más de 3 años construyendo sistemas internos, herramientas de automatización "
            "y flujos con integraciones de IA para equipos operativos. Fuerte en React, Next.js, Angular, Node.js, "
            ".NET, Python e interfaces con grandes volúmenes de datos, con experiencia soportando 150 usuarios "
            "internos y aumentando 10x el rendimiento de verificación."
        ),
        "section_titles": {
            "experience": "Experiencia Profesional",
            "freelance": "Freelance",
            "skills": "Habilidades Técnicas",
            "education": "Educación",
        },
        "experience": [
            {
                "company": "Dentalrobot.ai",
                "period": "Oct 2022 - Presente",
                "role": "Desarrollador Full Stack y RPA",
                "description": "Empresa de automatización enfocada en verificaciones masivas de citas dentales para aseguradoras de EE. UU.",
                "bullets": [
                    "Mantengo y extiendo CC (Control Central), el sistema de gestión de flujos cross-team de la empresa usado por 150 usuarios internos, mejorando UX en Angular, accesibilidad, estabilidad y escalabilidad.",
                    "Construí Formless, un editor en navegador para formularios de auditoría de pacientes basados en tablas y bookmarks, reemplazando flujos frágiles con DOCX y llevando la revisión directamente al sistema principal.",
                    "Desarrollé el motor Parallel en Python para ejecutar robots de verificación de forma concurrente, aumentando 10x el volumen de verificaciones de pacientes en la misma ventana de tiempo con uso controlado de recursos.",
                    "Construí Rocketbot Interpreter con FastAPI y Docker Compose usando servicios en Python 3.12 y 3.6, logs centralizados, depuración reproducible y soporte para ejecuciones paralelas, eliminando la configuración compleja en Windows que antes se necesitaba para probar y revisar robots con datos reales de la empresa.",
                ],
            },
            {
                "company": "Roca Company Solutions",
                "period": "Abr 2025 - Mar 2026",
                "role": "Desarrollador Web Frontend",
                "description": "Empresa que presta servicios operativos para casos DMV, seguros de vehículos y productos en EE. UU.",
                "bullets": [
                    "Construí desde cero el frontend de Maya, el primer dashboard operativo de la empresa para casos DMV, seguros, productos, facturas y gestión de servicios, entregando la versión inicial en 3 meses con React, Vite, TanStack Query y TanStack Table.",
                    "Diseñé interfaces familiares para usuarios acostumbrados a hojas de cálculo y apoyé la migración de grandes volúmenes de datos desde Google Sheets hacia Maya, reduciendo fricción en la adopción del sistema.",
                    "Implementé exportaciones a XLSX, PDF e imágenes y optimicé módulos con grandes volúmenes de datos para lograr renderizado rápido en casos, clientes, productos, seguros, usuarios y logs.",
                ],
            },
        ],
        "freelance": [
            "Creé y mantuve sitios web para pequeñas organizaciones con WordPress y otros CMS, incluyendo ASOHUMA, con funciones como SEO, calendario de eventos, formularios, envío de correos e integración con WhatsApp.",
        ],
        "skills": [
            "Frontend: React, Next.js, Angular, TypeScript, Astro, TanStack Query, TanStack Table, Redux Toolkit, Zustand.",
            "Backend y APIs: Node.js, FastAPI, .NET, REST APIs, SQL Server, MySQL, Supabase, MongoDB Atlas, AWS RDS.",
            "Automatización y testing: Python, Selenium, Playwright, Beautiful Soup, scraping, herramientas de flujo y análisis de datos.",
            "Integraciones de IA y flujo de producto: integraciones de IA en frontend y backend, herramientas internas e interfaces orientadas a operaciones.",
            "UI y flujo de desarrollo: Tailwind CSS, shadcn/ui, React Aria, Bootstrap, GitHub Actions, Vitest, Testing Library.",
            "Idiomas: Español nativo. Inglés: lectura y escucha fluidas, escritura intermedia, conversación básica.",
        ],
        "education": [
            "Ingeniería en Sistemas de Información, Universidad Nacional Autónoma de Nicaragua - León, graduado en 2024.",
            "Curso Internacional de Hacking Ético y Ciberseguridad, Universidad Nacional de Ingeniería, 2024.",
            "Técnico en Contabilidad General, Instituto Nacional Tecnológico, 2024.",
        ],
    },
}


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeName",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=19.5,
            leading=21.5,
            alignment=TA_CENTER,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeTitle",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#333333"),
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=11.8,
            alignment=TA_CENTER,
            textColor=colors.black,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Summary",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.1,
            leading=13.2,
            alignment=TA_LEFT,
            spaceAfter=9,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=15.5,
            spaceBefore=5,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Company",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=12.4,
            leading=13.6,
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Period",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.1,
            leading=12.5,
            alignment=TA_RIGHT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Role",
            parent=styles["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=10.2,
            leading=11.8,
            textColor=colors.HexColor("#444444"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Description",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.7,
            leading=11.8,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.45,
            leading=11.45,
            leftIndent=14,
            firstLineIndent=0,
            spaceAfter=1,
        )
    )
    return styles


def make_bullet_list(items, bullet_style):
    paragraphs = [Paragraph(f"&#8226; {item}", bullet_style) for item in items]
    paragraphs.append(Spacer(1, 4))
    return paragraphs


def build_resume(data):
    output_path = PUBLIC_DIR / data["filename"]
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=letter,
        leftMargin=0.56 * inch,
        rightMargin=0.56 * inch,
        topMargin=0.42 * inch,
        bottomMargin=0.36 * inch,
        title=data["name"],
        author="Fabian Montoya",
    )

    story = [
        Paragraph(data["name"], styles["ResumeName"]),
        Paragraph(data["title"], styles["ResumeTitle"]),
        Paragraph(data["contact"], styles["Contact"]),
        Spacer(1, 3),
        HRFlowable(width="100%", thickness=1.15, color=colors.black, spaceBefore=0, spaceAfter=8),
        Paragraph(data["summary"], styles["Summary"]),
        Paragraph(data["section_titles"]["experience"], styles["SectionTitle"]),
    ]

    for job in data["experience"]:
        header = Table(
            [[
                Paragraph(job["company"], styles["Company"]),
                Paragraph(job["period"], styles["Period"]),
            ]],
            colWidths=[doc.width * 0.72, doc.width * 0.28],
        )
        header.hAlign = "LEFT"
        header.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            )
        )
        story.extend(
            [
                header,
                Paragraph(job["role"], styles["Role"]),
                Paragraph(job["description"], styles["Description"]),
            ]
        )
        story.extend(make_bullet_list(job["bullets"], styles["ResumeBullet"]))
        story.append(Spacer(1, 3))

    story.append(Paragraph(data["section_titles"]["freelance"], styles["SectionTitle"]))
    story.extend(make_bullet_list(data["freelance"], styles["ResumeBullet"]))
    story.append(Paragraph(data["section_titles"]["skills"], styles["SectionTitle"]))
    story.extend(make_bullet_list(data["skills"], styles["ResumeBullet"]))
    story.append(Paragraph(data["section_titles"]["education"], styles["SectionTitle"]))
    story.extend(make_bullet_list(data["education"], styles["ResumeBullet"]))

    doc.build(story)
    return output_path


def main():
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for locale, data in RESUMES.items():
        path = build_resume(data)
        print(f"Generated {locale}: {path}")


if __name__ == "__main__":
    main()
