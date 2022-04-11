import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDragDropFileUpload]',
})
export class DragDropFileUploadDirective {
  @Output() fileDropped = new EventEmitter<any>();
  @HostBinding('style.background-color') private background = '#ffffff';

  constructor() {}
  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event: any) {
    console.log('dragover');
    event.preventDefault();
    event.stopPropagation();
    this.background = '#e2eefd';
  }

  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    console.log('dragleave');
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: any) {
    console.log('dropped');
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
