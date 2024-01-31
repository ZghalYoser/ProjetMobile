// topic-detail-page.component.ts

import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';


@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail-page.component.html',
  styleUrls: ['./topic-detail-page.component.scss'],
})
export class TopicDetailPage implements OnInit {
  topic:Topic | undefined; // Assurez-vous de définir correctement le type de votre modèle Topic

  constructor(private activatedRoute: ActivatedRoute ,private topicService: TopicService) {}
  ngOnInit(){


    // Récupérer les détails du Topic en fonction de l'ID de la route
    const topicIdString = this.activatedRoute.snapshot.paramMap.get('id');

    // Assurez-vous que topicIdString n'est pas null avant de tenter la conversion
    if (topicIdString !== null) {
      const topicId = Number(topicIdString); // Ou parseInt(topicIdString, 10) pour forcer une conversion en base 10

    // Appel à la méthode getTopicDetails avec topicId en tant que nombre
    this.topic = this.topicService.getTopicDetails(topicId);
    // Reste du code pour traiter les détails du topic

}
  }


  // async openPostModal() {
  //   // Ouvrir la modale pour ajouter un nouveau Post
  //   const modal = await this.modalController.create({
  //     component: PostModalComponent, // Assurez-vous de créer une composant modal pour ajouter un Post
  //     componentProps: {
  //       topicId: this.topic.id,
  //     },
  //   });
  //   await modal.present();
  // }

  // Vous pouvez ajouter d'autres méthodes ou logiques selon vos besoins
}
