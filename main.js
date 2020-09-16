
function countArtboards(selection, root) {
    const dialog = document.createElement("dialog");
    const div = document.createElement("div")
    div.textContent = `There are ${root.children.length} artboards 🎨`

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (ev)=> {
        dialog.close();
    });

    dialog.appendChild(div)
    dialog.appendChild(closeButton)
    document.body.appendChild(dialog).showModal()
}

module.exports = {
    commands: {
        countArtboards,
    }
};
