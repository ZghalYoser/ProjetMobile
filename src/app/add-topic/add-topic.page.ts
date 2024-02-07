import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.page.html',
  styleUrls: ['./add-topic.page.scss'],
})
export class AddTopicPage implements OnInit {

  topicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.topicForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.topicForm.valid) {
      console.log(this.topicForm.value);
      // Here you would typically handle the form submission, e.g., sending the data to a backend
    }
  }
}
