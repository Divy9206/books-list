export interface Book {
    volumeInfo: volumeInfo;
}

export interface volumeInfo {
    title: string;
    authors: string;
    publisher: string;
    publishedDate: string;
}