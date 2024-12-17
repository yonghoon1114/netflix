import { Component, OnInit } from '@angular/core';
import { ResponseMovieContents, movieContents } from '../shared/models/response-movie-contents';
// import { ResponseMovieContents } from 'src/shared/models/response-movie-contents';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  public videoinfo: boolean = false;
  public movie1: boolean = false;
  public top1: number = 0;
  public MenuHovered: boolean= false;
  public MakeitBigger: boolean = false;
  public Arrow: boolean = false;
  public contents: movieContents[] = [
    {
      imageUrl: "../../assets/images/as.jpeg", title: "기생충", isHoverEnabled: false, movieDescription: '영화설명',
      VideoHoverRight:false
    },
    {
      imageUrl: "../../assets/images/2012-movie-007-Skyfall_1366x768.jpg", title: "007", isHoverEnabled: false, movieDescription: '영화설명2',
     VideoHoverRight:false
    },
    {
      imageUrl: "../../assets/images/as.jpeg", title: "기생충", isHoverEnabled: false, movieDescription: '영화설명3',
     VideoHoverRight:false
    }
  ];
  public top10: { imgURL: string, title: string, ShowVid: boolean, imgAfterHover:string }[] = [
    { imgURL: "../../assets/images/poster.jpeg", title: '극한직업', ShowVid: false, imgAfterHover:'../../assets/images/15ae404f-740a-476b-bf8f-458c68ca39ad.jpg' },
    { imgURL: "../../assets/images/z7r6IvrX0iOpQ07hrAciUCOUr9D.jpg", title: '암살', ShowVid: false, imgAfterHover:'' },
  ];
  public description: { imgURL: string, title: string, ShowVid: boolean }[] = [
    { imgURL: "../../assets/images/R.jpeg", title: "Parasite", ShowVid: false }
  ]
  public KoreanMovies: ResponseMovieContents[]=[
    {Hovered: false, imageUrl:'../../assets/images/2012-movie-007-Skyfall_1366x768.jpg',movieDescription:'',title:''}
  ];
  onHoverImage(index: number) {
    this.contents[index].isHoverEnabled = !this.contents[index].isHoverEnabled;
    if(index===0){
      this.contents[0].VideoHoverRight = !this.contents[0].VideoHoverRight;
    }
  }
  ShowArrow(){
    this.Arrow= true;
  }
  hideArrow(){
    this.Arrow= false;
  }
  Top10ImgHover(index:number){
    this.top10[index].ShowVid=!this.top10[index].ShowVid
  }
  HoverImage(index:number){
    this.KoreanMovies[index].Hovered= !this.KoreanMovies[index].Hovered;
  }
  isMenuHovered(){
    this.MenuHovered= !this.MenuHovered;
  }
  MakeBig(){
    this.MakeitBigger =!this.MakeitBigger
  }

  /** 영화 목록 */
  // public movieContents: ResponseMovieContents[] = [];

  /**
   * 초기화 이벤트
   */
  ngOnInit(): void {
    // this.loadData();
  }

  /** 초기 데이터를 설정한다. */
  // loadData() {
  //   for (let i = 0; i < 5; i++) {
  //     this.movieContents.push({
  //       isHoverEnabled: false,
  //       imageUrl: "",
  //       movieDescription: "",
  //       title: ""
  //     });
  //   }

  //   /** 모든 영화 항목들에 대하여 처리 */
  //   this.movieContents.map((item, index) => {
  //     if (index % 2 === 0) {
  //       item.imageUrl = "";
  //       item.movieDescription = "";
  //       item.title = "";
  //     }
  //     else {
  //       item.imageUrl = "test";
  //       item.movieDescription = "test";
  //       item.title = "test";
  //     }

  //     return item
  //   })

  //   console.log(this.movieContents);
    

  //   /** map 함수와 동일한 logic */
  //   // for (let i = 0; i < this.movieContents.length; i++) {
  //   //   let item = this.movieContents[i];

  //   //   item.imageUrl = '';
  //   // }
  // }

  showinfo() {
    this.videoinfo = true
  }
  closeinfo() {
    this.videoinfo = false
  }
  showMovie1() {
    this.movie1 = true;
  }
  CloseMovie1() {
    this.movie1 = false;
  }
  showTop1() {
    this.top1 = 1;
  }
  hideTop1() {
    this.top1 = 0;
  }
}
