# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pausedToUnpaused Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-08 12:04](#error-2025-09-08t1204460000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68bec65c0e369c59c11a8607/clusters | dev | 20.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 43 minutes
- 2025-09-04 PASS 36 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 40 minutes
- 2025-09-07 PASS 28 minutes
- 2025-09-08
  - PASS 41 minutes
  - PASS 33 minutes
  - FAIL 20 seconds

### Error 2025-09-08T12:04:46+00:00
```
2025-09-08T12:04:46.9871555Z === RUN   TestAccClusterAdvancedCluster_pausedToUnpaused
2025-09-08T12:05:50.8192702Z === CONT  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-09-08T12:06:10.8164461Z === NAME  TestAccClusterAdvancedCluster_pausedToUnpaused
2025-09-08T12:06:10.8166609Z     pre_check.go:40: Time before creating cluster: 2025-09-08T12:06:10.816113311Z, ProjectID: 68bec65c0e369c59c11a8607, Cluster name: test-acc-tf-c-7535710674024029145
2025-09-08T12:06:11.4522218Z    test_terraform_path=/home/runner/work/_temp/473344b7-b40d-49c4-9a7c-9b80815de865/terraform test_working_directory=/tmp/plugintest507228642
2025-09-08T12:06:11.4523267Z     resource_advanced_cluster_test.go:344: Step 1/5 error: Error running apply: exit status 1
2025-09-08T12:06:11.4523814Z         
2025-09-08T12:06:11.4526210Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bec65c0e369c59c11a8607/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-08T12:06:11.4527782Z         
2025-09-08T12:06:11.4528323Z           with mongodbatlas_advanced_cluster.test,
2025-09-08T12:06:11.4529128Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-08T12:06:11.4529725Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-08T12:06:11.4530025Z         
2025-09-08T12:06:11.4954124Z --- FAIL: TestAccClusterAdvancedCluster_pausedToUnpaused (20.68s)
```

- 2025-09-09 PASS 38 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 30 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 27 minutes
- 2025-09-22 PASS 26 minutes
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 28 minutes
- 2025-09-25 PASS 27 minutes
- 2025-09-26 PASS 24 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 33 minutes
  - PASS 22 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-10-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 31 minutes
  - PASS 24 minutes
  - PASS 35 minutes
  - PASS 24 minutes
  - PASS 33 minutes
  - PASS 25 minutes
- 2025-10-02 PASS 29 minutes