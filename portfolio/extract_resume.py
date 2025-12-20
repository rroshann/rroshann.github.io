from pypdf import PdfReader

# Path to the resume
pdf_path = "/Users/roshansiddartha/Documents/Vanderbilt/portfolio/github/rroshann.github.io/portfolio/public/files/Roshan_Sivakumar_Resume.pdf"

try:
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open("resume_text.txt", "w") as f:
        f.write(text)
    
    print("RESUME TEXT EXTRACTED TO resume_text.txt")

except Exception as e:
    print(f"Error reading PDF: {e}")
