import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderSearchBar from "../header/HeaderSearchBar.vue";

describe("HeaderSearchBar", () => {
  it("should render", () => {
    const wrapper = mount(HeaderSearchBar);
    expect(wrapper.find("a-input").exists()).toBeTruthy();
  });
});
