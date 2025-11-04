# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutFlex Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-26 00:31](#error-2025-10-26t0031280000) |  | qa | timeout | 17.03s
[2025-11-02 00:31](#error-2025-11-02t0031200000) |  | qa |  | 5.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 19 seconds
- 2025-10-07 PASS 49 seconds
- 2025-10-08 PASS a minute
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12 PASS 14 seconds
- 2025-10-13 PASS 22 seconds
- 2025-10-14 PASS 30 seconds
- 2025-10-15 PASS 20 seconds
- 2025-10-16 PASS 19 seconds
- 2025-10-17 PASS 32 seconds
- 2025-10-18 PASS 19 seconds
- 2025-10-19 PASS 29 seconds
- 2025-10-20
  - PASS 28 seconds
  - PASS 29 seconds
- 2025-10-21 PASS 19 seconds
- 2025-10-22
  - PASS 32 seconds
  - PASS 20 seconds
- 2025-10-23 PASS 28 seconds
- 2025-10-24 PASS 19 seconds
- 2025-10-25 PASS 18 seconds
- 2025-10-26

### Error 2025-10-26T00:31:28+00:00
```
2025-10-26T00:31:28.3701499Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:28.3735704Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:44.1578154Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:44.1578857Z     resource_test.go:2885: Step 2/4, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-26T00:31:44.1579319Z         
2025-10-26T00:31:44.1579732Z         Error: error updating flex cluster: test-acc-tf-7606851970589040569
2025-10-26T00:31:44.1580361Z         
2025-10-26T00:31:44.1580748Z           with mongodbatlas_advanced_cluster.test,
2025-10-26T00:31:44.1581384Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-26T00:31:44.1581971Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-26T00:31:44.1582283Z         
2025-10-26T00:31:44.1583015Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b8c328f9755b2cebca0/flexClusters/test-acc-tf-7606851970589040569
2025-10-26T00:31:44.1583853Z         PATCH: HTTP 403 Forbidden (Error code:
2025-10-26T00:31:44.1584421Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-26T00:31:44.1585114Z         Configuration. Contains selections that are unavailable due to your
2025-10-26T00:31:44.1585865Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-26T00:31:44.1586810Z         BadRequestDetail: 
2025-10-26T00:31:45.7053106Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-10-26T00:31:45.7053748Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-26T00:31:45.7054175Z         
2025-10-26T00:31:45.7054430Z         Error: Error in flex delete
2025-10-26T00:31:45.7054836Z         
2025-10-26T00:31:45.7055255Z         cluster name: test-acc-tf-7606851970589040569, API error details: timeout
2025-10-26T00:31:45.7055870Z         while waiting for state to become 'DELETED' (last state: 'DELETING', timeout:
2025-10-26T00:31:45.7056249Z         1s)
2025-10-26T00:31:45.7056553Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (17.33s)
```

- 2025-10-27 PASS 20 seconds
- 2025-10-28 PASS 30 seconds
- 2025-10-29 PASS 22 seconds
- 2025-10-30 PASS 18 seconds
- 2025-10-31 PASS 22 seconds
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:31:20+00:00
```
2025-11-02T00:31:20.5602647Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:20.5699843Z === CONT  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:25.2788382Z === NAME  TestAccAdvancedCluster_updateDeleteTimeoutFlex
2025-11-02T00:31:25.2789349Z     resource_test.go:2885: Step 1/4 error: Error running apply: exit status 1
2025-11-02T00:31:25.2790011Z         
2025-11-02T00:31:25.2791255Z         Error: error creating flex cluster: Cluster name test-acc-tf-8870417062734692184 (project_id=6906a6005ace12378d2965db).
2025-11-02T00:31:25.2792180Z         
2025-11-02T00:31:25.2792771Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.2793962Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.2795035Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.2904865Z         
2025-11-02T00:31:25.2906027Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a6005ace12378d2965db/flexClusters
2025-11-02T00:31:25.2906894Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.2907979Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.2909381Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.2910483Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.2911195Z         BadRequestDetail: 
2025-11-02T00:31:25.3069274Z   
2025-11-02T00:31:25.7121176Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutFlex (5.15s)
```

- 2025-11-03 PASS 20 seconds
- 2025-11-04 PASS 18 seconds