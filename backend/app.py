from flask import Flask, request, jsonify
import pdfplumber

app = Flask(__name__)

@app.route('/api/parse-pdf', methods=['POST'])
def parse_pdf():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']

    if not file.filename.endswith('.pdf'):
        return jsonify({"error": "File must be a PDF"}), 400

    try:
        with pdfplumber.open(file) as pdf:
            text = ""
            tables = []

            for page in pdf.pages:
                # Extract text
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"

                # Extract tables
                page_tables = page.extract_tables()
                for table in page_tables:
                    tables.append(table)

            return jsonify({
                "text": text,
                "tables": tables
            }), 200
    except pdfplumber.PDFSyntaxError:
        return jsonify({"error": "The file is not a valid PDF"}), 400
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == '__main__':
HEAD
    app.run(debug=True)git config pull.rebase false

    app.run(debug=True)
jjjhjbhj
9b2b1332b0eca8e6168999b9e3d01fe43b2efc4c
