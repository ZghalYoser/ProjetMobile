import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

    private topics: Topic[] = [];
    private posts : Post[] =[];

  constructor() {

    this.posts = [
      { id: 1, name: "post1" , description:"disc2" },

      // Ajoutez d'autres posts si nécessaire
    ];

    this.topics = [
      { id: 1, name: 'Topic 1', posts: [this.posts[0]] },
      { id: 2, name: 'Topic 2', posts: [this.posts[0]] },
      { id: 3, name: 'Topic 3', posts: [this.posts[0]] },
    ];
   }


  // get all topic
  getTopics() : Topic[]{
    return this.topics;
  }


  //recupere topic byId
  get(topicId :string) :Topic |undefined{
    return this.topics.find((topic)=>topic.id.toString()===topicId);
  }
  getTopicDetails(topicId: number): any {
    // Recherche du topic en fonction de son ID
    const topic = this.topics.find((t) => t.id === topicId);

    if (topic) {
      // Si le topic est trouvé, retournez ses détails avec la liste des posts
      return {
        id: topic.id,
        posts: [...topic.posts],
        // Ajoutez d'autres propriétés spécifiques à votre modèle Topic ici
      };
    } else {
      // Si le topic n'est pas trouvé, vous pouvez retourner null ou gérer d'une autre manière
      return null;
    }
  }

  // ajouter un nv topic

  addTopic (topic:Topic):void{
     this.topics.push(topic);
  }

  // ajouter un post dans topic

  addPost(post:Post , topicId:string):void{
    const topic=this.get(topicId);
    if(topic){// si topic n'est pas null et pas undefind on fait le push dans la liste
      topic.posts.push(post);
    }
  }




}
