export interface NotesEventsResponse {
    '@odata.context': string; 
    value: Page[];
}

export interface Page{
    id: string;
    createdDateTime: string;
    title: string;
    contentUrl: string;
    lastModifiedDateTime: string;
    parentSection: Section;
}

export interface Section {
    id: string;
    displayName: string;
}



