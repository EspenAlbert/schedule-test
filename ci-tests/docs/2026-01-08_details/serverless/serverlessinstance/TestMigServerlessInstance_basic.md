# serverless/serverlessinstance/TestMigServerlessInstance_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-1530243444822379502 | dev | flaky_500 | 185.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 4 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 4 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 4 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 4 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 4 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 5 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 4 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:32+00:00
```
2026-01-07T00:30:32.6988365Z === RUN   TestMigServerlessInstance_basic
2026-01-07T00:30:32.6990120Z     resource_serverless_instance_migration_test.go:10: Creating execution project (1): test-acc-tf-p-7564410243859773653
2026-01-07T00:30:35.0897164Z === CONT  TestMigServerlessInstance_basic
2026-01-07T00:33:37.8668033Z === NAME  TestMigServerlessInstance_basic
2026-01-07T00:33:37.8668727Z     resource_serverless_instance_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:37.8669243Z         
2026-01-07T00:33:37.8671142Z         Error: error creating MongoDB Serverless Instance: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e795a6/serverless/test-acc-tf-c-1530243444822379502 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:37.8672487Z         
2026-01-07T00:33:37.8672849Z           with mongodbatlas_serverless_instance.test,
2026-01-07T00:33:37.8673757Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_serverless_instance" "test":
2026-01-07T00:33:37.8674426Z           14: 	resource "mongodbatlas_serverless_instance" "test" {
2026-01-07T00:33:37.8674763Z         
2026-01-07T00:33:38.0216747Z --- FAIL: TestMigServerlessInstance_basic (185.32s)
```

- 2026-01-08: MISSING

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
