import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { charactersData } from 'src/app/core/character.data';
import { Router } from '@angular/router';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {

  @Input() public character?: CharacterI;
  @Input() public isEditMode: boolean = false;

  public characterForm?: FormGroup;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public imgSrc: string = '';

  constructor(
    
    private formBuilder: FormBuilder, 
    private router: Router,
    private characterService: CharacterService 
  )
  {}


  public ngOnInit(): void {
    this.initForm();
    this.characterForm?.get('image')?.valueChanges.subscribe((value: string) =>{
      this.imgSrc = value;
    })
  }

  public handleCharacter() {
    if (this.characterForm?.valid) {
      if (this.isEditMode) {
        this.editCharacter();
      } else {
        this.createCharacter();
      }
      this.characterForm?.reset();
    } else {
      this.hasFormError = true;
    }
  }

  private createCharacter() {
    // se guarda el producto si es valido
    
    this.hasFormError = false;
    this.characterService.createCharacter(this.characterForm?.value).subscribe((character) => {

      const continueCreating = window.confirm('¿ Quieres crear otro personaje ?');
    if (!continueCreating) {
      this.router.navigate(['../character-list']);
    }
  })
}
  

  private editCharacter() {
    if (!this.character) { return; }
    this.characterService.editCharacter(this.characterForm?.value, this.character.id).subscribe((character) => {
    this.router.navigate(['../character-list'])   
   })
  }
  

  private initForm() {

    const onlyLetter = new RegExp('^[A-Z]+$', 'i');
    

    if(this.character) {
      this.imgSrc = this.character.image
    }

    this.characterForm = this.formBuilder.group({
      name: new FormControl(this.character?.name || '', [
        Validators.required,
        Validators.pattern(onlyLetter),
      ]),
      image: new FormControl(this.character?.image || '', [
        Validators.required
,
      ]),
      status: new FormControl(this.character?.status || '', [
        Validators.required,
        Validators.pattern(onlyLetter),
      ]),
      species: new FormControl(this.character?.species || '', [
        Validators.required,
        Validators.pattern(onlyLetter),
      ]),
      gender: new FormControl(this.character?.gender || '', [
        Validators.required,
        Validators.pattern(onlyLetter),
      ]),
    });
  }
}
