import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import BasketButton from "../header/BasketButton.vue";
import { createTestingPinia } from "@pinia/testing";

describe("BasketButton", () => {
  it("should render", () => {
    const wrapper = mount(BasketButton, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.find("a-button").exists()).toBeTruthy();
    const button = wrapper.find("a-button");
    expect(button.text()).toContain("Sepetim");
  });

  //   const mockRoute = {
  //     params: {
  //       id: 1,
  //     },
  //   };
  //   const mockRouter = {
  //     push: vi.fn(),
  //   };
  //   it("should push router", async () => {
  //     const wrapper = mount(BasketButton, {
  //       global: {
  //         mocks: {
  //           $route: mockRoute,
  //           $router: mockRouter,
  //         },
  //         plugins: [
  //           createTestingPinia({
  //             createSpy: vi.fn,
  //           }),
  //         ],
  //       },
  //     });
  //     await wrapper.find("a-button").trigger("click");
  //     expect(mockRouter.push).toHaveBeenCalledTimes(1);
  //     expect(mockRouter.push).toHaveBeenCalledWith("/basket");
  //   });
});
