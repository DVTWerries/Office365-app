export interface CalendarEventsResponse {
    '@odata.context': string; 
    '@odata.nextLink': string;
    value: CalendarEvent[];
}

export interface CalendarEvent {
    id: string;
    start: {
        dateTime: string;
    };
    endDate: {
        dateTime: string;
    };
    location: {
        uniqueId: string;
    }
}