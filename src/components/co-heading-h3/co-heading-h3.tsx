import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'co-heading-h3',
    styleUrl: 'co-heading-h3.css',
    //shadow: true
})

export class CoHeadingH3 {
   
    @Prop() title: string;
   




   render() {
        return (
            <co-headingH3 >
                <input type="text" value="" placeholder="Heading 2"/>

               
            </co-headingH3>);
    }
}

