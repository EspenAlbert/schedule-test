# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-13 07:53](#error-2025-11-13t0753110000) |  | qa | 8.10s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 22 minutes
- 2025-10-16 PASS 34 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 21 minutes
- 2025-10-20 PASS 26 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 27 minutes
  - PASS 20 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 19 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 27 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 26 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 21 minutes
- 2025-11-03 PASS 19 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS an hour
  - PASS 21 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 22 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 25 minutes
- 2025-11-13

### Error 2025-11-13T07:53:11+00:00
```
2025-11-13T07:53:11.3561609Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:54:58.4188217Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:55:06.3529052Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-13T07:55:06.3529924Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-11-13T07:55:06.3530630Z         
2025-11-13T07:55:06.3531066Z         Error: Error in create
2025-11-13T07:55:06.3531476Z         
2025-11-13T07:55:06.3531993Z           with mongodbatlas_advanced_cluster.test,
2025-11-13T07:55:06.3533131Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-13T07:55:06.3534272Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-13T07:55:06.3534836Z         
2025-11-13T07:55:06.3535618Z         cluster name: test-acc-tf-c-1862365680008904888, API error details:
2025-11-13T07:55:06.3537264Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69158ed748f3d02bc50c7098/clusters
2025-11-13T07:55:06.3538186Z         POST: HTTP 403 Forbidden (Error code:
2025-11-13T07:55:06.3539011Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-13T07:55:06.3540057Z         Configuration. Contains selections that are unavailable due to your
2025-11-13T07:55:06.3541099Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-13T07:55:06.3541787Z         BadRequestDetail: 
2025-11-13T07:55:06.3974573Z    test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/3a1affca-fb69-470c-a037-ca98b0927ddf/terraform
2025-11-13T07:55:07.4002645Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (8.99s)
```
