# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 36) FAIL(x 5) TIMEOUT
Success rate: 87.80%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029530000) |  | qa |  | 4.10s
[2025-10-07 00:27](#error-2025-10-07t0027520000) |  | dev | timeout | 11624.05s
[2025-10-08 00:28](#error-2025-10-08t0028090000) |  | dev | timeout | 11535.08s
[2025-10-30 00:28](#error-2025-10-30t0028240000) |  | dev | timeout | 17899.00s
[2025-11-02 00:29](#error-2025-11-02t0029520000) |  | qa |  | 5.01s
[2025-11-08 00:29](#error-2025-11-08t0029140000) |  | dev |  | 10803.04s

## Timeline
- 2025-10-03: MISSING
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

- 2025-10-31 PASS 34 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:52+00:00
```
2025-11-02T00:29:52.2236967Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:29:52.3249775Z     resource_test.go:1050: Adding variable groupId=6906a5fd5ace12378d2962e9
2025-11-02T00:29:52.3251146Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-1827879131688120531
2025-11-02T00:31:20.6108775Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:31:22.3343846Z   diagnostic_detail=
2025-11-02T00:31:22.3349874Z    diagnostic_severity=ERROR diagnostic_summary="Missing Configuration for Required Attribute" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_proto_version=6.10 tf_req_id=6c20d6be-868a-8e8b-c2b5-acc0f664f927
2025-11-02T00:31:25.1869907Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-02T00:31:25.1871382Z     resource_test.go:1050: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.1871994Z         
2025-11-02T00:31:25.1872389Z         Error: Error in create
2025-11-02T00:31:25.1872798Z         
2025-11-02T00:31:25.1873365Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.1874488Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.1875484Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.1876008Z         
2025-11-02T00:31:25.1876694Z         cluster name: test-acc-tf-c-1827879131688120531, API error details:
2025-11-02T00:31:25.1878272Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fd5ace12378d2962e9/clusters
2025-11-02T00:31:25.1918608Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.1919510Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.1920552Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.1921546Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.1922214Z         BadRequestDetail: 
2025-11-02T00:31:25.1962463Z    test_terraform_path=/home/runner/work/_temp/60a36c34-dbcd-44d9-9066-0019faa00ebd/terraform test_working_directory=/tmp/plugintest3631750824
2025-11-02T00:31:25.6482580Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (5.15s)
```

- 2025-11-03 PASS 35 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 24 minutes
- 2025-11-06 PASS 37 minutes
- 2025-11-07 PASS 29 minutes
- 2025-11-08

### Error 2025-11-08T00:29:14+00:00
```
2025-11-08T00:29:14.7956886Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T00:29:14.8995511Z     resource_test.go:1050: Adding variable groupId=690e8ed80887d8385bbd77ce
2025-11-08T00:29:14.8996585Z     resource_test.go:1050: Adding variable clusterName=test-acc-tf-c-737049655562379421
2025-11-08T00:31:08.7356855Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T03:31:11.9702695Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-11-08T03:31:11.9703742Z     resource_test.go:1050: Step 1/4 error: Error running apply: exit status 1
2025-11-08T03:31:11.9704164Z         
2025-11-08T03:31:11.9704414Z         Error: Error in create
2025-11-08T03:31:11.9704654Z         
2025-11-08T03:31:11.9704977Z           with mongodbatlas_advanced_cluster.test,
2025-11-08T03:31:11.9705922Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-08T03:31:11.9706599Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2025-11-08T03:31:11.9706944Z         
2025-11-08T03:31:11.9707391Z         cluster=test-acc-tf-c-737049655562379421 didn't reach desired state: IDLE,
2025-11-08T03:31:11.9707838Z         error: context deadline exceeded
2025-11-08T03:31:12.0155882Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (10803.39s)
```

- 2025-11-09 PASS 25 minutes
- 2025-11-10 PASS 24 minutes
- 2025-11-11 PASS 23 minutes
- 2025-11-12 PASS 28 minutes