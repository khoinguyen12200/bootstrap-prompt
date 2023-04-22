function bootstrapPrompt(message, options = {}) {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const idOkButton = `ok-button-${id}`;
    const idCancelButton = `cancel-button-${id}`;
    const modal = $(`
            <!-- Modal -->
            <div class="modal fade" id="${id}" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content shadow">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>${message}</p>
                  </div>
                  <div class="modal-footer">
                    <button id="${idCancelButton}" type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
                    <button id="${idOkButton}" type="button" class="btn btn-primary">OK</button>
                  </div>
                </div>
              </div>
            </div>
        `);
    $('body').append(modal);
    $('#' + id).modal('show');
    return new Promise((resolve, reject) => {
        $(`#${idOkButton}`).on('click', () => {
            $('#' + id).modal('hide');
            resolve(true);
        })
        $(`#${idCancelButton}`).on('click', () => {
            $('#' + id).modal('hide');
            resolve(false);
        })
        $(modal).on('hidden.bs.modal', function () {
            $(this).remove();
            resolve(false)
        })
    })
}

window.bootstrapPrompt = bootstrapPrompt;
