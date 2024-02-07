import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Pet} from "../pet";
import {Subscription} from "rxjs";
import {PetService} from "../pet.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PetComponent implements OnInit, OnDestroy, OnChanges {
  pets: Pet[] = [];
  petsSub: Subscription = new Subscription();
  error?: ErrorEvent;
  errorMessage?: string;
  currentPet: Pet = {} as Pet;
  @Input() queriedPet?: string;
  @Input() submittedPet?: object;

  constructor(
    private http: HttpClient,
    private petService: PetService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['queriedPet']) {
        console.log(changes['queriedPet'])
        this.searchPet(changes['queriedPet'].currentValue);
      }
      if (changes['submittedPet']) {
        this.submitPet(changes['submittedPet'].currentValue);
      }
    }

  ngOnInit(): void {
    this.getAllPets();
    console.log(this.pets);
    this.loadExternalStylesheet();
  }

  getAllPets() {
    this.petsSub = this.petService.getAllPets().subscribe({next: (res: Pet[]) => {
        this.pets = res;
        this.error = undefined;
        this.errorMessage = "";
      },
      error: (error: ErrorEvent) => {
        this.error = error;
        this.errorMessage = "No pets were found."
        console.log(error)
      }
    })
  }

  searchPet(name: string): void {
    let pet: Pet | undefined = this.pets.find(a => a.name === name)
    console.log(pet);
    if (pet !== undefined) {
      this.error = undefined;
      this.errorMessage = "";
      this.currentPet = pet;
    }
    else {
      this.errorMessage = "No pet with that name was found."
    }
  }

  submitPet(pet: object) {
    this.petsSub = this.petService.postPet(pet as Pet).subscribe({next: (res: Pet) => {
        this.pets.push(res);
        this.currentPet = res;
        this.error = undefined;
        this.errorMessage = "";
      },
      error: (error: ErrorEvent) => {
        this.error = error;
        this.errorMessage = "We had trouble adding that pet."
      }
    })
  }

  private loadExternalStylesheet() {
    this.http
      .get('http://localhost:8080/primeNG.css', { responseType: 'text' })
      .subscribe(
        (cssContent: string) => {
          this.applyStyles(cssContent);
        },
        (error: any) => {
          console.error('Error loading external stylesheet: ', error);
        }
      );
  }

  private applyStyles(cssContent?: string) {
    const styleElement = this.renderer.createElement('style');
    styleElement.innerHTML = cssContent;
    const shadowRoot = this.elementRef.nativeElement.shadowRoot;
    if (shadowRoot) {
      shadowRoot.insertBefore(styleElement, shadowRoot.firstChild);
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.petsSub.unsubscribe();
  }

  protected readonly Object = Object;
}
