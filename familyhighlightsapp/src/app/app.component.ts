import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FamilyMember } from './familymember';
import { FamilyMemberService } from './familymember.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Container for front end to hold familymembers from backend
  public familymembers: FamilyMember[] = [];
  public editFamilyMember: FamilyMember = {id : 0, 
                                          name : "", 
                                          email : "",
                                          mom : "",
                                          dad : "",
                                          brother : "",
                                          sister : "",
                                          imageUrl : "",
                                          highlights: []
                                        };
  public deleteFamilyMember: FamilyMember = {id : 0, 
                                          name : "", 
                                          email : "",
                                          mom : "",
                                          dad : "",
                                          brother : "",
                                          sister : "",
                                          imageUrl : "",
                                          highlights: []
                                        };
  familyMemberToBeNulled: FamilyMember = {id : 0, 
                                          name : "", 
                                          email : "",
                                          mom : "",
                                          dad : "",
                                          brother : "",
                                          sister : "",
                                          imageUrl : "",
                                          highlights: []
                                        }


  constructor(private familyMemberService: FamilyMemberService){}

  ngOnInit(){
    this.getFamilyMembers();
    console.log("this.getFamilyMembers has been executed")
  }

  public getFamilyMembers(): void {
    this.familyMemberService.getFamilyMembers().subscribe({
      next: (response: FamilyMember[]) => {
        this.familymembers = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    );
  }
  
  public onAddFamilyMember(addForm: NgForm): void {
    const button = document.getElementById('add-familyMember-form');
    button!.click();
    this.familyMemberService.addFamilyMembers(addForm.value).subscribe({
      next: (response: FamilyMember) => {
        console.log(response);
        this.getFamilyMembers();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    }
    );
  }

  public onUpdateFamilyMember(familyMember: FamilyMember): void {
    this.familyMemberService.updateFamilyMember(familyMember).subscribe({
      next: (response: FamilyMember) => {
        console.log(response);
        this.getFamilyMembers();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    );
  }

  public onDeleteFamilyMember(familyMemberId: number | undefined): void {
    console.log(familyMemberId);
    this.familyMemberService.deleteFamilyMember(familyMemberId!).subscribe({
      next:(response: void) => {
        console.log(response);
        this.getFamilyMembers();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    );
  }

  public searchFamilyMember(key: string): void {
    console.log(key);
    const results: FamilyMember[] = [];
    for (const familyMember of this.familymembers) {
      if (familyMember.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || familyMember.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || familyMember.mom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || familyMember.dad.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(familyMember);
      }
    }
    this.familymembers = results;
    if (results.length === 0 || !key) {
      this.getFamilyMembers();
    }
  }

  //Ensures that when you click a specific button, you get 
  //the corresponding modal

  public onOpenModal(familymember: any, mode: string): void {
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      familymember = this.familyMemberToBeNulled
      button.setAttribute('data-target', '#addFamilyMemberModal');
    }
    if(mode === 'edit'){
      this.editFamilyMember = familymember
      button.setAttribute('data-target', '#updateFamilyMemberModal');
    }
    if(mode === 'delete'){
      this.deleteFamilyMember = familymember
      button.setAttribute('data-target', '#deleteFamilyMemberModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
