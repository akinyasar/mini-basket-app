import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";
import ListProductCard from "../list/ListProductCard.vue";

describe("ListProductCard", () => {
  let wrapper;
  wrapper = shallowMount(ListProductCard, {
    global: {
      random: "change",
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("a-image"),
      },
    },
    propsData: {
      product: {
        name: "Test Product",
        price: "100",
        image: "https://via.placeholder.com/150",
        currency: "TL",
      },
    },
  });
  it("should render", () => {
    const button = wrapper.find("a-button");
    expect(button.text()).toContain("SEPETE EKLE");
  });

  it("props testing", () => {
    expect(wrapper.vm.product.name).toMatch("Test Product");
    expect(wrapper.vm.product.price).toMatch("100");
    expect(wrapper.vm.product.image).toMatch("https://via.placeholder.com/150");
    expect(wrapper.vm.product.currency).toMatch("TL");
  });
});

const originalWarn = window.console.warn;
window.console.warn = (e) => {
  return e.includes("If this is a native custom element")
    ? ""
    : originalWarn(e);
};
