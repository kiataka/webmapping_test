
$(document).ready(function () {
    $('#data-table-contact').DataTable({
        "ajax": {
            "url": "https://script.google.com/macros/s/AKfycbwXSEs4phl1bPeOwY0gqnlkK0jhr7eDqDwTjLO2SaVxLRz_aZW3a_3iZilSKPyWfcQv/exec",
            "dataSrc": "" // Adjust this if the data is wrapped in an object
        },
        searchPanes: true,
        "pageLength": 20,
        "scrollY": "80vh",
        "scrollCollapse": false,
        "lengthChange": false,
        "ordering": true,
        "paging": false,
        language: {
            "sProcessing": "Traitement en cours...",
            "sSearch": "Rechercher&nbsp;:",
            "sZeroRecords": "Aucun élément à afficher"
        },
        columns: [
            { 'data': 'region', 'title': 'Région', 'visible': false },
            { 'data': 'categorie', 'title': 'Catégorie', 'visible': false },
            { 'data': 'name', 'title': 'Nom', 'visible': true, 'width': '40%' },
            { 'data': 'function', 'title': 'Fonction', 'visible': true, 'width': '40%' },
            { 'data': 'entity', 'title': 'Entité', 'visible': true, 'width': '30%' },
            { 'data': 'origin', 'title': 'Origine', 'visible': false },
            { 'data': 'tel', 'title': 'N° Téléphone', 'visible': false },
            { 'data': 'mail', 'title': 'Mail', 'visible': false },

        ],
    });
});
