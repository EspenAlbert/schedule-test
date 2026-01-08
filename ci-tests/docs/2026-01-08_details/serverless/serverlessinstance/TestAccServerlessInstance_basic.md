# serverless/serverlessinstance/TestAccServerlessInstance_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-4894978264885219511 | dev | flaky_500 | 181.08s
[2026-01-08 00:31](#error-2026-01-08t0031520000) |  | dev |  | 184.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-12-11 PASS 4 minutes
- 2025-12-12 PASS 4 minutes
- 2025-12-13 PASS 4 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 minutes
- 2025-12-16 PASS 4 minutes
- 2025-12-17 PASS 4 minutes
- 2025-12-18 PASS 4 minutes
- 2025-12-19 PASS 4 minutes
- 2025-12-20 PASS 4 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 minutes
- 2025-12-23 PASS 4 minutes
- 2025-12-24 PASS 4 minutes
- 2025-12-25 PASS 4 minutes
- 2025-12-26 PASS 4 minutes
- 2025-12-27 PASS 4 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 minutes
- 2025-12-31 PASS 4 minutes
- 2026-01-01 PASS 4 minutes
- 2026-01-02 PASS 4 minutes
- 2026-01-03 PASS 4 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 minutes
- 2026-01-06 PASS 4 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0890839Z === RUN   TestAccServerlessInstance_basic
2026-01-07T00:30:35.0904877Z === CONT  TestAccServerlessInstance_basic
2026-01-07T00:33:36.8357061Z   
2026-01-07T00:33:36.8359143Z     resource_serverless_instance_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:36.8359807Z         
2026-01-07T00:33:36.8362580Z         Error: error creating MongoDB Serverless Instance: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-4894978264885219511 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:36.8364169Z         
2026-01-07T00:33:36.8364525Z           with mongodbatlas_serverless_instance.test,
2026-01-07T00:33:36.8365193Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2026-01-07T00:33:36.8365803Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2026-01-07T00:33:36.8366122Z         
2026-01-07T00:33:36.8977041Z --- FAIL: TestAccServerlessInstance_basic (181.81s)
```

- 2026-01-08

### Error 2026-01-08T00:31:52+00:00
```
2026-01-08T00:31:52.9497597Z === RUN   TestAccServerlessInstance_basic
2026-01-08T00:31:52.9499480Z     resource_serverless_instance_test.go:22: Creating execution project (1): test-acc-tf-p-1816474342400160250
2026-01-08T00:31:55.7134821Z === CONT  TestAccServerlessInstance_basic
2026-01-08T00:34:57.0743847Z === NAME  TestAccServerlessInstance_basic
2026-01-08T00:34:57.0747090Z     resource_serverless_instance_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-08T00:34:57.0747936Z         
2026-01-08T00:34:57.0749243Z         Error: error creating MongoDB Serverless Instance: unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2026-01-08T00:34:57.0749942Z         
2026-01-08T00:34:57.0750308Z           with mongodbatlas_serverless_instance.test,
2026-01-08T00:34:57.0751353Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2026-01-08T00:34:57.0752027Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2026-01-08T00:34:57.0752376Z         
2026-01-08T00:34:57.1221050Z --- FAIL: TestAccServerlessInstance_basic (184.17s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 4 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 4 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 minutes
