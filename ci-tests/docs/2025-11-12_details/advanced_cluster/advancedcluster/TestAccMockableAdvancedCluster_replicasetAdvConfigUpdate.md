# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 34) FAIL(x 7) TIMEOUT
Success rate: 82.93%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029510000) |  | qa |  | 7.04s
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 6008.01s
[2025-10-09 00:27](#error-2025-10-09t0027300000) |  | dev |  | 6005.05s
[2025-10-12 00:28](#error-2025-10-12t0028560000) |  | qa |  | 6005.07s
[2025-10-20 10:26](#error-2025-10-20t1026370000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e5d5a13b66d7cb6d52b/clusters | dev | out_of_capacity | 5.01s
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa |  | 7.07s
[2025-11-09 00:30](#error-2025-11-09t0030010000) | CLUSTER_NOT_FOUND /api/atlas/v2/groups/690fe089640f4b0e4d07ac29/clusters | qa |  | 1170.09s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS 36 minutes
- 2025-10-24 PASS 20 minutes
- 2025-10-25 PASS 41 minutes
- 2025-10-26 PASS 20 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
- 2025-10-29 PASS 27 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2624590Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-30T00:28:24.2487895Z     resource_test.go:1002: Adding variable clusterName=test-acc-tf-c-5036285164714340711
2025-10-30T00:28:24.2488976Z     resource_test.go:1002: Adding variable groupId=6902b126e2dc7470847bf14d
2025-10-30T00:29:52.4723702Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-30T00:39:59.8331281Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-30T00:39:59.8332926Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7558724466536901345
2025-10-30T00:40:00.1252474Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-4075514828996499948
2025-10-30T00:40:00.9566430Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7054213157015212896
2025-10-30T00:44:40.4519212Z    test_step_number=4 test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset test_terraform_path=/home/runner/work/_temp/393c930d-038d-4707-96f8-6a139002a190/terraform test_working_directory=/tmp/plugintest4284930658
2025-10-30T03:47:17.6806329Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-10-30T03:47:17.6807013Z     resource_test.go:1002: Step 3/4 error: Error running apply: exit status 1
2025-10-30T03:47:17.6807395Z         
2025-10-30T03:47:17.6807800Z         Error: Error in update
2025-10-30T03:47:17.6808047Z         
2025-10-30T03:47:17.6808498Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:47:17.6809190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:47:17.6809845Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:47:17.6810252Z         
2025-10-30T03:47:17.6810699Z         cluster=test-acc-tf-c-5036285164714340711 didn't reach desired state: IDLE,
2025-10-30T03:47:17.6811407Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:47:17.6812076Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:47:21.4032741Z   
2025-10-30T05:28:11.5683140Z 		TestAccClusterAdvancedCluster_replicaSetAWSProvider (4h58m19s)
2025-10-30T05:28:11.5683807Z 		TestAccClusterAdvancedCluster_unpausedToPaused (4h58m19s)
2025-10-30T05:28:11.5684505Z 		TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (4h58m19s)
```

- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:49+00:00
```
2025-11-02T00:29:49.6944393Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-02T00:29:52.2224173Z     resource_test.go:1002: Adding variable groupId=6906a5fd5ace12378d2962e9
2025-11-02T00:29:52.2225201Z     resource_test.go:1002: Adding variable clusterName=test-acc-tf-c-2922484936568554561
2025-11-02T00:31:20.5643625Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-02T00:31:25.3218850Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-02T00:31:25.3220360Z     resource_test.go:1002: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.3221107Z         
2025-11-02T00:31:25.3221666Z         Error: Error in create
2025-11-02T00:31:25.3222183Z         
2025-11-02T00:31:25.3222919Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.3224142Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.3225272Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.3225886Z         
2025-11-02T00:31:25.3226687Z         cluster name: test-acc-tf-c-2922484936568554561, API error details:
2025-11-02T00:31:25.3228227Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fd5ace12378d2962e9/clusters
2025-11-02T00:31:25.3229477Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.3261869Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.3263053Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.3266004Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.3266915Z         BadRequestDetail: 
2025-11-02T00:31:25.3370040Z   
2025-11-02T00:31:25.6900087Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (7.66s)
```

- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-11-06 PASS 30 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09

### Error 2025-11-09T00:30:01+00:00
```
2025-11-09T00:30:01.6863094Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-09T00:30:05.4548419Z     resource_test.go:1002: Adding variable clusterName=test-acc-tf-c-4152664200710239230
2025-11-09T00:30:05.4549233Z     resource_test.go:1002: Adding variable groupId=690fe089640f4b0e4d07ac29
2025-11-09T00:31:28.5412234Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-09T00:39:35.9303592Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-09T00:39:35.9304988Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3226300584689917640
2025-11-09T00:39:36.1207496Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5815680218298451694
2025-11-09T00:39:36.3063762Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-6427333147396774151
2025-11-09T00:45:51.7600581Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-09T00:45:51.7601304Z     resource_test.go:1002: Step 3/4 error: Error running post-apply non-refresh plan: exit status 1
2025-11-09T00:45:51.7601985Z         
2025-11-09T00:45:51.7602307Z         Error: error reading  advanced cluster list
2025-11-09T00:45:51.7602698Z         
2025-11-09T00:45:51.7603044Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-09T00:45:51.7603677Z           on terraform_plugin_test.tf line 46, in data "mongodbatlas_advanced_clusters" "test":
2025-11-09T00:45:51.7604233Z           46: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-09T00:45:51.7604536Z         
2025-11-09T00:45:51.7604829Z         project ID 690fe089640f4b0e4d07ac29. Error
2025-11-09T00:45:51.7605412Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/690fe089640f4b0e4d07ac29/clusters
2025-11-09T00:45:51.7606072Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-11-09T00:45:51.7606897Z         named test-acc-tf-c-6427333147396774151 exists in group
2025-11-09T00:45:51.7607371Z         690fe089640f4b0e4d07ac29. Reason: Not Found. Params:
2025-11-09T00:45:51.7607852Z         [test-acc-tf-c-6427333147396774151 690fe089640f4b0e4d07ac29],
2025-11-09T00:45:51.7608217Z         BadRequestDetail: 
2025-11-09T00:50:55.5962470Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1170.86s)
```

- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 22 minutes
- 2025-11-12 PASS 25 minutes