# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-22 08:27](#error-2025-10-22t0827280000) |  | qa | 10.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 15 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 15 minutes
- 2025-09-26 PASS 16 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29
  - PASS 18 minutes
  - PASS 12 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 24 minutes
  - PASS 15 minutes
- 2025-10-02 PASS 24 minutes
- 2025-10-03 PASS 16 minutes
- 2025-10-04 PASS 24 minutes
- 2025-10-05 PASS 15 minutes
- 2025-10-06 PASS 15 minutes
- 2025-10-07 PASS 12 minutes
- 2025-10-08 PASS 22 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 23 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 17 minutes
- 2025-10-14 PASS 17 minutes
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 18 minutes
- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 16 minutes
- 2025-10-20
  - PASS 52 minutes
  - PASS 13 minutes
- 2025-10-21 PASS 15 minutes
- 2025-10-22
  - PASS 23 minutes
  - FAIL 10 seconds

### Error 2025-10-22T08:27:28+00:00
```
2025-10-22T08:27:28.3614530Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:11.0321147Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.0327380Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.0329444Z     pre_check.go:36: Time before creating cluster: 2025-10-22T08:29:21.032405524Z, ProjectID: 68f8956dab288813b27fd674, Cluster name: test-acc-tf-c-6804064570412143892
2025-10-22T08:29:21.7757275Z    test_terraform_path=/home/runner/work/_temp/3c69cffc-8930-4a85-9b1e-bd78d3cc51dc/terraform test_working_directory=/tmp/plugintest154942978 test_step_number=2 test_name=TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2025-10-22T08:29:21.7758633Z     resource_test.go:308: Step 2/3 error: Error running apply: exit status 1
2025-10-22T08:29:21.7759060Z         
2025-10-22T08:29:21.7759330Z         Error: Error in create
2025-10-22T08:29:21.7759651Z         
2025-10-22T08:29:21.7759986Z           with mongodbatlas_advanced_cluster.test,
2025-10-22T08:29:21.7760627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-22T08:29:21.7761215Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-22T08:29:21.7761530Z         
2025-10-22T08:29:21.7762352Z         cluster name: test-acc-tf-c-6804064570412143892, API error details:
2025-10-22T08:29:21.7763037Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f8956dab288813b27fd674/clusters
2025-10-22T08:29:21.7763549Z         POST: HTTP 403 Forbidden (Error code:
2025-10-22T08:29:21.7764044Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-22T08:29:21.7764635Z         Configuration. Contains selections that are unavailable due to your
2025-10-22T08:29:21.7765203Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-22T08:29:21.7765594Z         BadRequestDetail: 
2025-10-22T08:29:21.8241449Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10.79s)
```
