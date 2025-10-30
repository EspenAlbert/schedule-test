# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3) TIMEOUT
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029530000) |  | qa |  | 4.10s
[2025-10-07 00:27](#error-2025-10-07t0027520000) |  | dev | timeout | 11624.05s
[2025-10-08 00:28](#error-2025-10-08t0028090000) |  | dev | timeout | 11535.08s
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev | timeout | 17899.00s

## Timeline
- 2025-09-30 PASS 20 minutes
- 2025-10-01
  - PASS 31 minutes
  - PASS 22 minutes
  - PASS 32 minutes
  - PASS 23 minutes
  - PASS 30 minutes
  - PASS 23 minutes
  - PASS an hour
  - PASS 25 minutes
- 2025-10-02 PASS 34 minutes
- 2025-10-03 PASS 27 minutes
- 2025-10-04 PASS 35 minutes
- 2025-10-05

### Error 2025-10-05T00:29:53+00:00
```
2025-10-05T00:29:53.9355583Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-05T00:29:54.0344897Z     resource_test.go:1060: Adding variable groupId=68e1bbfffec65822ddfca6a0
2025-10-05T00:29:54.0345673Z     resource_test.go:1060: Adding variable clusterName=test-acc-tf-c-4535835386325485308
2025-10-05T00:31:26.4146413Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-05T00:31:30.9420737Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-05T00:31:30.9421768Z     resource_test.go:1060: Step 1/4 error: Error running apply: exit status 1
2025-10-05T00:31:30.9422393Z         
2025-10-05T00:31:30.9422796Z         Error: Error in create
2025-10-05T00:31:30.9423183Z         
2025-10-05T00:31:30.9423723Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.9435304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.9436326Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.9436844Z         
2025-10-05T00:31:30.9437538Z         cluster name: test-acc-tf-c-4535835386325485308, API error details:
2025-10-05T00:31:30.9438690Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfffec65822ddfca6a0/clusters
2025-10-05T00:31:30.9439618Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.9440523Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.9441589Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.9442626Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.9443333Z         BadRequestDetail: 
2025-10-05T00:31:30.9644143Z    test_working_directory=/tmp/plugintest3706066067
2025-10-05T00:31:31.2690332Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4.97s)
```

- 2025-10-06 PASS 22 minutes
- 2025-10-07

### Error 2025-10-07T00:27:52+00:00
```
2025-10-07T00:27:52.2851978Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-07T00:27:52.3789460Z     resource_test.go:1060: Adding variable groupId=68e45e8512e64d6587ba6b07
2025-10-07T00:27:52.3790211Z     resource_test.go:1060: Adding variable clusterName=test-acc-tf-c-857144765615036898
2025-10-07T00:30:14.9652796Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-07T00:40:22.3024772Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-07T00:40:22.3026664Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-4508217409270556280
2025-10-07T00:40:22.4329016Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-2658967155207044371
2025-10-07T00:40:22.5586291Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-1497216122500424152
2025-10-07T03:40:26.6423277Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-07T03:40:26.6424223Z     resource_test.go:1060: Step 2/4 error: Error running apply: exit status 1
2025-10-07T03:40:26.6424726Z         
2025-10-07T03:40:26.6425198Z         Error: Error in update
2025-10-07T03:40:26.6425477Z         
2025-10-07T03:40:26.6425863Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:40:26.6426685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:40:26.6427411Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:40:26.6427915Z         
2025-10-07T03:40:26.6428598Z         cluster=test-acc-tf-c-857144765615036898 didn't reach desired state: IDLE,
2025-10-07T03:40:26.6429284Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-07T03:40:26.6429775Z         'UPDATING', timeout: 3h0m0s)
2025-10-07T03:43:59.2995736Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11624.45s)
```

- 2025-10-08

### Error 2025-10-08T00:28:09+00:00
```
2025-10-08T00:28:09.6816507Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-08T00:28:09.7756212Z     resource_test.go:1060: Adding variable groupId=68e5b016e831351542f55140
2025-10-08T00:28:09.7757393Z     resource_test.go:1060: Adding variable clusterName=test-acc-tf-c-8042968401322755135
2025-10-08T00:31:57.0369538Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-08T00:41:04.7970842Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-08T00:41:04.7973258Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3331361382595274681
2025-10-08T00:41:04.9932753Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-4833282504650623265
2025-10-08T00:41:05.1994048Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7817613120240995534
2025-10-08T03:41:09.8859571Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-08T03:41:09.8860508Z     resource_test.go:1060: Step 2/4 error: Error running apply: exit status 1
2025-10-08T03:41:09.8860991Z         
2025-10-08T03:41:09.8861245Z         Error: Error in update
2025-10-08T03:41:09.8861689Z         
2025-10-08T03:41:09.8862053Z           with mongodbatlas_advanced_cluster.test,
2025-10-08T03:41:09.8862691Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-08T03:41:09.8863281Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-08T03:41:09.8863587Z         
2025-10-08T03:41:09.8864028Z         cluster=test-acc-tf-c-8042968401322755135 didn't reach desired state: IDLE,
2025-10-08T03:41:09.8864623Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-08T03:41:09.8865044Z         'UPDATING', timeout: 3h0m0s)
2025-10-08T03:44:12.6934610Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (11535.76s)
```

- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 27 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 29 minutes
- 2025-10-14 PASS 37 minutes
- 2025-10-15 PASS 26 minutes
- 2025-10-16 PASS 45 minutes
- 2025-10-17 PASS 28 minutes
- 2025-10-18 PASS 24 minutes
- 2025-10-19 PASS 30 minutes
- 2025-10-20
  - PASS 34 minutes
  - PASS 19 minutes
- 2025-10-21 PASS 26 minutes
- 2025-10-22
  - PASS 37 minutes
  - PASS 23 minutes
- 2025-10-23 PASS 44 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS an hour
- 2025-10-26 PASS 23 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 28 minutes
- 2025-10-29 PASS 33 minutes
- 2025-10-30

### Error 2025-10-30T00:28:24+00:00
```
2025-10-30T00:28:24.2498384Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:28:24.3471216Z     resource_test.go:1050: Adding variable groupId=6902b126e2dc7470847bf14d
2025-10-30T00:28:24.3472228Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-4075514828996499948
2025-10-30T00:29:52.4648234Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:38:59.6162419Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T00:38:59.6164690Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7558724466536901345
2025-10-30T00:39:00.1429266Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5036285164714340711
2025-10-30T00:39:00.8210236Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7054213157015212896
2025-10-30T03:39:05.9164909Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-10-30T03:39:05.9165664Z     resource_test.go:1050: Step 2/4 error: Error running apply: exit status 1
2025-10-30T03:39:05.9166169Z         
2025-10-30T03:39:05.9166516Z         Error: Error in update
2025-10-30T03:39:05.9166881Z         
2025-10-30T03:39:05.9167284Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:39:05.9168111Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:39:05.9168845Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:39:05.9169339Z         
2025-10-30T03:39:05.9169884Z         cluster=test-acc-tf-c-4075514828996499948 didn't reach desired state: IDLE,
2025-10-30T03:39:05.9170593Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-10-30T03:39:05.9171117Z         'UPDATING', timeout: 3h0m0s)
2025-10-30T03:42:02.5108158Z   
2025-10-30T05:28:11.5683807Z 		TestAccClusterAdvancedCluster_unpausedToPaused (4h58m19s)
2025-10-30T05:28:11.5684505Z 		TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (4h58m19s)
2025-10-30T05:28:11.5685543Z 		TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (4h58m19s)
```
