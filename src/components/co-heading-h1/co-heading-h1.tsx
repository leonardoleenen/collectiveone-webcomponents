import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'co-heading-h1',
    styleUrl: 'co-heading-h1.css',
    //shadow: true
})

export class CoHeadingH1 {
   
    @Prop() title: string;
   




   render() {
        return (
            <co-headingH1 >
                <input type="text" value="" placeholder="Heading 1"/>

               
            </co-headingH1>);
    }
}

