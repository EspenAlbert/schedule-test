# serverless/serverlessinstance/TestMigServerlessInstance_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:50](#error-2025-09-01t0050460000) |  | dev | 1203.05s
[2025-09-01 06:27](#error-2025-09-01t0627580000) |  | dev | 1395.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 minutes
- 2025-08-07 PASS 6 minutes
- 2025-08-08 PASS 4 minutes
- 2025-08-09 PASS 4 minutes
- 2025-08-10 PASS 4 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12 PASS 4 minutes
- 2025-08-13 PASS 4 minutes
- 2025-08-14 PASS 4 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 4 minutes
- 2025-08-17 PASS 4 minutes
- 2025-08-18 PASS 4 minutes
- 2025-08-19 PASS 4 minutes
- 2025-08-20
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-08-21 PASS 4 minutes
- 2025-08-22 PASS 4 minutes
- 2025-08-23 PASS 4 minutes
- 2025-08-24 PASS 4 minutes
- 2025-08-25 PASS 4 minutes
- 2025-08-26 PASS 4 minutes
- 2025-08-27 PASS 4 minutes
- 2025-08-28 PASS 4 minutes
- 2025-08-29 PASS 8 minutes
- 2025-08-30 PASS 4 minutes
- 2025-08-31 PASS 4 minutes
- 2025-09-01
  - FAIL 20 minutes

### Error 2025-09-01T00:50:46+00:00
```
2025-09-01T00:50:46.6777333Z === RUN   TestMigServerlessInstance_basic
2025-09-01T00:50:46.6778896Z     resource_serverless_instance_migration_test.go:10: Creating execution project: test-acc-tf-p-1833329239888111670
2025-09-01T00:50:46.6783702Z === CONT  TestMigServerlessInstance_basic
2025-09-01T00:50:46.6835420Z === NAME  TestMigServerlessInstance_basic
2025-09-01T00:50:46.6836026Z     resource_serverless_instance_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:50:46.6836476Z         
2025-09-01T00:50:46.6836934Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-09-01T00:50:46.6837310Z         
2025-09-01T00:50:46.6837652Z           with mongodbatlas_serverless_instance.test,
2025-09-01T00:50:46.6838301Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_serverless_instance" "test":
2025-09-01T00:50:46.6838900Z           14: 	resource "mongodbatlas_serverless_instance" "test" {
2025-09-01T00:50:46.6839218Z         
2025-09-01T00:50:46.6839456Z --- FAIL: TestMigServerlessInstance_basic (1203.53s)
```

  - FAIL 23 minutes

### Error 2025-09-01T06:27:58+00:00
```
2025-09-01T06:27:58.5028135Z === RUN   TestMigServerlessInstance_basic
2025-09-01T06:27:58.5029433Z     resource_serverless_instance_migration_test.go:10: Creating execution project: test-acc-tf-p-7905303691490263976
2025-09-01T06:27:58.5034655Z === CONT  TestMigServerlessInstance_basic
2025-09-01T06:27:58.5086038Z === NAME  TestMigServerlessInstance_basic
2025-09-01T06:27:58.5087345Z     resource_serverless_instance_migration_test.go:10: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T06:27:58.5088320Z         
2025-09-01T06:27:58.5089471Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-138210347441174963): context deadline exceeded
2025-09-01T06:27:58.5090327Z         
2025-09-01T06:27:58.5090738Z --- FAIL: TestMigServerlessInstance_basic (1395.65s)
```

  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-09-02 PASS 4 minutes
- 2025-09-03 PASS 4 minutes
- 2025-09-04 PASS 4 minutes