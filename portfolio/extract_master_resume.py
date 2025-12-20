from pypdf import PdfReader

# Path to the master resume
pdf_path = "/Users/roshansiddartha/Documents/Vanderbilt/portfolio/github/rroshann.github.io/portfolio/public/files/master_resume_gemini.pdf"

try:
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open("master_resume_text.txt", "w") as f:
        f.write(text)
    
    print("MASTER RESUME TEXT EXTRACTED TO master_resume_text.txt")

except Exception as e:
    print(f"Error reading PDF: {e}")
