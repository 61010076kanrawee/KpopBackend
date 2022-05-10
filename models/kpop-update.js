class AlbumUpdate {
    constructor( subtitle, title) {
      //this.album_image = album_image;
      //this.album_image2 = album_image2;
      this.subtitle = subtitle;
      this.title = title;
    }
  }

  class Kpop_Update {
    constructor(id, image_1,image_1, title, subtitle,) {
      this.id = id;
      this.image_1 = image_1;
      this.image_2 = image_2;
      this.title = title;
      this.subtitle = subtitle;
      //this.member_profile = member_profile;
    }
  }
  
  module.exports = { Kpop_Update, AlbumUpdate };
  