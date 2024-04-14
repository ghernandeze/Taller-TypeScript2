export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  imageUrl: string;
  description: string;
  infoUrl: string;

  constructor(id: number, name: string, channel: string, seasons: number, imageUrl: string, description: string, infoUrl: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.imageUrl = imageUrl;
      this.description = description;
      this.infoUrl = infoUrl; 
  }
}
