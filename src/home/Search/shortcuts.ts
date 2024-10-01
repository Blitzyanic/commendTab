interface IShortcut {
    [key: string]: string;
}

export let data: IShortcut = {};

fetch('/shortcuts.json')
    .then(response => response.json())
    .then((jsonData: IShortcut): void => {
        data = jsonData;
    })
    .catch(error => console.error('Error loading shortcuts:', error));