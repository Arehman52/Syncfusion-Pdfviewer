import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ToolbarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
} from '@syncfusion/ej2-angular-pdfviewer';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-buttons';

/**
 * Default PdfViewer Controller
 */
@Component({
  standalone: true,
  imports: [
    PdfViewerModule,
    MenuModule,
    ToolbarModule,
    DialogModule,
    MessageModule,
    SwitchModule,
    GridModule,
  ],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
  ],
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;
  @ViewChild('switch')
  public switch: SwitchComponent;

  public document: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string =
    'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib';
  ngOnInit(): void {
    // ngOnInit function
  }
  public change(e: any): void {
    if (e.checked) {
      this.pdfviewerControl.serviceUrl = '';
    } else {
      this.pdfviewerControl.serviceUrl =
        'https://services.syncfusion.com/angular/production/api/pdfviewer';
    }
    this.pdfviewerControl.dataBind();
    this.pdfviewerControl.load(this.pdfviewerControl.documentPath, null);
  }

  destroy() {
    // console.log(
    //   'window.eventListeners.length count before destroying the pdf viewer',
    //   window.eventListeners()
    // );
    this.pdfviewerControl.destroy();
    // console.log(
    //   'window?.eventListeners() count after destroying the pdf viewer',
    //   window.eventListeners()
    // );
  }
}
