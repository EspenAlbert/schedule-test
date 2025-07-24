# serverless/serverlessinstance/TestMigServerlessInstance_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 00:51](#error-2025-07-14t0051360000) |  | dev | 1206.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 4 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 4 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 4 minutes
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
2025-07-14T00:51:36.3408396Z === RUN   TestMigServerlessInstance_basic
2025-07-14T00:51:36.3409698Z     resource_serverless_instance_migration_test.go:10: Creating execution project: test-acc-tf-p-4079024832682830100
2025-07-14T00:51:36.3414614Z === CONT  TestMigServerlessInstance_basic
2025-07-14T00:51:36.3495305Z === NAME  TestMigServerlessInstance_basic
2025-07-14T00:51:36.3496356Z     resource_serverless_instance_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-14T00:51:36.3497172Z         
2025-07-14T00:51:36.3497993Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-07-14T00:51:36.3498841Z         
2025-07-14T00:51:36.3499431Z           with mongodbatlas_serverless_instance.test,
2025-07-14T00:51:36.3500627Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_serverless_instance" "test":
2025-07-14T00:51:36.3501724Z           14: 	resource "mongodbatlas_serverless_instance" "test" {
2025-07-14T00:51:36.3502284Z         
2025-07-14T00:51:36.3502691Z --- FAIL: TestMigServerlessInstance_basic (1206.69s)
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