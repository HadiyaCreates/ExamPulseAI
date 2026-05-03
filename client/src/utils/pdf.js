import * as pdfjsLib from "pdfjs-dist";
import worker from "pdfjs-dist/build/pdf.worker.entry";

pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

export const extractTextFromPDF = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);

      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        const strings = content.items.map((item) => item.str);
        text += strings.join(" ");
      }

      resolve(text.toLowerCase());
    };

    reader.readAsArrayBuffer(file);
  });
};