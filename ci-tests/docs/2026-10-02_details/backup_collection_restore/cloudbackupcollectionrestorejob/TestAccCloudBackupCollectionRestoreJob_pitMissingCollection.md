# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_pitMissingCollection Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 26) FAIL(x 9)
Success rate: 74.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 0.00s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev |  | 0.00s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 0.00s
[2026-09-14 01:45](#error-2026-09-14t0145580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa743e0bd98459162cc3d00/clusters/test-acc-tf-c-4371605843581264317/collectionRestoreJobs | dev | flaky_500 | 1220.04s
[2026-09-16 01:37](#error-2026-09-16t0137050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs | dev | flaky_500 | 1166.03s
[2026-09-17 01:32](#error-2026-09-17t0132340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs | dev | flaky_500 | 1192.02s
[2026-09-19 01:12](#error-2026-09-19t0112230000) |  | dev | timeout | 0.00s
[2026-09-23 01:01](#error-2026-09-23t0101090000) |  | dev |  | 0.00s
[2026-09-23 08:42](#error-2026-09-23t0842350000) |  | dev |  | 0.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 minutes
- 2026-09-03 PASS 27 minutes
- 2026-09-04 PASS 26 minutes
- 2026-09-05 PASS 27 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 27 minutes
- 2026-09-08 PASS 27 minutes
- 2026-09-09 PASS 28 minutes
- 2026-09-10

### Error 2026-09-10T00:57:57+00:00
```
2026-09-10T00:57:57.6664295Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-10T00:57:57.6664766Z     resource_test.go:122: 
2026-09-10T00:57:57.6665878Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-10T00:57:57.6668124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-10T00:57:57.6669015Z         	Error:      	Received unexpected error:
2026-09-10T00:57:57.6670266Z         	            	sample dataset load 6aa1fffd4ab31ba345271d51 failed for cluster 6aa1fc8f5b8d9510e8900b11:test-acc-tf-c-8418123408420582243
2026-09-10T00:57:57.6671160Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-10T00:57:57.6671746Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T01:42:10+00:00
```
2026-09-11T01:42:10.0859441Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-11T01:42:10.0859897Z     resource_test.go:122: 
2026-09-11T01:42:10.0861306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:86
2026-09-11T01:42:10.0863748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-11T01:42:10.0864714Z         	Error:      	Expected value not to be nil.
2026-09-11T01:42:10.0865348Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-11T01:42:10.0865987Z         	Messages:   	collection restore fixture is nil after init
2026-09-11T01:42:10.0866538Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:00:33+00:00
```
2026-09-11T07:00:33.3450788Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-11T07:00:33.3451489Z     resource_test.go:122: 
2026-09-11T07:00:33.3452646Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-11T07:00:33.3454632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-11T07:00:33.3455453Z         	Error:      	Received unexpected error:
2026-09-11T07:00:33.3456613Z         	            	sample dataset load 6aa3a627f7fcc4bbebf776e3 failed for cluster 6aa3a26ff7fcc4bbebf4b443:test-acc-tf-c-2068970145531856742
2026-09-11T07:00:33.3457444Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-11T07:00:33.3458007Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

- 2026-09-12 PASS 28 minutes
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T01:45:58+00:00
```
2026-09-14T01:45:58.0420005Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-14T01:45:58.0425431Z === CONT  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-14T01:45:58.0428803Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-14T01:45:58.0441440Z     pre_check.go:46: Time before creating cluster: 2026-09-14T01:13:32.4154427Z, ProjectID: 6aa743e0bd98459162cc3d00, Cluster name: test-acc-tf-c-4851015699228316767
2026-09-14T01:45:58.0485631Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-14T01:45:58.0487352Z     resource_test.go:128: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-09-14T01:45:58.0488308Z         
2026-09-14T01:45:58.0488853Z         Error: Error calling API in Create
2026-09-14T01:45:58.0489379Z         
2026-09-14T01:45:58.0490201Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-14T01:45:58.0491840Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-14T01:45:58.0493378Z           44: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-14T01:45:58.0494116Z         
2026-09-14T01:45:58.0495739Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa743e0bd98459162cc3d00/clusters/test-acc-tf-c-4371605843581264317/collectionRestoreJobs
2026-09-14T01:45:58.0497703Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-14T01:45:58.0498858Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-14T01:45:58.0499615Z         BadRequestDetail: 
2026-09-14T01:45:58.0501567Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (1220.41s)
```

- 2026-09-15 PASS 28 minutes
- 2026-09-16

### Error 2026-09-16T01:37:05+00:00
```
2026-09-16T01:37:05.2748094Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-16T01:37:05.2749683Z === CONT  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-16T01:37:05.2750610Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-16T01:37:05.2751176Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:13:08.742640871Z, ProjectID: 6aa9e5b4bb07cf48935dd66d, Cluster name: test-acc-tf-c-1564927148702147556
2026-09-16T01:37:05.2782287Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-16T01:37:05.2782729Z     resource_test.go:128: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-09-16T01:37:05.2783023Z         
2026-09-16T01:37:05.2783206Z         Error: Error calling API in Create
2026-09-16T01:37:05.2783383Z         
2026-09-16T01:37:05.2783764Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-16T01:37:05.2784246Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-16T01:37:05.2784702Z           44: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-16T01:37:05.2784930Z         
2026-09-16T01:37:05.2785563Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs
2026-09-16T01:37:05.2786083Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-16T01:37:05.2786429Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-16T01:37:05.2786670Z         BadRequestDetail: 
2026-09-16T01:37:05.2787277Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (1166.27s)
```

- 2026-09-17

### Error 2026-09-17T01:32:34+00:00
```
2026-09-17T01:32:34.2451560Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-17T01:32:34.2455471Z === CONT  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-17T01:32:34.2457546Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-17T01:32:34.2458801Z     pre_check.go:46: Time before creating cluster: 2026-09-17T01:08:47.955705198Z, ProjectID: 6aab374dbeed1dea3b81e9d7, Cluster name: test-acc-tf-c-4973295062600048752
2026-09-17T01:32:34.2509463Z === NAME  TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-17T01:32:34.2510443Z     resource_test.go:128: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-09-17T01:32:34.2511130Z         
2026-09-17T01:32:34.2511531Z         Error: Error calling API in Create
2026-09-17T01:32:34.2511961Z         
2026-09-17T01:32:34.2512525Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-17T01:32:34.2513733Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-17T01:32:34.2514784Z           44: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-17T01:32:34.2515310Z         
2026-09-17T01:32:34.2516401Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs
2026-09-17T01:32:34.2517603Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-17T01:32:34.2518722Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-17T01:32:34.2519282Z         BadRequestDetail: 
2026-09-17T01:32:34.2548019Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (1192.19s)
```

- 2026-09-18 PASS 28 minutes
- 2026-09-19

### Error 2026-09-19T01:12:23+00:00
```
2026-09-19T01:12:23.8593959Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-19T01:12:23.8594495Z     resource_test.go:122: 
2026-09-19T01:12:23.8595866Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-19T01:12:23.8598538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-19T01:12:23.8599452Z         	Error:      	Received unexpected error:
2026-09-19T01:12:23.8600407Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:12:23.8601152Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-19T01:12:23.8601730Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 28 minutes
- 2026-09-22 PASS 28 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T01:01:09+00:00
```
2026-09-23T01:01:09.9839021Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-23T01:01:09.9839392Z     resource_test.go:122: 
2026-09-23T01:01:09.9840605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T01:01:09.9842358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-23T01:01:09.9843062Z         	Error:      	Received unexpected error:
2026-09-23T01:01:09.9844536Z         	            	sample dataset load 6ab32318aad6f205c425e62b failed for cluster 6ab31feed27ba93df641b7f7:test-acc-tf-c-3819265740081751432: Target cluster does not have enough free space to import dataset
2026-09-23T01:01:09.9845423Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-23T01:01:09.9845887Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:42:35+00:00
```
2026-09-23T08:42:35.6579639Z === RUN   TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-23T08:42:35.6580094Z     resource_test.go:122: 
2026-09-23T08:42:35.6581221Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T08:42:35.6583448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:122
2026-09-23T08:42:35.6584341Z         	Error:      	Received unexpected error:
2026-09-23T08:42:35.6586121Z         	            	sample dataset load 6ab39027f8a29abe235ba221 failed for cluster 6ab38d01aa941871fb3a5df3:test-acc-tf-c-7891289760318804086: Target cluster does not have enough free space to import dataset
2026-09-23T08:42:35.6587239Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_pitMissingCollection
2026-09-23T08:42:35.6587826Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_pitMissingCollection (0.00s)
```

- 2026-09-24 PASS 29 minutes
- 2026-09-25 PASS 29 minutes
- 2026-09-26 PASS 29 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 28 minutes
- 2026-09-29 PASS 29 minutes
- 2026-09-30 PASS 26 minutes
- 2026-10-01 PASS 25 minutes
- 2026-10-02 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 26 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 27 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 27 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 26 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 28 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
