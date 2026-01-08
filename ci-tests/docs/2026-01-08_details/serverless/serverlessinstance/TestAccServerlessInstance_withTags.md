# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-730256664574592852 | dev | flaky_500 | 181.08s
[2026-01-08 00:31](#error-2026-01-08t0031550000) |  | dev |  | 181.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-12-11 PASS 10 minutes
- 2025-12-12 PASS 10 minutes
- 2025-12-13 PASS 10 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 minutes
- 2025-12-16 PASS 10 minutes
- 2025-12-17 PASS 10 minutes
- 2025-12-18 PASS 12 minutes
- 2025-12-19 PASS 10 minutes
- 2025-12-20 PASS 10 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 minutes
- 2025-12-23 PASS 10 minutes
- 2025-12-24 PASS 10 minutes
- 2025-12-25 PASS 12 minutes
- 2025-12-26 PASS 10 minutes
- 2025-12-27 PASS 10 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 minutes
- 2025-12-31 PASS 11 minutes
- 2026-01-01 PASS 10 minutes
- 2026-01-02 PASS 10 minutes
- 2026-01-03 PASS 10 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 10 minutes
- 2026-01-06 PASS 10 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0893677Z === RUN   TestAccServerlessInstance_withTags
2026-01-07T00:30:35.0903605Z === CONT  TestAccServerlessInstance_withTags
2026-01-07T00:33:36.8580048Z === NAME  TestAccServerlessInstance_withTags
2026-01-07T00:33:36.8581256Z     resource_serverless_instance_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:33:36.8582015Z         
2026-01-07T00:33:36.8585445Z         Error: error creating MongoDB Serverless Instance: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-730256664574592852 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:36.8587680Z         
2026-01-07T00:33:36.8588364Z           with mongodbatlas_serverless_instance.test,
2026-01-07T00:33:36.8589580Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2026-01-07T00:33:36.8590695Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2026-01-07T00:33:36.8591253Z         
2026-01-07T00:33:36.9135906Z --- FAIL: TestAccServerlessInstance_withTags (181.82s)
```

- 2026-01-08

### Error 2026-01-08T00:31:55+00:00
```
2026-01-08T00:31:55.7130663Z === RUN   TestAccServerlessInstance_withTags
2026-01-08T00:31:55.7136595Z === CONT  TestAccServerlessInstance_withTags
2026-01-08T00:34:57.0743467Z   
2026-01-08T00:34:57.1272712Z === NAME  TestAccServerlessInstance_withTags
2026-01-08T00:34:57.1273727Z     resource_serverless_instance_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-01-08T00:34:57.1274655Z         
2026-01-08T00:34:57.1275917Z         Error: error creating MongoDB Serverless Instance: unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2026-01-08T00:34:57.1276907Z         
2026-01-08T00:34:57.1277492Z           with mongodbatlas_serverless_instance.test,
2026-01-08T00:34:57.1278703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2026-01-08T00:34:57.1279838Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2026-01-08T00:34:57.1280403Z         
2026-01-08T00:34:57.1745151Z --- FAIL: TestAccServerlessInstance_withTags (181.46s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 10 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
