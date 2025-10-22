# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 8)
Success rate: 81.82%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 00:28](#error-2025-10-01t0028330000) |  | dev |  | 6006.07s
[2025-10-01 04:55](#error-2025-10-01t0455060000) |  | dev | flaky_500 | 1015.09s
[2025-10-03 00:26](#error-2025-10-03t0026260000) |  | dev |  | 6006.07s
[2025-10-05 00:29](#error-2025-10-05t0029510000) |  | qa |  | 7.04s
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 6008.01s
[2025-10-09 00:27](#error-2025-10-09t0027300000) |  | dev |  | 6005.05s
[2025-10-12 00:28](#error-2025-10-12t0028560000) |  | qa |  | 6005.07s
[2025-10-20 10:26](#error-2025-10-20t1026370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 5.01s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 21 minutes
- 2025-09-24 PASS 22 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 29 minutes
- 2025-09-27 PASS 23 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - PASS 27 minutes
  - PASS 16 minutes
- 2025-09-30
  - PASS 26 minutes
  - PASS 16 minutes
  - PASS 22 minutes
  - PASS 20 minutes
  - PASS 15 minutes
- 2025-10-01
  - FAIL an hour

### Error 2025-10-01T00:28:33+00:00
```
2025-10-01T00:28:33.7393288Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T00:28:36.1821936Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-2757395929244547991
2025-10-01T00:28:36.1822943Z     resource_test.go:1012: Adding variable groupId=68dc75b10c72c45ec9a8f496
2025-10-01T00:30:01.0313105Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T02:10:05.2336981Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T02:10:05.2337992Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-01T02:10:05.2338850Z         
2025-10-01T02:10:05.2339100Z         Error: Error in create
2025-10-01T02:10:05.2339353Z         
2025-10-01T02:10:05.2339801Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T02:10:05.2340860Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T02:10:05.2341575Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T02:10:05.2341877Z         
2025-10-01T02:10:05.2342324Z         cluster=test-acc-tf-c-2757395929244547991 didn't reach desired state: IDLE,
2025-10-01T02:10:05.2342778Z         error: context deadline exceeded
2025-10-01T02:10:05.2826744Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6006.70s)
```

  - PASS 41 minutes
  - FAIL 16 minutes

### Error 2025-10-01T04:55:06+00:00
```
2025-10-01T04:55:06.8689125Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T04:55:09.5344078Z     resource_test.go:1012: Adding variable groupId=68dcb42a5b2d552e98f72bef
2025-10-01T04:55:09.5344853Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-8974124361334065215
2025-10-01T04:56:43.0422178Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T05:11:04.2854347Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-01T05:11:04.2856067Z     http_mocker_config_capture.go:107: error parsing round trip: invalid character 'u' looking for beginning of value
2025-10-01T05:11:04.2908458Z   
2025-10-01T05:11:04.2908869Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-01T05:11:04.2909251Z         
2025-10-01T05:11:04.2909569Z         Error: error reading  advanced cluster list
2025-10-01T05:11:04.2909983Z         
2025-10-01T05:11:04.2910389Z           with data.mongodbatlas_advanced_clusters.test,
2025-10-01T05:11:04.2911121Z           on terraform_plugin_test.tf line 46, in data "mongodbatlas_advanced_clusters" "test":
2025-10-01T05:11:04.2911742Z           46: 	data "mongodbatlas_advanced_clusters" "test" {
2025-10-01T05:11:04.2912175Z         
2025-10-01T05:11:04.2912484Z         project ID 68dcb42a5b2d552e98f72bef. Error
2025-10-01T05:11:04.2913220Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb42a5b2d552e98f72bef/clusters
2025-10-01T05:11:04.2914299Z         GET: HTTP 503 Service Unavailable (Error code: "") Detail:  Reason: . Params:
2025-10-01T05:11:04.2914832Z         [], BadRequestDetail: 
2025-10-01T05:13:36.2678055Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1015.89s)
```

  - PASS 38 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 27 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 30 minutes
- 2025-10-03

### Error 2025-10-03T00:26:26+00:00
```
2025-10-03T00:26:26.3099972Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-03T00:26:28.3621103Z     resource_test.go:1012: Adding variable groupId=68df18325ed0e32a8dd2329c
2025-10-03T00:26:28.3622164Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-5262521086767295261
2025-10-03T00:28:04.6533907Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-03T02:08:09.2231288Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-03T02:08:09.2232299Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-03T02:08:09.2232859Z         
2025-10-03T02:08:09.2233114Z         Error: Error in create
2025-10-03T02:08:09.2233360Z         
2025-10-03T02:08:09.2233676Z           with mongodbatlas_advanced_cluster.test,
2025-10-03T02:08:09.2234329Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-03T02:08:09.2235301Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-03T02:08:09.2235622Z         
2025-10-03T02:08:09.2236309Z         cluster=test-acc-tf-c-5262521086767295261 didn't reach desired state: IDLE,
2025-10-03T02:08:09.2236788Z         error: context deadline exceeded
2025-10-03T02:08:09.2742281Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6006.67s)
```

- 2025-10-04 PASS 27 minutes
- 2025-10-05

### Error 2025-10-05T00:29:51+00:00
```
2025-10-05T00:29:51.4062418Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-05T00:29:53.9342239Z     resource_test.go:1012: Adding variable groupId=68e1bbfffec65822ddfca6a0
2025-10-05T00:29:53.9353513Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-119775428776691234
2025-10-05T00:31:26.4147899Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-05T00:31:30.8673804Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-05T00:31:30.8674958Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.8675591Z         
2025-10-05T00:31:30.8676028Z         Error: Error in create
2025-10-05T00:31:30.8676444Z         
2025-10-05T00:31:30.8676989Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.8678143Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.8679175Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.8679667Z         
2025-10-05T00:31:30.8680339Z         cluster name: test-acc-tf-c-119775428776691234, API error details:
2025-10-05T00:31:30.8681453Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfffec65822ddfca6a0/clusters
2025-10-05T00:31:30.8682335Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.8683167Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.8879051Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.8882991Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.8884162Z         BadRequestDetail: 
2025-10-05T00:31:30.8896478Z    test_step_number=1 test_name=TestAccClusterAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/d6726d11-c2b5-40bc-b1fa-9f3e3dd393d4/terraform
2025-10-05T00:31:31.2835203Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (7.41s)
```

- 2025-10-06 PASS 18 minutes
- 2025-10-07

### Error 2025-10-07T00:27:49+00:00
```
2025-10-07T00:27:49.5426776Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-07T00:27:52.2841305Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-2658967155207044371
2025-10-07T00:27:52.2842174Z     resource_test.go:1012: Adding variable groupId=68e45e8512e64d6587ba6b07
2025-10-07T00:30:14.9490906Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-07T02:10:20.2907261Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-07T02:10:20.2908141Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-07T02:10:20.2908674Z         
2025-10-07T02:10:20.2909013Z         Error: Error in create
2025-10-07T02:10:20.2909406Z         
2025-10-07T02:10:20.2909831Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T02:10:20.2910663Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T02:10:20.2911492Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T02:10:20.2911990Z         
2025-10-07T02:10:20.2912552Z         cluster=test-acc-tf-c-2658967155207044371 didn't reach desired state: IDLE,
2025-10-07T02:10:20.2913126Z         error: context deadline exceeded
2025-10-07T02:10:20.3383607Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6008.14s)
```

- 2025-10-08 PASS 23 minutes
- 2025-10-09

### Error 2025-10-09T00:27:30+00:00
```
2025-10-09T00:27:30.3178758Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-09T00:27:32.1549534Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-3986572795738350890
2025-10-09T00:27:32.1550737Z     resource_test.go:1012: Adding variable groupId=68e70172c2a3cd1693047695
2025-10-09T00:35:20.1787514Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-09T02:15:23.7393391Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-09T02:15:23.7394228Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-09T02:15:23.7394693Z         
2025-10-09T02:15:23.7395048Z         Error: Error in create
2025-10-09T02:15:23.7395500Z         
2025-10-09T02:15:23.7395942Z           with mongodbatlas_advanced_cluster.test,
2025-10-09T02:15:23.7396670Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-09T02:15:23.7397424Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-09T02:15:23.7397824Z         
2025-10-09T02:15:23.7398359Z         cluster=test-acc-tf-c-3986572795738350890 didn't reach desired state: IDLE,
2025-10-09T02:15:23.7398821Z         error: context deadline exceeded
2025-10-09T02:15:23.7864354Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6005.46s)
```

- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12

### Error 2025-10-12T00:28:56+00:00
```
2025-10-12T00:28:56.8484410Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-12T00:28:58.4275006Z     resource_test.go:1012: Adding variable groupId=68eaf648454e3b49aeac2c6b
2025-10-12T00:28:58.4276099Z     resource_test.go:1012: Adding variable clusterName=test-acc-tf-c-8511909149330060552
2025-10-12T00:30:21.7461412Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-12T02:10:25.8526329Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-12T02:10:25.8527460Z     resource_test.go:1012: Step 1/4 error: Error running apply: exit status 1
2025-10-12T02:10:25.8527920Z         
2025-10-12T02:10:25.8528201Z         Error: Error in create
2025-10-12T02:10:25.8528560Z         
2025-10-12T02:10:25.8529083Z           with mongodbatlas_advanced_cluster.test,
2025-10-12T02:10:25.8529934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-12T02:10:25.8530903Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-12T02:10:25.8531221Z         
2025-10-12T02:10:25.8531679Z         cluster=test-acc-tf-c-8511909149330060552 didn't reach desired state: IDLE,
2025-10-12T02:10:25.8532142Z         error: context deadline exceeded
2025-10-12T02:10:25.9001468Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (6005.74s)
```

- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 23 minutes
- 2025-10-15 PASS 21 minutes
- 2025-10-16 PASS 39 minutes
- 2025-10-17 PASS 24 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 23 minutes
- 2025-10-20
  - PASS 25 minutes
  - FAIL 5 seconds

### Error 2025-10-20T10:26:37+00:00
```
2025-10-20T10:26:37.8349634Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-20T10:26:39.4559822Z     resource_test.go:1002: Adding variable groupId=68f60e5d5a13b66d7cb6d52b
2025-10-20T10:26:39.4560937Z     resource_test.go:1002: Adding variable clusterName=test-acc-tf-c-4533053745159139945
2025-10-20T10:28:27.7306305Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-20T10:28:31.1150632Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-20T10:28:31.1151339Z     resource_test.go:1002: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:31.1151728Z         
2025-10-20T10:28:31.1152089Z         Error: Error in create
2025-10-20T10:28:31.1152352Z         
2025-10-20T10:28:31.1152719Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:31.1153450Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:31.1154267Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:31.1154699Z         
2025-10-20T10:28:31.1155128Z         cluster name: test-acc-tf-c-4533053745159139945, API error details:
2025-10-20T10:28:31.1156084Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters
2025-10-20T10:28:31.1157024Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:31.1157936Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:31.1158430Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:31.1331920Z   
2025-10-20T10:28:31.1873164Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (5.08s)
```

- 2025-10-21 PASS 19 minutes
- 2025-10-22
  - PASS 25 minutes
  - PASS 21 minutes