import { Component, Prop, Method, State } from '@stencil/core';



@Component({
    tag: 'co-context-resume',
    styleUrl: 'co-context-resume.css',
    //shadow: true
})

export class CoContextResume {
   
    @Prop() fav: string;
    @Prop() summary: string;
    @Prop() url: string;
    @Prop() title: string;
    @State() favorite: boolean = false;
   @Method()
   unFavoriteHandle() {
    this.favorite = !this.favorite;
  }




   render() {
        return (
            <conteiner-component >
                <img src={this.url} />
                <div >
                    <title-component>
                        {this.title}
                    </title-component>
                    <content-component>
                        {this.summary}
                    </content-component>
                    
                </div>
                <content-icons>
                <div onClick={() => this.unFavoriteHandle()}>
                 {this.favorite ? <img src="../../assets/favorite.png"/> : <img src="../../assets/unFavorite.png"/>}
                 </div>
                 <div >
                 <img src="../../assets/share.png"/> 
                 </div>
                </content-icons>

               
            </conteiner-component>);
    }
}

