import { Component, OnInit } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  topics: Topic[] = [];


  constructor( private topicService: TopicService) {}

  ngOnInit() {
    // Appel de la méthode de récupération des Topics lors de l'initialisation de la page

    this.getTopics();
  }

  // Méthode pour récupérer les Topics à partir du service
  getTopics() {
    this.topics = this.topicService.getTopics();
    // Traiter les données récupérées, par exemple, les stocker dans une propriété du composant dbase
  }
}




