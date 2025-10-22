# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027280000) |  | dev | 10804.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 26 minutes
- 2025-09-24 PASS 26 minutes
- 2025-09-25 PASS 27 minutes
- 2025-09-26 PASS 27 minutes
- 2025-09-27 PASS 28 minutes
- 2025-09-28 PASS 30 minutes
- 2025-09-29 PASS an hour
- 2025-09-30
  - PASS 28 minutes
  - PASS 33 minutes
  - PASS 24 minutes
- 2025-10-01
  - PASS 36 minutes
  - PASS 43 minutes
  - PASS 37 minutes
  - PASS an hour
  - PASS 26 minutes
  - PASS 26 minutes
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-10-02 PASS an hour
- 2025-10-03 PASS an hour
- 2025-10-04 PASS 2 hours
- 2025-10-05 PASS 22 minutes
- 2025-10-06 PASS 27 minutes
- 2025-10-07

### Error 2025-10-07T00:27:28+00:00
```
2025-10-07T00:27:28.1313935Z === RUN   TestMigSearchDeployment_basic
2025-10-07T00:27:33.3758605Z === CONT  TestMigSearchDeployment_basic
2025-10-07T03:27:35.2934344Z === NAME  TestMigSearchDeployment_basic
2025-10-07T03:27:35.2935266Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:27:35.2935959Z         
2025-10-07T03:27:35.2936386Z         Error: Error in create
2025-10-07T03:27:35.2936804Z         
2025-10-07T03:27:35.2937384Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:27:35.2938526Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:27:35.2939564Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:27:35.2940089Z         
2025-10-07T03:27:35.2940907Z         cluster=test-acc-tf-c-2616155518215712643 didn't reach desired state: IDLE,
2025-10-07T03:27:35.2941847Z         error: context deadline exceeded
2025-10-07T03:27:35.5244448Z --- FAIL: TestMigSearchDeployment_basic (10804.40s)
```

- 2025-10-08 PASS 31 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 32 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 36 minutes
- 2025-10-15 PASS 25 minutes
- 2025-10-16 PASS 50 minutes
- 2025-10-17 PASS 29 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 31 minutes
- 2025-10-20 PASS 53 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 35 minutes
  - PASS 24 minutes