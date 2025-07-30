# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 00:51](#error-2025-07-14t0051360000) |  | dev | 1200.07s
[2025-07-20 00:37](#error-2025-07-20t0037030000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/687c3935823af9166ef91095/serverless/test-acc-tf-c-1550940492813144460 | qa | 245.00s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-07-02 PASS 10 minutes
- 2025-07-03 PASS 10 minutes
- 2025-07-04 PASS 10 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 10 minutes
- 2025-07-08 PASS 10 minutes
- 2025-07-09 PASS 12 minutes
- 2025-07-10
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-07-11 PASS 20 minutes
- 2025-07-12 PASS 10 minutes
- 2025-07-13 PASS 10 minutes
- 2025-07-14

### Error 2025-07-14T00:51:36+00:00
```
2025-07-14T00:51:36.3412339Z === RUN   TestAccServerlessInstance_withTags
2025-07-14T00:51:36.3415150Z === CONT  TestAccServerlessInstance_withTags
2025-07-14T00:51:36.3461846Z === NAME  TestAccServerlessInstance_withTags
2025-07-14T00:51:36.3462835Z     resource_serverless_instance_test.go:30: Step 1/3 error: Error running apply: exit status 1
2025-07-14T00:51:36.3463581Z         
2025-07-14T00:51:36.3464392Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-07-14T00:51:36.3465059Z         
2025-07-14T00:51:36.3465639Z           with mongodbatlas_serverless_instance.test,
2025-07-14T00:51:36.3466798Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-07-14T00:51:36.3467885Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-07-14T00:51:36.3468578Z         
2025-07-14T00:51:36.3476763Z    test_name=TestAccServerlessInstance_autoIndexing
2025-07-14T00:51:36.3486042Z --- FAIL: TestAccServerlessInstance_withTags (1200.66s)
```

- 2025-07-15 PASS 10 minutes
- 2025-07-16 PASS 10 minutes
- 2025-07-17 PASS 10 minutes
- 2025-07-18 PASS 12 minutes
- 2025-07-19 PASS 10 minutes
- 2025-07-20

### Error 2025-07-20T00:37:03+00:00
```
2025-07-20T00:37:03.6392155Z === RUN   TestAccServerlessInstance_withTags
2025-07-20T00:37:03.6394597Z === CONT  TestAccServerlessInstance_withTags
2025-07-20T00:37:03.6408972Z === NAME  TestAccServerlessInstance_withTags
2025-07-20T00:37:03.6409812Z     resource_serverless_instance_test.go:30: Step 2/3 error: Error running apply: exit status 1
2025-07-20T00:37:03.6410564Z         
2025-07-20T00:37:03.6413073Z         Error: error updating serverless instance: https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3935823af9166ef91095/serverless/test-acc-tf-c-1550940492813144460 PATCH: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-07-20T00:37:03.6414554Z         
2025-07-20T00:37:03.6414882Z           with mongodbatlas_serverless_instance.test,
2025-07-20T00:37:03.6415534Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-07-20T00:37:03.6416135Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-07-20T00:37:03.6416448Z         
2025-07-20T00:37:03.6417053Z --- FAIL: TestAccServerlessInstance_withTags (245.01s)
```

- 2025-07-21 PASS 10 minutes
- 2025-07-22 PASS 10 minutes
- 2025-07-23
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-07-24 PASS 10 minutes
- 2025-07-25 PASS 10 minutes
- 2025-07-26 PASS 10 minutes
- 2025-07-27 PASS 10 minutes
- 2025-07-28 PASS 10 minutes
- 2025-07-29 PASS 10 minutes
- 2025-07-30 PASS 10 minutes