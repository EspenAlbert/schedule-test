# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3) TIMEOUT
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 17899.00s
[2025-11-20 00:28](#error-2025-11-20t0028090000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/691e6099f41e983fa169cc7b/clusters/test-acc-tf-c-2179968536261915397 | dev |  | 1136.08s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 22 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-11-06 PASS 30 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 22 minutes
- 2025-11-12 PASS 25 minutes
- 2025-11-13 PASS 41 minutes
- 2025-11-14 PASS 29 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 26 minutes
- 2025-11-18 PASS 23 minutes
- 2025-11-19
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-11-20
  - FAIL 18 minutes

### Error 2025-11-20T00:28:09+00:00
```
2025-11-20T00:28:09.4968019Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-20T00:28:13.1156395Z     resource_test.go:1003: Adding variable clusterName=test-acc-tf-c-2179968536261915397
2025-11-20T00:28:13.1157000Z     resource_test.go:1003: Adding variable groupId=691e6099f41e983fa169cc7b
2025-11-20T00:29:55.6005847Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-20T00:40:34.0991658Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-11-20T00:40:34.0993138Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5222046483764000345
2025-11-20T00:40:34.4120903Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8452484184725804989
2025-11-20T00:40:35.0366410Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-8813046102827282965
2025-11-20T00:40:41.6143342Z   
2025-11-20T00:40:41.6143718Z     resource_test.go:1003: Step 2/4 error: Error running apply: exit status 1
2025-11-20T00:40:41.6144186Z         
2025-11-20T00:40:41.6144425Z         Error: Error in update
2025-11-20T00:40:41.6144725Z         
2025-11-20T00:40:41.6145027Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T00:40:41.6145677Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T00:40:41.6146369Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T00:40:41.6146655Z         
2025-11-20T00:40:41.6147031Z         cluster name: test-acc-tf-c-2179968536261915397, API error details:
2025-11-20T00:40:41.6147797Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e6099f41e983fa169cc7b/clusters/test-acc-tf-c-2179968536261915397
2025-11-20T00:40:41.6148513Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2025-11-20T00:40:41.6149096Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2025-11-20T00:40:41.6149661Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2025-11-20T00:40:41.6150216Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2025-11-20T00:40:41.6150725Z         Please wait a few minutes and try again.], BadRequestDetail: 
2025-11-20T00:48:48.7924568Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (1136.82s)
```

  - PASS 16 minutes
- 2025-11-21 PASS 16 minutes
- 2025-11-22 PASS 18 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 17 minutes
- 2025-11-25 PASS 20 minutes
- 2025-11-26 PASS 17 minutes
- 2025-11-27 PASS 24 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029490000) |  | qa | 7.07s
[2025-11-09 00:30](#error-2025-11-09t0030010000) | CLUSTER_NOT_FOUND /api/atlas/v2/groups/690fe089640f4b0e4d07ac29/clusters | qa | 1170.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
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

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
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

- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 26 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 27 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
