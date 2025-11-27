# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 10803.07s
[2025-11-06 00:27](#error-2025-11-06t0027250000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/690beb6bb0a5510b327ca4ff/clusters | dev |  | 3.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:13+00:00
```
2025-10-30T00:28:13.2689434Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-30T00:29:52.5092792Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-30T00:29:53.8653208Z   diagnostic_detail=
2025-10-30T00:29:53.8660109Z    diagnostic_severity=ERROR diagnostic_summary="Missing Configuration for Required Attribute" tf_rpc=ValidateResourceConfig tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-10-30T03:29:56.1274663Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-30T03:29:56.1275462Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-30T03:29:56.1276042Z         
2025-10-30T03:29:56.1276824Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-30T03:29:56.1277672Z         
2025-10-30T03:29:56.1278177Z           with mongodbatlas_cluster.old,
2025-10-30T03:29:56.1278917Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-30T03:29:56.1279549Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-30T03:29:56.1279844Z         
2025-10-30T03:29:56.1803832Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (10803.68s)
```

- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 24 minutes
- 2025-11-06

### Error 2025-11-06T00:27:25+00:00
```
2025-11-06T00:27:25.1856236Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-11-06T00:29:11.2753921Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-11-06T00:29:14.1183793Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-11-06T00:29:14.1185333Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-11-06T00:29:14.1186249Z         
2025-11-06T00:29:14.1190177Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/690beb6bb0a5510b327ca4ff/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-11-06T00:29:14.1192871Z         
2025-11-06T00:29:14.1193606Z           with mongodbatlas_cluster.old,
2025-11-06T00:29:14.1195835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-11-06T00:29:14.1197496Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-11-06T00:29:14.1198251Z         
2025-11-06T00:29:14.3703228Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (3.11s)
```

- 2025-11-07 PASS 26 minutes
- 2025-11-08 PASS 43 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 20 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 25 minutes
- 2025-11-13 PASS 31 minutes
- 2025-11-14 PASS 25 minutes
- 2025-11-15 PASS 21 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 25 minutes
- 2025-11-18 PASS 22 minutes
- 2025-11-19
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-11-20
  - PASS 28 minutes
  - PASS 18 minutes
- 2025-11-21 PASS 20 minutes
- 2025-11-22 PASS 17 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 18 minutes
- 2025-11-25 PASS 21 minutes
- 2025-11-26 PASS 19 minutes
- 2025-11-27 PASS 27 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029360000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/6906a5ee5ace12378d295167/clusters | qa | 5.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:36+00:00
```
2025-11-02T00:29:36.9949250Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-11-02T00:31:20.5860435Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-11-02T00:31:25.1724933Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-11-02T00:31:25.1726449Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-11-02T00:31:25.1727851Z         
2025-11-02T00:31:25.1732252Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6906a5ee5ace12378d295167/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-11-02T00:31:25.1734880Z         
2025-11-02T00:31:25.1735543Z           with mongodbatlas_cluster.old,
2025-11-02T00:31:25.1738660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-11-02T00:31:25.1740915Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-11-02T00:31:25.1741427Z         
2025-11-02T00:31:25.1868018Z    test_terraform_path=/home/runner/work/_temp/60a36c34-dbcd-44d9-9066-0019faa00ebd/terraform test_working_directory=/tmp/plugintest2213506168 test_name=TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:31:25.5790307Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (5.00s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 21 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 23 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 24 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
