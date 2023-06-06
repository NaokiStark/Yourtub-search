export const getSearch = async function (opt) {

    let defOpt = {
        part: 'snippet',
        q: 'How to basic',
        safeSearch: 'none',
        key: '',
        order: 'title',
        maxResults: 20,
        type: 'video',
        /*pageToken: 'page-token' */
    };

    let newOpt = {
        ...defOpt,
        ...opt,
    }

    return await fetch(`https://www.googleapis.com/youtube/v3/search?${new URLSearchParams(newOpt)}`).then(r => r.json());
}