# Business Card Generator - PDFs generieren mit jsPDF und html2canvas

1. Importiere die benötigten Packete im `<head>`
   ```js
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jspdf-html2canvas@latest/dist/jspdf-html2canvas.min.js"></script>
    ```
2. Gestalte ein HTML-Element mit dem was gedruckt werden soll
    ```js
        <div id="card">Test</div>
    ```
3. Übergebe das HTML-Element an `html2PDF` und speicher die Datei
    ```js
    async function generate() {
        await html2PDF(document.getElementById("card"), {
            jsPDF: {
            orientation: "landscape",
            unit: "in",
            format: [3.5, 2],
            },
            imageType: "image/jpeg",
            output: "./pdf/generate.pdf",
        });
    }
    ```
