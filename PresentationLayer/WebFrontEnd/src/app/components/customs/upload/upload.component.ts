import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  @Output('fileSelected') selectionEvent:EventEmitter<File>;

  fileName : string = "";

  constructor() { 
    this.selectionEvent = new EventEmitter<File>();
  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) : void
  {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    this.fileName = file.name
    this.selectionEvent.emit(file);
  }
}
