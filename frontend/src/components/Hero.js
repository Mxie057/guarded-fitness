import React from "react";
import { ArrowRightSquareFill } from "@styled-icons/bootstrap/ArrowRightSquareFill";

const Hero = () => {
  return (
    <>
      <container className="hero-content">
        <div class="stext-secondary px-4 py-5 text-center">
          <div class="py-5">
            <h1 class="display-5 fw-bold text-white">
              Get Fit With Guarded Fitness
            </h1>
            <div class="col-lg-6 mx-auto">
              <p class="fs-5 mb-4">
                A free to-use, no subscription plan fitness tool that allows you
                to track your workouts
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
                <a
                  href="/signup"
                  type="button"
                  class="btn btn-danger btn- px-4 me-sm-3 fw-bold shadow p-3 mb-3 rounded"
                >
                  Sign up for free
                </a>
                <a
                  href="/workouts"
                  class="link-light link-offset-2 link-underline link-underline-opacity-0 fw-bold"
                >
                  See how it works{" "}
                  <ArrowRightSquareFill size="1em" className="mb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </container>
    </>
  );
};

export default Hero;
