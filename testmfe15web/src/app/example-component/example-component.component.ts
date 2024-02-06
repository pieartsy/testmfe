import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { CardModule } from "primeng/card";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponentComponent implements OnInit {
  @Input() displayText: string = "";
  @Input() displayTitle: string = "";

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
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

  ngOnInit(): void {
    this.loadExternalStylesheet()
  }

}
