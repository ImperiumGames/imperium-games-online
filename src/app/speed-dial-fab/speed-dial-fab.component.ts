import {
    Component,
    Input,
    OnInit,
    AfterContentInit,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Injector,
    OnDestroy,
    Output,
    QueryList,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

import { speedDialFabAnimations } from './speed-dial-fab.animations';
import { MatTooltip, matTooltipAnimations } from '@angular/material';

@Component({
    selector: 'app-speed-dial-fab',
    templateUrl: './speed-dial-fab.component.html',
    styleUrls: ['./speed-dial-fab.component.scss'],
    animations: speedDialFabAnimations,
    host: {
        '(document:click)': 'onClick($event)'
    }
})
export class SpeedDialFabComponent implements OnInit {
    constructor(private eRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}
    private documentClickUnlistener: (() => void) | null = null;
    self = false;
    objectKeys: IterableIterator<number>;

    @Input() options;
    buttons = [];
    open = false;

    // @ContentChild(SpeedDialFabComponent) childActions: SpeedDialFabComponent;

    ngOnInit() {
        const maxButtons = 6;
        if (this.options.buttons.length > maxButtons) {
            this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
        }
    }

    toggleLabel(label: any, index: any) {
        let tip: MatTooltip;
        tip = label + index;
        console.log(tip);
        tip.toggle();
    }

    show() {
        this.open = true;
        this.buttons = this.options.buttons;
    }

    hide() {
        this.open = false;
        this.buttons = [];
    }

    onToggleFab() {
        this.buttons.length ? this.hide() : this.show();
    }

    // ngAfterContentInit(): void {
    //     this.setActionsVisibility();
    // }

    // setActionsVisibility(): void {
    // if (!this.childActions) {
    //     return;
    // }

    // if (this.open) {
    //     this.childActions.show();
    // } else {
    //     this.childActions.hide();
    // }
    //     this._processOutsideClickState();
    // }

    // private _setElementClass(elemClass: string, isAdd: boolean): void {
    //     const finalClass = `eco-${elemClass}`;
    //     if (isAdd) {
    //         this.renderer.addClass(this.elementRef.nativeElement, finalClass);
    //     } else {
    //         this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
    //     }
    // }

    // private _processOutsideClickState() {
    //     console.log(this.open);
    //     // console.log(this.childActions);
    //     if (this.open) {
    //         console.log('set');
    //         this._setDocumentClickListener();
    //     } else {
    //         console.log('unset');
    //         this._unsetDocumentClickListener();
    //     }
    // }

    // private _setDocumentClickListener() {
    //     console.log('_setDocumentClickListener: ', this.documentClickUnlistener);
    //     if (
    //         !this.documentClickUnlistener
    //         // && !this.childActions
    //     ) {
    //         this.documentClickUnlistener = this.renderer.listen(this.document, 'click', () => {
    //             console.log('_setDocumentClickListener: ', this.open);
    //             if (!this.self) {
    //                 this.hide();
    //                 this.open = false;
    //                 console.log(this.open);
    //             }
    //             this.self = false;
    //             this.setActionsVisibility();
    //         });
    //     }
    // }

    // private _unsetDocumentClickListener() {
    //     if (this.documentClickUnlistener) {
    //         this.documentClickUnlistener();
    //         this.documentClickUnlistener = null;
    //     }
    // }

    // @HostListener('click', ['$event'])
    // _onClick(): void {
    //     console.log('X');
    //     if (this.open) {
    //         this.self = true;
    //         this.setActionsVisibility();
    //     }
    // }

    onClick(event: { target: any }) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            // or some similar check
            this.hide();
        }
    }
}
