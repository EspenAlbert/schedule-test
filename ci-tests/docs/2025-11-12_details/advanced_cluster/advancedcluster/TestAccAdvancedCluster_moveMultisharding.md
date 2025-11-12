# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 36) FAIL(x 6)
Success rate: 85.71%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029420000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters | qa |  | 4.05s
[2025-10-07 00:27](#error-2025-10-07t0027370000) |  | dev | timeout | 10804.07s
[2025-10-20 10:26](#error-2025-10-20t1026300000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters | dev | out_of_capacity | 3.05s
[2025-10-30 00:28](#error-2025-10-30t0028130000) |  | dev | timeout | 10803.07s
[2025-11-02 00:29](#error-2025-11-02t0029360000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/6906a5ee5ace12378d295167/clusters | qa |  | 5.00s
[2025-11-06 00:27](#error-2025-11-06t0027250000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/690beb6bb0a5510b327ca4ff/clusters | dev |  | 3.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:42+00:00
```
2025-10-05T00:29:42.4788455Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:26.4123548Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:30.7068448Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-05T00:31:30.7071835Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-05T00:31:30.7074502Z         
2025-10-05T00:31:30.7121231Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-10-05T00:31:30.7123329Z         
2025-10-05T00:31:30.7123851Z           with mongodbatlas_cluster.old,
2025-10-05T00:31:30.7125051Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-05T00:31:30.7125998Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-05T00:31:30.7126493Z         
2025-10-05T00:31:30.8525380Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (4.46s)
```

- 2025-10-06 PASS 19 minutes
- 2025-10-07

### Error 2025-10-07T00:27:37+00:00
```
2025-10-07T00:27:37.4683505Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-07T00:30:14.9881946Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-07T00:30:16.5975267Z   diagnostic_detail=
2025-10-07T00:30:16.5980772Z    diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_proto_version=6.10
2025-10-07T03:30:19.6674496Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-07T03:30:19.6675478Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:30:19.6676046Z         
2025-10-07T03:30:19.6676857Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:30:19.6677770Z         
2025-10-07T03:30:19.6678287Z           with mongodbatlas_cluster.old,
2025-10-07T03:30:19.6679605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-07T03:30:19.6680521Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-07T03:30:19.6681006Z         
2025-10-07T03:30:19.7220532Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (10804.74s)
```

- 2025-10-08 PASS 22 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 24 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 29 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 40 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 3 seconds

### Error 2025-10-20T10:26:30+00:00
```
2025-10-20T10:26:30.0952829Z === RUN   TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:27.7303051Z === CONT  TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:31.1332340Z === NAME  TestAccAdvancedCluster_moveMultisharding
2025-10-20T10:28:31.1333609Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-10-20T10:28:31.1334320Z         
2025-10-20T10:28:31.1336923Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-20T10:28:31.1338584Z         
2025-10-20T10:28:31.1339102Z           with mongodbatlas_cluster.old,
2025-10-20T10:28:31.1340134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-20T10:28:31.1341059Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-20T10:28:31.1341565Z         
2025-10-20T10:28:31.1980429Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (3.47s)
```

- 2025-10-21 PASS 19 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 20 minutes
- 2025-10-23 PASS 35 minutes
- 2025-10-24 PASS 27 minutes
- 2025-10-25 PASS 22 minutes
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
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
- 2025-11-09 PASS 21 minutes
- 2025-11-10 PASS 20 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 25 minutes