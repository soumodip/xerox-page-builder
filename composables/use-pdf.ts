import pdfjs from "pdfjs-dist";
// Store
import { useAppStore } from "@/stores/app.store";
// Composable
import { useCommon } from "@/composables/use-common";

const { delay } = useCommon();

export const usePdf = async () => {
  const appStore = useAppStore();

  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = "/scripts/pdf.worker.min.mjs";

  const getNotePdf = async (pdfUrl: string) => {
    return new Promise(async (resolve, reject) => {
      const pdfLoadingTask = pdfjs.getDocument({ url: pdfUrl });
      pdfLoadingTask.promise.then(
        (pdf: any) => {
          resolve(pdf);
        },
        (reason: any) => {
          reject(reason);
        }
      );
    });
  };

  const buildAndDownloadPdf = async (data: {
    height: number;
    width: number;
    processedPages: any;
  }) => {
    try {
      const { height, width, processedPages } = data;
      const orientation = height > width ? "horizontal-wrapped" : "vertical";
      const pdfDocument = new (window as any).jspdf.jsPDF("p", "mm", "a4");
      const pdfDocumentWidth = pdfDocument.internal.pageSize.width;
      const pdfDocumentHeight = pdfDocument.internal.pageSize.height;
      for (let index = 0; index < processedPages.length; index++) {
        const subNotes = processedPages[index];
        if (subNotes.length === 0) {
          continue;
        }
        if (orientation === "vertical") {
          const subNoteMaxHeight = (pdfDocumentHeight * 0.95) / subNotes.length;
          const subNoteMaxWidth = pdfDocumentWidth * 0.95;
          let cummulativeTop = pdfDocumentHeight * 0.025;
          for (
            let subNoteIndex = 0;
            subNoteIndex < subNotes.length;
            subNoteIndex++
          ) {
            const subNoteImageData = subNotes[subNoteIndex];
            const scaleX = (subNoteMaxWidth * 1.0) / width;
            const scaleY = (subNoteMaxHeight * 1.0) / height;
            const updatedScale = scaleY > scaleX ? scaleX : scaleY;
            pdfDocument.addImage(
              subNoteImageData,
              "JPEG",
              pdfDocumentWidth * 0.025,
              cummulativeTop,
              width * updatedScale,
              height * updatedScale
            );
            cummulativeTop += subNoteMaxHeight;
          }
        } else {
          const subNoteMaxHeight =
            (pdfDocumentHeight * 0.95) / (subNotes.length > 2 ? 2 : 1);
          const subNoteMaxWidth =
            (pdfDocumentWidth * 0.95) / (subNotes.length >= 2 ? 2 : 1);
          let cummulativeTop = pdfDocumentHeight * 0.025;
          for (
            let subNoteIndex = 0;
            subNoteIndex < subNotes.length;
            subNoteIndex++
          ) {
            const subNoteImageData = subNotes[subNoteIndex];
            const scaleX = (subNoteMaxWidth * 1.0) / width;
            const scaleY = (subNoteMaxHeight * 1.0) / height;
            const updatedScale = scaleY > scaleX ? scaleX : scaleY;
            pdfDocument.addImage(
              subNoteImageData,
              "JPEG",
              subNoteMaxWidth * (subNoteIndex % 2) + pdfDocumentWidth * 0.025,
              cummulativeTop,
              width * updatedScale,
              height * updatedScale
            );
            if (subNoteIndex === 1) {
              cummulativeTop += subNoteMaxHeight;
            }
          }
        }
        if (index !== processedPages.length - 1) {
          pdfDocument.addPage();
        }
        await delay(100);
      }
      pdfDocument.save("xerox.pdf");
      await delay(100);
      appStore.isProcessing = false;
      document.body.innerHTML = `<section class="
              flex-column
              align-items-center
              justify-content-center
              position-absolute
              top-left
              full-height full-width
              background-color-light
            "
          >
            <img src="/images/icons/download-dark.svg" class="height-36 margin-bottom-12" />
            <p class="opacity-medium color-dark text-align-center margin-top-12">
              We've generated the PDF and have <br/>pushed it for download.
            </p>
          </section>`;
    } catch (error: any) {
      const errorMessage =
        error.message || "An error occurred while generating the PDF.";
      throw Error(`Error in buildAndDownloadPdf: \n${errorMessage}`);
    }
  };
  return {
    getNotePdf,
    buildAndDownloadPdf,
  };
};
