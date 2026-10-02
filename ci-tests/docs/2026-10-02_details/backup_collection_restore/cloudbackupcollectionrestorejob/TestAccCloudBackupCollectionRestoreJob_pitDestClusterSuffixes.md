# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 0.00s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev |  | 0.00s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 0.00s
[2026-09-16 01:37](#error-2026-09-16t0137050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs | dev | flaky_500 | 1055.10s
[2026-09-17 01:32](#error-2026-09-17t0132340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs | dev | flaky_500 | 1085.05s
[2026-09-19 01:12](#error-2026-09-19t0112230000) |  | dev | timeout | 0.00s
[2026-09-23 01:01](#error-2026-09-23t0101090000) |  | dev |  | 0.00s
[2026-09-23 08:42](#error-2026-09-23t0842350000) |  | dev |  | 0.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 29 minutes
- 2026-09-03 PASS 28 minutes
- 2026-09-04 PASS 30 minutes
- 2026-09-05 PASS 29 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 29 minutes
- 2026-09-08 PASS 29 minutes
- 2026-09-09 PASS 32 minutes
- 2026-09-10

### Error 2026-09-10T00:57:57+00:00
```
2026-09-10T00:57:57.6655870Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-10T00:57:57.6656332Z     resource_test.go:88: 
2026-09-10T00:57:57.6657443Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-10T00:57:57.6659674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-10T00:57:57.6660558Z         	Error:      	Received unexpected error:
2026-09-10T00:57:57.6661805Z         	            	sample dataset load 6aa1fffd4ab31ba345271d51 failed for cluster 6aa1fc8f5b8d9510e8900b11:test-acc-tf-c-8418123408420582243
2026-09-10T00:57:57.6662708Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-10T00:57:57.6663571Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T01:42:10+00:00
```
2026-09-11T01:42:10.0852110Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-11T01:42:10.0852588Z     resource_test.go:88: 
2026-09-11T01:42:10.0853745Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:86
2026-09-11T01:42:10.0856046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-11T01:42:10.0857004Z         	Error:      	Expected value not to be nil.
2026-09-11T01:42:10.0857633Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-11T01:42:10.0858295Z         	Messages:   	collection restore fixture is nil after init
2026-09-11T01:42:10.0858846Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:00:33+00:00
```
2026-09-11T07:00:33.3443251Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-11T07:00:33.3443717Z     resource_test.go:88: 
2026-09-11T07:00:33.3444719Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-11T07:00:33.3446766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-11T07:00:33.3447594Z         	Error:      	Received unexpected error:
2026-09-11T07:00:33.3448702Z         	            	sample dataset load 6aa3a627f7fcc4bbebf776e3 failed for cluster 6aa3a26ff7fcc4bbebf4b443:test-acc-tf-c-2068970145531856742
2026-09-11T07:00:33.3449644Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-11T07:00:33.3450228Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

- 2026-09-12 PASS 31 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 30 minutes
- 2026-09-15 PASS 30 minutes
- 2026-09-16

### Error 2026-09-16T01:37:05+00:00
```
2026-09-16T01:37:05.2747468Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-16T01:37:05.2749995Z === CONT  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-16T01:37:05.2751642Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-16T01:37:05.2752206Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:13:13.744279366Z, ProjectID: mongodbatlas_project.dest.id, Cluster name: test-acc-tf-c-5052428143381787540
2026-09-16T01:37:05.2761826Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-16T01:37:05.2762195Z     resource_test.go:98: Step 1/1 error: Error running apply: exit status 1
2026-09-16T01:37:05.2762424Z         
2026-09-16T01:37:05.2762609Z         Error: Error calling API in Create
2026-09-16T01:37:05.2762780Z         
2026-09-16T01:37:05.2763039Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-16T01:37:05.2763517Z           on terraform_plugin_test.tf line 49, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-16T01:37:05.2763978Z           49: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-16T01:37:05.2764209Z         
2026-09-16T01:37:05.2764696Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs
2026-09-16T01:37:05.2765359Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-16T01:37:05.2765709Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-16T01:37:05.2765952Z         BadRequestDetail: 
2026-09-16T01:37:05.2782083Z   
2026-09-16T01:37:05.2786925Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (1055.98s)
```

- 2026-09-17

### Error 2026-09-17T01:32:34+00:00
```
2026-09-17T01:32:34.2450170Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-17T01:32:34.2456872Z === CONT  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-17T01:32:34.2462144Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-17T01:32:34.2463513Z     pre_check.go:46: Time before creating cluster: 2026-09-17T01:08:57.960418863Z, ProjectID: mongodbatlas_project.dest.id, Cluster name: test-acc-tf-c-8703729288584300316
2026-09-17T01:32:34.2482382Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-17T01:32:34.2483360Z     resource_test.go:98: Step 1/1 error: Error running apply: exit status 1
2026-09-17T01:32:34.2483871Z         
2026-09-17T01:32:34.2484262Z         Error: Error calling API in Create
2026-09-17T01:32:34.2484656Z         
2026-09-17T01:32:34.2485223Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-17T01:32:34.2486466Z           on terraform_plugin_test.tf line 49, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-17T01:32:34.2487518Z           49: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-17T01:32:34.2488041Z         
2026-09-17T01:32:34.2489135Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs
2026-09-17T01:32:34.2490316Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-17T01:32:34.2491109Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-17T01:32:34.2491651Z         BadRequestDetail: 
2026-09-17T01:32:34.2509026Z   
2026-09-17T01:32:34.2519858Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (1085.53s)
```

- 2026-09-18 PASS 32 minutes
- 2026-09-19

### Error 2026-09-19T01:12:23+00:00
```
2026-09-19T01:12:23.8585130Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-19T01:12:23.8585683Z     resource_test.go:88: 
2026-09-19T01:12:23.8586931Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-19T01:12:23.8589547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-19T01:12:23.8590551Z         	Error:      	Received unexpected error:
2026-09-19T01:12:23.8591685Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:12:23.8592598Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-19T01:12:23.8593289Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 29 minutes
- 2026-09-22 PASS 31 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T01:01:09+00:00
```
2026-09-23T01:01:09.9831882Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-23T01:01:09.9832259Z     resource_test.go:88: 
2026-09-23T01:01:09.9833149Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T01:01:09.9834885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-23T01:01:09.9835583Z         	Error:      	Received unexpected error:
2026-09-23T01:01:09.9837162Z         	            	sample dataset load 6ab32318aad6f205c425e62b failed for cluster 6ab31feed27ba93df641b7f7:test-acc-tf-c-3819265740081751432: Target cluster does not have enough free space to import dataset
2026-09-23T01:01:09.9838072Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-23T01:01:09.9838554Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:42:35+00:00
```
2026-09-23T08:42:35.6570586Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-23T08:42:35.6571056Z     resource_test.go:88: 
2026-09-23T08:42:35.6572169Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T08:42:35.6574368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:88
2026-09-23T08:42:35.6575263Z         	Error:      	Received unexpected error:
2026-09-23T08:42:35.6577059Z         	            	sample dataset load 6ab39027f8a29abe235ba221 failed for cluster 6ab38d01aa941871fb3a5df3:test-acc-tf-c-7891289760318804086: Target cluster does not have enough free space to import dataset
2026-09-23T08:42:35.6578182Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes
2026-09-23T08:42:35.6578783Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes (0.00s)
```

- 2026-09-24 PASS 30 minutes
- 2026-09-25 PASS 31 minutes
- 2026-09-26 PASS 29 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 30 minutes
- 2026-09-29 PASS 31 minutes
- 2026-09-30 PASS 29 minutes
- 2026-10-01 PASS 27 minutes
- 2026-10-02 PASS 25 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 29 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 29 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 29 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 28 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 28 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 30 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
