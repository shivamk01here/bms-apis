const saveName = async(name) => {

    const dbresult = await db.saveName(name);
    if (dbresult) {
        return true;
    }
    return false;
}

module.exports = {
      saveName
}