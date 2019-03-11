import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'co-notification-item',
    styleUrl: 'co-notification-item.css',
    //shadow: true
})

export class CONotificationItem {
    /**
     * The first name
     */
    @Prop() first: string;

    /**
     * The middle name
     */
    @Prop() middle: string;

    /**
     * The last name
     */
    @Prop() last: string;

    @Prop() title: string;
    @Prop() content: string;
    @Prop() author: string;
    @Prop() status: string;
    @Prop() avatarURL: string;
    @Prop() url: string;
    @Prop() date: string

    render() {
        return (
            <conteiner-component style={this.status==='READED' ? {background:"#f1f1f1"}: {}}>
                <img src={this.url} />
                <div >
                    <title-component>
                        {this.title}
                    </title-component>
                    <content-component>
                        {this.content}
                    </content-component>
                    <date-component  style={this.status==='READED' ? {color:"#E5361D"}: {}} >
                        <user-component>
                            {this.author}
                        </user-component>
                        {this.date}
                    </date-component>
                </div>
            </conteiner-component>);
    }
}
