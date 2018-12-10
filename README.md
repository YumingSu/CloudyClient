# Assignment 2 - Vue app - Automated development process.

Name: Yuming Su.

Student No.:  20082247

## Overview.

To report the factory that produce fake and their products on this vue app, and mark their place on google map.It also provide users' log in and register.It also can log via google account and facebook account.

Github http: https://github.com/YumingSu/CloudyClient

## E2E Testing.

     $ npx cypress run --spec cypress/integration/report.spec.js

## Continuous Integration.

https://travis-ci.org/YumingSu/CloudyClient

## Automated Deployment.


http://obnoxious-legs.surge.sh

## Extra features.

I want to show the brand pictures from this app its assset package, and give users' correct judegement of which brand's shou

## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     $ npx cypress run


    suyumingdeMacBook-Air:imitationvue-3.0 suyuming$ npx cypress run


      (Run Starting)

      ┌────────────────────────────────────────────────────────────────────────────┐
      │ Cypress:  3.1.3                                                            │
      │ Browser:  Electron 59 (headless)                                           │
      │ Specs:    3 found (home-page.spec.js, map.spec.js, report.spec.js)         │
      └────────────────────────────────────────────────────────────────────────────┘


    ────────────────────────────────────────────────────────────────────────────────


      Running: home-page.spec.js...                                        (1 of 3)


      Home page
        ✓ Shows a header (6791ms)
        Navigation bar
          ✓ Shows the required links (2046ms)
          ✓ Redirects when links are clicked (2686ms)


      3 passing (12s)


      (Results)

      ┌─────────────────────────────────┐
      │ Tests:        3                 │
      │ Passing:      3                 │
      │ Failing:      0                 │
      │ Pending:      0                 │
      │ Skipped:      0                 │
      │ Screenshots:  0                 │
      │ Video:        true              │
      │ Duration:     11 seconds        │
      │ Spec Ran:     home-page.spec.js │
      └─────────────────────────────────┘


      (Video)

      - Started processing:   Compressing to 32 CRF
      - Finished processing:  /Users/suyuming/WebstormProjects/imitationvue-3.0/cypress/videos/home-page.spec.js.mp4 (5 seconds)


    ────────────────────────────────────────────────────────────────────────────────


      Running: map.spec.js...                                              (2 of 3)


      Map page
        ✓ Shows a header (3945ms)


      1 passing (4s)


      (Results)

      ┌───────────────────────────┐
      │ Tests:        1           │
      │ Passing:      1           │
      │ Failing:      0           │
      │ Pending:      0           │
      │ Skipped:      0           │
      │ Screenshots:  0           │
      │ Video:        true        │
      │ Duration:     4 seconds   │
      │ Spec Ran:     map.spec.js │
      └───────────────────────────┘


      (Video)

      - Started processing:   Compressing to 32 CRF
      - Finished processing:  /Users/suyuming/WebstormProjects/imitationvue-3.0/cypress/videos/map.spec.js.mp4 (2 seconds)


    ────────────────────────────────────────────────────────────────────────────────

      Running: report.spec.js...                                           (3 of 3)


      Report page
        ✓ allows a valid imitation to be submitted (4968ms)
        ✓ shows error messages for incomplete form fields (3782ms)


      2 passing (9s)


      (Results)

      ┌──────────────────────────────┐
      │ Tests:        2              │
      │ Passing:      2              │
      │ Failing:      0              │
      │ Pending:      0              │
      │ Skipped:      0              │
      │ Screenshots:  0              │
      │ Video:        true           │
      │ Duration:     8 seconds      │
      │ Spec Ran:     report.spec.js │
      └──────────────────────────────┘


      (Video)

      - Started processing:   Compressing to 32 CRF
      - Finished processing:  /Users/suyuming/WebstormProjects/imitationvue-3.0/cypress/videos/report.spec.js.mp4 (3 seconds)


    ================================================================================

      (Run Finished)


          Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
      ┌────────────────────────────────────────────────────────────────────────────┐
      │ ✔ home-page.spec.js               00:11      3      3      -      -      - │
      ├────────────────────────────────────────────────────────────────────────────┤
      │ ✔ map.spec.js                     00:04      1      1      -      -      - │
      ├────────────────────────────────────────────────────────────────────────────┤
      │ ✔ report.spec.js                  00:08      2      2      -      -      - │
      └────────────────────────────────────────────────────────────────────────────┘
        All specs passed!                 00:24      6      6      -      -      -







