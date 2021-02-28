import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RuniteColorPlus } from '../../colors';

@Component({
    selector: 'rune-icon',
    template: `<ng-content></ng-content>`
})
export class RuniteIconComponent implements OnInit {

    @HostBinding('class.rune-icon')
    public runeIconClass = true;

    @Input()
    public color: RuniteColorPlus = null;

    @Input()
    public raised: boolean | null = false;

    @Input()
    public size: string | number | null = null;

    public constructor() {
    }

    public ngOnInit(): void {
    }

    @HostBinding('class.rune-color-primary')
    public get primaryColorClass(): boolean { return this.color === 'primary'; }

    @HostBinding('class.rune-color-accent')
    public get accentColorClass(): boolean { return this.color === 'accent'; }

    @HostBinding('class.rune-color-default')
    public get defaultColorClass(): boolean { return this.color === 'default'; }

    @HostBinding('class.rune-color-inherit')
    public get inheritColorClass(): boolean { return this.color === 'inherit'; }

    @HostBinding('class.rune-color-soft')
    public get softColorClass(): boolean { return this.color === 'soft'; }

    @HostBinding('class.rune-raised')
    public get raisedClass(): boolean { return this.raised !== false; }

    @HostBinding('style.width')
    @HostBinding('style.height')
    @HostBinding('style.font-size')
    public get iconSize(): string {
        let size = this.size;
        if(!size) {
            return null;
        }

        if(typeof size === 'number' || !/^[\d]$/.test(size)) {
            size = `${size}px`;
        }
        return size as string;
    }

}
