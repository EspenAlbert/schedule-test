# serverless/serverlessinstance/TestAccServerlessInstance_autoIndexing Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 00:51](#error-2025-07-14t0051360000) |  | dev | 1200.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 4 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-11 PASS 4 minutes
- 2025-07-12 PASS 4 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14

### Error 2025-07-14T00:51:36+00:00
```
2025-07-14T00:51:36.3413457Z === RUN   TestAccServerlessInstance_autoIndexing
2025-07-14T00:51:36.3415742Z === CONT  TestAccServerlessInstance_autoIndexing
2025-07-14T00:51:36.3477358Z === NAME  TestAccServerlessInstance_autoIndexing
2025-07-14T00:51:36.3478500Z     resource_serverless_instance_test.go:99: Step 1/2 error: Error running apply: exit status 1
2025-07-14T00:51:36.3479252Z         
2025-07-14T00:51:36.3480067Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-07-14T00:51:36.3480744Z         
2025-07-14T00:51:36.3481483Z           with mongodbatlas_serverless_instance.test,
2025-07-14T00:51:36.3482669Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-07-14T00:51:36.3483757Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-07-14T00:51:36.3484293Z         
2025-07-14T00:51:36.3485367Z --- FAIL: TestAccServerlessInstance_autoIndexing (1200.66s)
```

- 2025-07-15 PASS 4 minutes
- 2025-07-16 PASS 4 minutes
- 2025-07-17 PASS 4 minutes
- 2025-07-18 PASS 4 minutes
- 2025-07-19 PASS 4 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 4 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-24 PASS 4 minutes
- 2025-07-25 PASS 4 minutes
- 2025-07-26 PASS 4 minutes
- 2025-07-27 PASS 4 minutes
- 2025-07-28 PASS 4 minutes
- 2025-07-29 PASS 4 minutes
- 2025-07-30 PASS 4 minutes