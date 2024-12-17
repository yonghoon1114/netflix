export class ResponseMovieContents {
    /** hover 되었는지 여부 */
    Hovered: boolean = false;

    /*********************************************/

    /** 포스터 사진 url */
    imageUrl: string = '';

    /** 영화에 대한 부연 설명 */
    movieDescription: string = '';

    /** 영화 제목 */
    title: string = '';
}

export class movieContents{
        /** hover 되었는지 여부 */
        isHoverEnabled: boolean = false;

        VideoHoverRight:boolean=false;

        /*********************************************/
    
        /** 포스터 사진 url */
        imageUrl: string = '';
    
        /** 영화에 대한 부연 설명 */
        movieDescription: string = '';
    
        /** 영화 제목 */
        title: string = '';
}