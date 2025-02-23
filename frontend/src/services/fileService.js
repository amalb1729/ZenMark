let currentFile = null;

export const setCurrentFile = (file) => {
    currentFile = file;
};

export const getCurrentFile = () => {
    return currentFile;
};

export const clearCurrentFile = () => {
    currentFile = null;
};

export const isFileModified = (currentContent, originalContent) => {
    return currentContent !== originalContent;
}; 