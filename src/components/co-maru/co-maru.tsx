import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'co-maru',
  styleUrl: 'co-maru.css',
  
})

export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  @Prop() nombre: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
    return <div>
        My name is {this.nombre}
    </div>;
  }
}
