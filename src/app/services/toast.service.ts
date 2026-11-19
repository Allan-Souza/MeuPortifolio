import { Injectable, signal } from '@angular/core';

export interface ToastState {
  message: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly _toast = signal<ToastState | null>(null);
  readonly toast = this._toast.asReadonly();

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  show(message: string, durationMs = 2600): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this._toast.set({
      message,
      id: Date.now()
    });

    this.timeoutId = setTimeout(() => {
      this._toast.set(null);
      this.timeoutId = null;
    }, durationMs);
  }

  dismiss(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this._toast.set(null);
  }
}
