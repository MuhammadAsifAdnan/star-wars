export function getIdFromUrl(url: string | undefined) {
    // TODO: can this be improved?!
    if (!url) {
        return;
    }
    let pieces = url?.split('/');
    return pieces[pieces.length - 2]
}
