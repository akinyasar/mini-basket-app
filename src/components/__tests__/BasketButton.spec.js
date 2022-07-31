import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BasketButton from "../header/BasketButton.vue";
import { createTestingPinia } from "@pinia/testing";
//import { createRouter, createWebHistory } from "vue-router";
//import { routes } from "./routes";

describe("BasketButton", () => {
  let wrapper;
  wrapper = mount(BasketButton, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
    },
  });
  it("should render", () => {
    expect(wrapper.find("a-button").exists()).toBeTruthy();
    const button = wrapper.find("a-button");
    expect(button.text()).toContain("Sepetim");
  });

  // let router;
  // beforeEach(async () => {
  //   router = createRouter({
  //     history: createWebHistory(),
  //     routes: routes,
  //   });
  // });
  // test("it should be routing", async () => { // this test is not working
  //   await router.isReady();
  //   const wrapper = mount(BasketButton, {
  //     global: {
  //       plugins: [
  //         router,
  //         createTestingPinia({
  //           createSpy: vi.fn,
  //         }),
  //       ],
  //     },
  //   });
  //   await wrapper.find("a-button").trigger("click");
  //   await flushPromises();
  //   console.log("-------------", router.currentRoute);
  // });
});
const originalWarn = window.console.warn;
window.console.warn = (e) => {
  return e.includes("If this is a native custom element")
    ? ""
    : originalWarn(e);
};
