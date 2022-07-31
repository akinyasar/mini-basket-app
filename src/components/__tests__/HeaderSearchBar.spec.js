import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HeaderSearchBar from "../header/HeaderSearchBar.vue";

describe("HeaderSearchBar", () => {
  let wrapper;
  wrapper = shallowMount(HeaderSearchBar, {
    propsData: {
      value: "Testing HeaderSearchBar input props",
    },
  });
  it("should render", () => {
    expect(wrapper.find("a-input").exists()).toBeTruthy();
  });

  it("props testing", () => {
    expect(wrapper.vm.value).toMatch("Testing HeaderSearchBar input props");
  });
});

const originalWarn = window.console.warn;
window.console.warn = (e) => {
  return e.includes("If this is a native custom element")
    ? ""
    : originalWarn(e);
};
