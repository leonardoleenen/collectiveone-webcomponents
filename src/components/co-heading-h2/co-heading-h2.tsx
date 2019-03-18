import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'co-heading-h2',
    styleUrl: 'co-heading-h2.css',
    //shadow: true
})

export class CoHeadingH2 {
   
    @Prop() title: string;
   




   render() {
        return (
            <co-headingH2 >
                <input type="text" value="" placeholder="Heading 2"/>

               
            </co-headingH2>);
    }
}

