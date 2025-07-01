import 'whatwg-fetch';

if (typeof global.TransformStream === 'undefined') {
  class DummyTransformStream {
    readable: any;
    writable: any;
    constructor() {
      this.readable = {};
      this.writable = {};
    }
  }
  global.TransformStream = DummyTransformStream as any;
}

class MockBroadcastChannel {
  name: string;
  onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null = null;
  constructor(name: string) {
    this.name = name;
  }
  postMessage = jest.fn();
  close = jest.fn();
  addEventListener = jest.fn();
  removeEventListener = jest.fn();
  dispatchEvent = jest.fn();
}

(global as any).BroadcastChannel = MockBroadcastChannel;