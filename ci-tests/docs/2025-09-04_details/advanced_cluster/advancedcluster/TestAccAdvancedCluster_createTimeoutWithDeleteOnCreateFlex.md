# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-25 00:29](#error-2025-08-25t0029280000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68abae6616afe76254e8ac3b/flexClusters | dev | 86.05s
[2025-08-28 00:27](#error-2025-08-28t0027450000) |  | dev | 318.07s
[2025-09-01 00:30](#error-2025-09-01t0030440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 07:57](#error-2025-09-01t0757570000) | CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP /api/atlas/v2/groups/68b55203e551ff23b4099e10/flexClusters | dev | 97.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 14 minutes
- 2025-08-11 PASS 33 minutes
- 2025-08-12
  - PASS 12 minutes
  - PASS 6 minutes
- 2025-08-13 PASS 11 minutes
- 2025-08-14 PASS 15 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 47 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 8 minutes
- 2025-08-19 PASS 5 minutes
- 2025-08-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 2 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 3 minutes
- 2025-08-24 PASS 2 minutes
- 2025-08-25

### Error 2025-08-25T00:29:28+00:00
```
2025-08-25T00:29:28.5520482Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-25T00:30:27.1277683Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-25T00:31:53.5570395Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-25T00:31:53.5571058Z     resource_advanced_cluster_test.go:1467: Step 2/3 error: Error running apply: exit status 1
2025-08-25T00:31:53.5571725Z         
2025-08-25T00:31:53.5574059Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae6616afe76254e8ac3b/flexClusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-25T00:31:53.5575756Z         
2025-08-25T00:31:53.5576078Z           with mongodbatlas_advanced_cluster.test,
2025-08-25T00:31:53.5576718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-25T00:31:53.5577301Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-08-25T00:31:53.5577601Z         
2025-08-25T00:31:53.5994530Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (86.47s)
```

- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 15 minutes
- 2025-08-28

### Error 2025-08-28T00:27:45+00:00
```
2025-08-28T00:27:45.3645455Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-28T00:28:33.8532499Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-28T00:33:02.5868170Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-28T00:33:02.5870552Z     resource_advanced_cluster_test.go:1467: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-08-28T00:33:02.5872176Z         
2025-08-28T00:33:02.5872876Z         Â Â map[string]string{
2025-08-28T00:33:02.5873629Z         -Â 	"connection_strings.0.standard":     "",
2025-08-28T00:33:02.5877383Z         +Â 	"connection_strings.0.standard":     "mongodb://test-acc-tf-c-149206612-shard-00-00.rozge4.mongodb-dev.net:27017,test-acc-tf-c-149206612-shard-00-01.rozge4.mongodb-dev.net:27017,test-acc-tf-c-149206612-shard-00-02.rozge4.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-np0mt8-"...,
2025-08-28T00:33:02.5880525Z         -Â 	"connection_strings.0.standard_srv": "",
2025-08-28T00:33:02.5881725Z         +Â 	"connection_strings.0.standard_srv": "mongodb+srv://test-acc-tf-c-149206612.rozge4.mongodb-dev.net",
2025-08-28T00:33:02.5882539Z         -Â 	"mongo_db_version":                  "8.0.13",
2025-08-28T00:33:02.5883222Z         +Â 	"mongo_db_version":                  "8.0.12",
2025-08-28T00:33:02.5883665Z         Â Â }
2025-08-28T00:33:52.6026351Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (318.75s)
```

- 2025-08-29: MISSING
- 2025-08-30 PASS 9 minutes
- 2025-08-31 PASS 5 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:44+00:00
```
2025-09-01T00:30:44.2517667Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T00:30:44.3738997Z     shared_resource.go:93: 
2025-09-01T00:30:44.3740559Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:44.3742896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:44.3745357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:44.3747384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:44.3749389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:44.3751688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1439
2025-09-01T00:30:44.3752638Z         	Error:      	Received unexpected error:
2025-09-01T00:30:44.3755739Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.3757178Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T00:30:44.3759478Z         	Messages:   	Project creation failed: test-acc-tf-p-6056679931135283812, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.3761024Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (0.12s)
```

  - PASS 20 minutes
  - FAIL a minute

### Error 2025-09-01T07:57:57+00:00
```
2025-09-01T07:57:57.3434054Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T07:59:40.0556873Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T08:01:17.1669271Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T08:01:17.1670031Z     resource_advanced_cluster_test.go:1467: Step 2/3 error: Error running apply: exit status 1
2025-09-01T08:01:17.1670501Z         
2025-09-01T08:01:17.1673492Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b55203e551ff23b4099e10/flexClusters POST: HTTP 400 Bad Request (Error code: "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error occurred. Please try again in a minute or use a different name. Reason: Bad Request. Params: [A transient error occurred. Please try again in a minute or use a different name.], BadRequestDetail: 
2025-09-01T08:01:17.1675015Z         
2025-09-01T08:01:17.1675340Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T08:01:17.1675990Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T08:01:17.1676579Z           12: 			resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T08:01:17.1676885Z         
2025-09-01T08:01:17.2136046Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (97.16s)
```

  - PASS 9 minutes
  - PASS 2 minutes
  - PASS 6 minutes
  - PASS 7 minutes
  - PASS 9 minutes
- 2025-09-02 PASS 9 minutes
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 6 minutes