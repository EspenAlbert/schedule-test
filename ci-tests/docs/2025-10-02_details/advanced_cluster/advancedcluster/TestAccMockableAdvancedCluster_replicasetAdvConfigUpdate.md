# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 00:28](#error-2025-10-01t0028330000) |  | dev |  | 6006.07s
[2025-10-01 04:55](#error-2025-10-01t0455060000) |  | dev | flaky_500 | 1015.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 48 minutes
- 2025-09-04 PASS 40 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 39 minutes
- 2025-09-07 PASS 26 minutes
- 2025-09-08
  - PASS 41 minutes
  - PASS 31 minutes
  - PASS 33 minutes
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
- 2025-09-19 PASS 20 minutes
- 2025-09-20 PASS 20 minutes
- 2025-09-21 PASS 18 minutes
- 2025-09-22 PASS 19 minutes
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