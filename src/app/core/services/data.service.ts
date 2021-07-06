import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Topic } from '../../shared/types'

// TODO DEV Write an HTTP error interceptor and decide what you do with them

// Decided to go with a common centralized data service instead of featured based one,
//  in case if in the future a store will be used than refactoring will be easier
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  // TODO DEV implement a method to list topics with only ids and titles
  //  and IF needed one with full data
  listTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('topics')
  }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(`topics/${id}`)
  }
}
