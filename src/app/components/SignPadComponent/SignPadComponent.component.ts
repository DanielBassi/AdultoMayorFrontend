import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


declare interface GenericElementRef<T extends HTMLElement> {
  nativeElement: T;
}

@Component({
  selector: 'dfs-sign-pad',
  templateUrl: 'SignPadComponent.component.html',
  styleUrls: ['./SignPadComponent.component.scss']
})
export class SignPadComponent {
  @Input() name: string;
  @Output() firmaEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('canvas') canvas: GenericElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  dimension = { width: 770, height: 400 };
  isWriting = false;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);

    // Handle Mouse events
    const mouseDownStream = fromEvent(this.canvas.nativeElement, 'mousedown');
    const mouseMoveStream = fromEvent(this.canvas.nativeElement, 'mousemove');
    const mouseUpStream = fromEvent(window, 'mouseup');

    mouseDownStream.pipe(map((e) => this.startDraw(e))).subscribe();
    mouseMoveStream.pipe(map((e) => this.keepDraw(e))).subscribe();
    mouseUpStream.pipe(map(() => (this.isWriting = false))).subscribe();

    // Handle Touch events
    const touchDownStream = fromEvent(this.canvas.nativeElement, 'touchstart');
    const touchMoveStream = fromEvent(this.canvas.nativeElement, 'touchmove');
    const touchUpStream = fromEvent(window, 'touchend');

    touchDownStream.pipe(map((e) => this.startDraw(e))).subscribe();
    touchMoveStream.pipe(map((e) => this.keepDraw(e))).subscribe();
    touchUpStream.pipe(map(() => (this.isWriting = false))).subscribe();
  }

  startDraw(e) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.lineJoin = 'round';
    const location = this.getLocation(e);
    this.ctx.moveTo(location.X, location.Y);
    this.isWriting = true;
  }

  keepDraw(e) {
    if (!this.isWriting) return;
    const location = this.getLocation(e);
    this.ctx.lineTo(location.X, location.Y);
    this.ctx.stroke();
  }

  getLocation(e) {
    var location = { X: 0, Y: 0 };
    if (e instanceof MouseEvent) {
      location.X = e.offsetX;
      location.Y = e.offsetY;
    } else {
      var dimensions = e.target.getBoundingClientRect();

      location.X = e.touches[0].clientX - dimensions.left;
      location.Y = e.touches[0].clientY - dimensions.top;
    }
    return location;
  }

  onClearClick() {
    this.ctx.clearRect(0, 0, this.dimension.width, this.dimension.height);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.dimension.width, this.dimension.height);
  }

  onSaveClick() {
    const dataURL = this.canvas.nativeElement.toDataURL().split(",",2)[1];
    console.log(dataURL);
    this.firmaEvent.emit(dataURL);

  }
}
