// pdfjs não roda no Worker: o handler captura o erro e usa a extração enviada pelo cliente + nome do arquivo.
export const getDocument = () => { throw new Error('pdfjs indisponível no Worker'); };
