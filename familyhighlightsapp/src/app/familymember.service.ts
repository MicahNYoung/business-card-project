import { Injectable } from "@angular/core";
import { FamilyMember } from "./familymember";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})
export class FamilyMemberService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getFamilyMembers(): Observable<FamilyMember[]> {
        return this.http.get<FamilyMember[]>(`${this.apiServerUrl}/familymember/all`);
    }

    public addFamilyMembers(familymember: FamilyMember): Observable<FamilyMember> {
        return this.http.post<FamilyMember>(`${this.apiServerUrl}/familymember/add`, familymember);
    }

    public updateFamilyMember(familymember: FamilyMember): Observable<FamilyMember> {
        return this.http.put<FamilyMember>(`${this.apiServerUrl}/familymember/update`, familymember);
    }

    public deleteFamilyMember(familymemberID: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/familymember/delete/${familymemberID}`);
    }
    
}

