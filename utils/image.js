function getFilename(file) {
    const filePath = file.path;
    const fileSplit = firePath.split("\\");

    return `${fileSplit[1]}/${fileSplit[2]}`;
}

module.exports = {
    getFilename,
};