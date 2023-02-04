const sinon = require("sinon");
const assert = require("assert");
const greet = require("../src/greet");

describe("index works", () => {
  it("logs \"Hello there!\" by default", () => {
    const spy = sinon.spy(console, "log");
    greet();
    assert(spy.calledWith("Hello there!" as any));
    spy.restore();
  });

  it("logs \"Hello Ada!\" when name=Ada", () => {
    const spy = sinon.spy(console, "log");
    greet("Ada");
    assert(spy.calledWith("Hello Ada!" as any));
    spy.restore();
  });
});

export {};
