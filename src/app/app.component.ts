import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-sai-lib';
  data:any=[]

  initialfile?:File
  onFileUploaded(file: File) {
    // Handle the uploaded file
    console.log(file.size);
    console.log(file.name);
    console.log(file.type);
    this.initialfile=file

  }

  onclickbutton(){
    let type
    let name
    let size
    let lastmod
    type=this.initialfile?.type
    name=this.initialfile?.name
    size=this.initialfile?.size
    lastmod=this.initialfile?.lastModified
    let obj={
      "name":name,
      "type":type,
      "size":size,
      "lastModified":lastmod

    }
    
    this.data.push(obj)
    console.log(this.data)
  }
}
