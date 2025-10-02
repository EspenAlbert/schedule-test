# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-05 00:27](#error-2025-09-05t0027260000) |  | dev | 4.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 49 minutes
- 2025-09-04 PASS 41 minutes
- 2025-09-05

### Error 2025-09-05T00:27:26+00:00
```
2025-09-05T00:27:26.5264195Z === RUN   TestMigSearchDeployment_basic
2025-09-05T00:27:32.3841051Z === CONT  TestMigSearchDeployment_basic
2025-09-05T00:27:33.7440007Z === NAME  TestMigSearchDeployment_basic
2025-09-05T00:27:33.7440675Z     resource_migration_test.go:21: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-05T00:27:33.7441085Z         
2025-09-05T00:27:33.7441411Z         Error: Insufficient replication_specs blocks
2025-09-05T00:27:33.7441696Z         
2025-09-05T00:27:33.7442241Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-05T00:27:33.7442825Z           15: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-09-05T00:27:33.7443134Z         
2025-09-05T00:27:33.7443470Z         At least 1 "replication_specs" blocks are required.
2025-09-05T00:27:33.7443765Z         
2025-09-05T00:27:33.7444015Z         Error: Unsupported argument
2025-09-05T00:27:33.7444260Z         
2025-09-05T00:27:33.7444790Z           on terraform_plugin_test.tf line 20, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-05T00:27:33.7445262Z           20: 		replication_specs = [{
2025-09-05T00:27:33.7445514Z         
2025-09-05T00:27:33.7445956Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T00:27:33.7446446Z         define a block of type "replication_specs"?
2025-09-05T00:27:33.8325858Z --- FAIL: TestMigSearchDeployment_basic (4.21s)
```

- 2025-09-06 PASS 37 minutes
- 2025-09-07 PASS 29 minutes
- 2025-09-08
  - PASS 43 minutes
  - PASS 35 minutes
  - PASS 38 minutes
- 2025-09-09 PASS 41 minutes
- 2025-09-10 PASS 34 minutes
- 2025-09-11 PASS 30 minutes
- 2025-09-12 PASS 28 minutes
- 2025-09-13 PASS 34 minutes
- 2025-09-14 PASS 23 minutes
- 2025-09-15
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-09-16 PASS 29 minutes
- 2025-09-17 PASS 30 minutes
- 2025-09-18 PASS 39 minutes
- 2025-09-19 PASS 26 minutes
- 2025-09-20 PASS 26 minutes
- 2025-09-21 PASS 25 minutes
- 2025-09-22 PASS 24 minutes
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