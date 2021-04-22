export interface ApiResponseModel<T> {
    count: number;
    next: any;
    previous: any;
    results: T[];
}