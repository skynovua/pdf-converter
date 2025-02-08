export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const downloadPdf = async (pdfUrl: string, pdfName: string) => {
  const response = await fetch(pdfUrl);
  const blob = await response.blob();
  const base64 = await blobToBase64(blob);
  const link = document.createElement("a");
  link.href = base64;
  link.download = pdfName;
  link.click();
};
