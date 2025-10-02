# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-22 00:29](#error-2025-09-22t0029480000) |  | dev | 27.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 34 minutes
- 2025-09-04 PASS 32 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 30 minutes
- 2025-09-07 PASS 18 minutes
- 2025-09-08
  - PASS 29 minutes
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 18 minutes
- 2025-09-20 PASS 23 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22

### Error 2025-09-22T00:29:48+00:00
```
2025-09-22T00:29:48.7412916Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-22T00:31:26.0837349Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-22T00:31:51.0857588Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-09-22T00:31:51.0859885Z     pre_check.go:32: Time before creating cluster: 2025-09-22T00:31:51.085427242Z, ProjectID: 68d0987ae965b05ddeb61f9f, Cluster name: test-acc-tf-c-3146233746087491703
2025-09-22T00:31:53.2324599Z    test_terraform_path=/home/runner/work/_temp/35b88982-e8ac-42d2-8e18-959edc0f7441/terraform test_working_directory=/tmp/plugintest2266217842
2025-09-22T00:31:53.2325811Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-09-22T00:31:53.2326422Z         
2025-09-22T00:31:53.2326703Z         Error: Error in create
2025-09-22T00:31:53.2327030Z         
2025-09-22T00:31:53.2327347Z           with mongodbatlas_advanced_cluster.test,
2025-09-22T00:31:53.2328106Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-22T00:31:53.2328857Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-22T00:31:53.2329206Z         
2025-09-22T00:31:53.2329682Z         cluster name: test-acc-tf-c-3146233746087491703, API error details:
2025-09-22T00:31:53.2330623Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d0987ae965b05ddeb61f9f/clusters
2025-09-22T00:31:53.2331151Z         POST: HTTP 403 Forbidden (Error code:
2025-09-22T00:31:53.2331628Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-22T00:31:53.2332190Z         Configuration. Contains selections that are unavailable due to your
2025-09-22T00:31:53.2333125Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-22T00:31:53.2333525Z         BadRequestDetail: 
2025-09-22T00:31:53.4502003Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (27.37s)
```

- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 21 minutes
- 2025-09-26 PASS 18 minutes
- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 23 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-10-02 PASS 23 minutes