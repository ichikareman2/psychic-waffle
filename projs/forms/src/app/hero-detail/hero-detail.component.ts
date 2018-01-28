import { Component, OnInit, Input, OnChanges } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { states, Hero, Address } from "../model/data-model";
import { FormArray } from "@angular/forms/src/model";
import { HeroService } from "../hero.service";
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses)
  }
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl("secretLairs", addressFormArray);
  }
  get secretLairs(): FormArray {
    return this.heroForm.get("secretLairs") as FormArray;
  }
  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }
  removeLair(i:number) {
    this.secretLairs.removeAt(i)
  }
  nameChangeLog:string[]=[];
  logNameChange(){
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach((value:string) => this.nameChangeLog.push(value))
  }
  onSubmit(){
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(undefined,console.error)
  }
  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;
  
    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );
  
    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }
  revert() { this.ngOnChanges(); }
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder,private heroService:HeroService) {
    this.createForm();
    this.logNameChange();
  }
  createForm() {
    this.heroForm = this.fb.group({
      name: ["", Validators.required],
      // address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]),
      power: "",
      sidekick: ""
    });
  }
  ngOnInit() {}
}
