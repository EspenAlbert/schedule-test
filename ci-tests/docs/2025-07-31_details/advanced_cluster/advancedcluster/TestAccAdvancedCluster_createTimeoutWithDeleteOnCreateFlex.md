# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-09 01:10](#error-2025-07-09t0110260000) | API Error CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/{groupId}/flexClusters | dev | real_test_failure | 76.07s
[2025-07-16 01:03](#error-2025-07-16t0103360000) |  | dev |  | 138.00s
[2025-07-17 01:01](#error-2025-07-17t0101180000) | CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/68784b5cde3dfe20a0f4e64b/flexClusters | dev |  | 87.02s
[2025-07-22 08:08](#error-2025-07-22t0808550000) |  | dev |  | 349.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 2 minutes
- 2025-07-05 PASS 6 minutes
- 2025-07-06 PASS 2 minutes
- 2025-07-07 PASS 6 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09

### Error 2025-07-09T01:10:26+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-09T01:10:26.407000+00:00-TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex',confidence=1.0,ts_when='22 days ago')
API Error CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/{groupId}/flexClusters
```
2025-07-09T01:10:26.4073072Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:11:17.0819733Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:12:33.7733535Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-09T01:12:33.7734692Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-07-09T01:12:33.7735247Z         
2025-07-09T01:12:33.7737979Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/686dc17f4d24ec7e5ee23796/flexClusters POST: HTTP 400 Bad Request (Error code: "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error occurred. Please try again in a minute or use a different name. Reason: Bad Request. Params: [A transient error occurred. Please try again in a minute or use a different name.], BadRequestDetail: 
2025-07-09T01:12:33.7739779Z         
2025-07-09T01:12:33.7740108Z           with mongodbatlas_advanced_cluster.test,
2025-07-09T01:12:33.7740757Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-09T01:12:33.7741345Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-07-09T01:12:33.7741647Z         
2025-07-09T01:12:33.8177048Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (76.74s)
```

- 2025-07-10 PASS 7 minutes
- 2025-07-11 PASS 4 minutes
- 2025-07-12 PASS 6 minutes
- 2025-07-13 PASS 2 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 7 minutes
- 2025-07-16

### Error 2025-07-16T01:03:36+00:00
```
2025-07-16T01:03:36.1172890Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-16T01:04:23.7470931Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-16T01:06:11.7575759Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-16T01:06:11.7577698Z     resource_advanced_cluster_test.go:1465: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-07-16T01:06:11.7579032Z         
2025-07-16T01:06:11.7579661Z           map[string]string{
2025-07-16T01:06:11.7580254Z         - 	"connection_strings.0.standard":     "",
2025-07-16T01:06:11.7583131Z         + 	"connection_strings.0.standard":     "mongodb://ac-zljet3h-shard-00-00.yhfytis.mongodb-dev.net:27017,ac-zljet3h-shard-00-01.yhfytis.mongodb-dev.net:27017,ac-zljet3h-shard-00-02.yhfytis.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-zdcl9b-shard-0",
2025-07-16T01:06:11.7584378Z         - 	"connection_strings.0.standard_srv": "",
2025-07-16T01:06:11.7585112Z         + 	"connection_strings.0.standard_srv": "mongodb+srv://test-acc-tf-c-142052815.yhfytis.mongodb-dev.net",
2025-07-16T01:06:11.7585626Z           }
2025-07-16T01:06:41.7872058Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (138.04s)
```

- 2025-07-17

### Error 2025-07-17T01:01:18+00:00
```
2025-07-17T01:01:18.1068736Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-17T01:02:14.8968221Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-17T01:03:42.0697558Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-17T01:03:42.0698698Z     resource_advanced_cluster_test.go:1465: Step 2/3 error: Error running apply: exit status 1
2025-07-17T01:03:42.0699493Z         
2025-07-17T01:03:42.0702305Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68784b5cde3dfe20a0f4e64b/flexClusters POST: HTTP 400 Bad Request (Error code: "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error occurred. Please try again in a minute or use a different name. Reason: Bad Request. Params: [A transient error occurred. Please try again in a minute or use a different name.], BadRequestDetail: 
2025-07-17T01:03:42.0703986Z         
2025-07-17T01:03:42.0704565Z           with mongodbatlas_advanced_cluster.test,
2025-07-17T01:03:42.0705466Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-17T01:03:42.0706175Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-07-17T01:03:42.0706480Z         
2025-07-17T01:03:42.1280809Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (87.23s)
```

- 2025-07-18 PASS 9 minutes
- 2025-07-19 PASS 7 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 5 minutes
- 2025-07-22

### Error 2025-07-22T08:08:55+00:00
```
2025-07-22T08:08:55.9616433Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-22T08:09:52.0919043Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-22T08:14:29.6035447Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-07-22T08:14:29.6037489Z     resource_advanced_cluster_test.go:1465: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-07-22T08:14:29.6038919Z         
2025-07-22T08:14:29.6039360Z           map[string]string{
2025-07-22T08:14:29.6040013Z         - 	"connection_strings.0.standard":     "",
2025-07-22T08:14:29.6043615Z         + 	"connection_strings.0.standard":     "mongodb://test-acc-tf-c-246404197-shard-00-00.qs9ifi.mongodb-dev.net:27017,test-acc-tf-c-246404197-shard-00-01.qs9ifi.mongodb-dev.net:27017,test-acc-tf-c-246404197-shard-00-02.qs9ifi.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-yi9pp6-"...,
2025-07-22T08:14:29.6045364Z         - 	"connection_strings.0.standard_srv": "",
2025-07-22T08:14:29.6046129Z         + 	"connection_strings.0.standard_srv": "mongodb+srv://test-acc-tf-c-246404197.qs9ifi.mongodb-dev.net",
2025-07-22T08:14:29.6046638Z           }
2025-07-22T08:15:41.2368442Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (349.15s)
```

- 2025-07-23
  - PASS 5 minutes
  - PASS 2 minutes
  - PASS 5 minutes
  - PASS 2 minutes
- 2025-07-24 PASS 6 minutes
- 2025-07-25 PASS 6 minutes
- 2025-07-26 PASS 8 minutes
- 2025-07-27 PASS 2 minutes
- 2025-07-28 PASS 2 minutes
- 2025-07-29 PASS 10 minutes
- 2025-07-30 PASS 6 minutes
- 2025-07-31 PASS 18 minutes