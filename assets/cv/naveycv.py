from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # Name only - no title
        self.set_font('Arial', 'B', 24)
        self.set_text_color(0, 0, 0)  # Black color
        self.cell(0, 15, 'Navey Puri', align='C', ln=True)
        
        # Contact Information
        self.set_font('Arial', '', 11)
        self.cell(0, 6, 'Email: navey011@gmail.com', align='C', ln=True)
        self.cell(0, 6, 'GitHub: https://github.com/navey15', align='C', ln=True)
        
        # Add dividing line
        self.ln(5)
        self.line(15, self.get_y(), 195, self.get_y())
        self.ln(10)

    def section_title(self, title):
        self.set_font('Arial', 'B', 14)
        self.set_text_color(0, 0, 0)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def add_bullet_point(self, text):
        self.set_font('Arial', '', 11)
        self.set_text_color(0, 0, 0)
        self.cell(5)
        self.cell(5, 6, '-', ln=0)
        self.cell(5)
        self.multi_cell(0, 6, text)
        self.ln(2)

# Create PDF instance
pdf = PDF()
pdf.add_page()

# Education Section
pdf.section_title('EDUCATION')
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Bachelor of Technology in Computer Science', ln=True)
pdf.set_font('Arial', '', 11)
pdf.cell(0, 6, 'International Institute of Information Technology, Hyderabad', ln=True)
pdf.cell(0, 6, '2024 - 2028', ln=True)
pdf.ln(3)

pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Senior Secondary Education', ln=True)
pdf.set_font('Arial', '', 11)
pdf.cell(0, 6, 'Delhi Public School, RK Puram', ln=True)
pdf.cell(0, 6, '2022 - 2024', ln=True)
pdf.ln(5)

# Technical Skills Section
pdf.section_title('TECHNICAL SKILLS')

# Frontend Development
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Frontend Development:', ln=True)
pdf.add_bullet_point('HTML: Creating structured and semantic web pages')
pdf.add_bullet_point('CSS: Designing responsive and visually appealing interfaces')
pdf.add_bullet_point('JavaScript: Adding interactivity and dynamic behavior')
pdf.add_bullet_point('React: Building scalable and reusable components')
pdf.ln(3)

# Backend Development
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Backend Development:', ln=True)
pdf.add_bullet_point('PHP: Building server-side logic and dynamic applications')
pdf.add_bullet_point('Python: Scripting, automation, and backend development')
pdf.ln(3)

# Database Skills
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Database Technologies:', ln=True)
pdf.add_bullet_point('MySQL: Designing and managing relational databases')
pdf.add_bullet_point('NoSQL: Working with non-relational databases')
pdf.ln(3)

# Achievements Section
pdf.section_title('ACHIEVEMENTS')
pdf.add_bullet_point('JEE Mains 2024: AIR 1503')
pdf.add_bullet_point('JEE Advanced 2024: AIR 14254')
# pdf.add_bullet_point('Lawn Tennis Nationals 2019: Represented Delhi State')

# Save the PDF
pdf.output("Navey_Puri_CV.pdf")