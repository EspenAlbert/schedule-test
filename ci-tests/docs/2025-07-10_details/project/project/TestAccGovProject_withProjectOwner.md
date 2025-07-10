# project/project/TestAccGovProject_withProjectOwner Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL
Success rate: 99.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-06-08 00:36](#error-2025-06-08t0036200000) |  | qa | 1.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 9 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 9 seconds
- 2025-04-16
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 5 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 7 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 8 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 7 seconds
- 2025-04-28 PASS 9 seconds
- 2025-04-29 PASS 8 seconds
- 2025-04-30
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 9 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 7 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07 PASS 7 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 8 seconds
- 2025-05-11 PASS 7 seconds
- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 8 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 8 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 9 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-05-28
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-05-29 PASS 6 seconds
- 2025-05-30 PASS 7 seconds
- 2025-05-31 PASS 9 seconds
- 2025-06-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-06-03 PASS 7 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 8 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 8 seconds
- 2025-06-08

### Error 2025-06-08T00:36:20+00:00
```
2025-06-08T00:36:20.4533488Z === RUN   TestAccGovProject_withProjectOwner
2025-06-08T00:36:20.4545557Z === CONT  TestAccGovProject_withProjectOwner
2025-06-08T00:36:20.4575110Z === NAME  TestAccGovProject_withProjectOwner
2025-06-08T00:36:20.4576055Z     resource_project_test.go:629: Step 1/1 error: Error running apply: exit status 1
2025-06-08T00:36:20.4576699Z         
2025-06-08T00:36:20.4577400Z         Error: error creating project: test-acc-tf-p-7759821567346607777
2025-06-08T00:36:20.4577968Z         
2025-06-08T00:36:20.4578459Z           with mongodbatlas_project.test,
2025-06-08T00:36:20.4579652Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2025-06-08T00:36:20.4580573Z           18: 		resource "mongodbatlas_project" "test" {
2025-06-08T00:36:20.4581051Z         
2025-06-08T00:36:20.4581846Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-06-08T00:36:20.4582273Z         type
2025-06-08T00:36:20.4582569Z --- FAIL: TestAccGovProject_withProjectOwner (1.47s)
```

- 2025-06-09 PASS 4 seconds
- 2025-06-10 PASS 5 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 7 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 7 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 8 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18 PASS 8 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 7 seconds
- 2025-06-22 PASS 7 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 7 seconds
- 2025-06-25 PASS 6 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 7 seconds
- 2025-06-28 PASS 9 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-07-02 PASS 7 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 9 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 6 seconds