# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 0.00s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev |  | 0.00s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 0.00s
[2026-09-16 01:37](#error-2026-09-16t0137050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs | dev | flaky_500 | 1267.06s
[2026-09-17 01:32](#error-2026-09-17t0132340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs | dev | flaky_500 | 1257.08s
[2026-09-19 01:12](#error-2026-09-19t0112230000) |  | dev | timeout | 0.00s
[2026-09-23 01:01](#error-2026-09-23t0101090000) |  | dev |  | 0.00s
[2026-09-23 08:42](#error-2026-09-23t0842350000) |  | dev |  | 0.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 minutes
- 2026-09-03 PASS 16 minutes
- 2026-09-04 PASS 17 minutes
- 2026-09-05 PASS 18 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 17 minutes
- 2026-09-08 PASS 19 minutes
- 2026-09-09 PASS 22 minutes
- 2026-09-10

### Error 2026-09-10T00:57:57+00:00
```
2026-09-10T00:57:57.6672327Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-10T00:57:57.6672792Z     resource_test.go:141: 
2026-09-10T00:57:57.6674433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-10T00:57:57.6676701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-10T00:57:57.6677596Z         	Error:      	Received unexpected error:
2026-09-10T00:57:57.6678835Z         	            	sample dataset load 6aa1fffd4ab31ba345271d51 failed for cluster 6aa1fc8f5b8d9510e8900b11:test-acc-tf-c-8418123408420582243
2026-09-10T00:57:57.6679743Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-10T00:57:57.6680349Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T01:42:10+00:00
```
2026-09-11T01:42:10.0867143Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-11T01:42:10.0867635Z     resource_test.go:141: 
2026-09-11T01:42:10.0868802Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:86
2026-09-11T01:42:10.0871655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-11T01:42:10.0872604Z         	Error:      	Expected value not to be nil.
2026-09-11T01:42:10.0873246Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-11T01:42:10.0873908Z         	Messages:   	collection restore fixture is nil after init
2026-09-11T01:42:10.0874455Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:00:33+00:00
```
2026-09-11T07:00:33.3458567Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-11T07:00:33.3459017Z     resource_test.go:141: 
2026-09-11T07:00:33.3460030Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-11T07:00:33.3463302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-11T07:00:33.3464137Z         	Error:      	Received unexpected error:
2026-09-11T07:00:33.3465251Z         	            	sample dataset load 6aa3a627f7fcc4bbebf776e3 failed for cluster 6aa3a26ff7fcc4bbebf4b443:test-acc-tf-c-2068970145531856742
2026-09-11T07:00:33.3466097Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-11T07:00:33.3466812Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

- 2026-09-12 PASS 17 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 minutes
- 2026-09-15 PASS 20 minutes
- 2026-09-16

### Error 2026-09-16T01:37:05+00:00
```
2026-09-16T01:37:05.2748703Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-16T01:37:05.2750305Z === CONT  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-16T01:37:05.2752674Z === NAME  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-16T01:37:05.2753220Z     pre_check.go:46: Time before creating cluster: 2026-09-16T01:13:18.744362464Z, ProjectID: 6aa9e5b4bb07cf48935dd66d, Cluster name: test-acc-tf-c-4066564869345389977
2026-09-16T01:37:05.2795583Z === NAME  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-16T01:37:05.2796018Z     resource_test.go:148: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-09-16T01:37:05.2796307Z         
2026-09-16T01:37:05.2796483Z         Error: Error calling API in Create
2026-09-16T01:37:05.2796653Z         
2026-09-16T01:37:05.2796909Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-16T01:37:05.2797383Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-16T01:37:05.2797853Z           44: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-16T01:37:05.2798104Z         
2026-09-16T01:37:05.2798680Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5b4bb07cf48935dd66d/clusters/test-acc-tf-c-5412932403781147489/collectionRestoreJobs
2026-09-16T01:37:05.2799196Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-16T01:37:05.2799543Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-16T01:37:05.2799787Z         BadRequestDetail: 
2026-09-16T01:37:05.2801868Z     panic.go:694: Error running post-test destroy, there may be dangling resources: no collection restore job targeting test-acc-tf-c-4066564869345389977
2026-09-16T01:37:05.2802337Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (1267.56s)
```

- 2026-09-17

### Error 2026-09-17T01:32:34+00:00
```
2026-09-17T01:32:34.2453079Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-17T01:32:34.2456147Z === CONT  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-17T01:32:34.2459860Z === NAME  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-17T01:32:34.2461104Z     pre_check.go:46: Time before creating cluster: 2026-09-17T01:08:52.958356576Z, ProjectID: 6aab374dbeed1dea3b81e9d7, Cluster name: test-acc-tf-c-466798853393000263
2026-09-17T01:32:34.2538056Z === NAME  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-17T01:32:34.2539038Z     resource_test.go:148: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-09-17T01:32:34.2539699Z         
2026-09-17T01:32:34.2540090Z         Error: Error calling API in Create
2026-09-17T01:32:34.2540467Z         
2026-09-17T01:32:34.2541031Z           with mongodbatlas_cloud_backup_collection_restore_job.test,
2026-09-17T01:32:34.2542142Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_cloud_backup_collection_restore_job" "test":
2026-09-17T01:32:34.2543311Z           44: 	resource "mongodbatlas_cloud_backup_collection_restore_job" "test" {
2026-09-17T01:32:34.2543843Z         
2026-09-17T01:32:34.2544939Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab374dbeed1dea3b81e9d7/clusters/test-acc-tf-c-2220569564621216650/collectionRestoreJobs
2026-09-17T01:32:34.2546123Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-09-17T01:32:34.2546922Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-09-17T01:32:34.2547467Z         BadRequestDetail: 
2026-09-17T01:32:34.2553840Z === NAME  TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-17T01:32:34.2555073Z     panic.go:694: Error running post-test destroy, there may be dangling resources: no collection restore job targeting test-acc-tf-c-466798853393000263
2026-09-17T01:32:34.2556143Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (1257.84s)
```

- 2026-09-18 PASS 17 minutes
- 2026-09-19

### Error 2026-09-19T01:12:23+00:00
```
2026-09-19T01:12:23.8602297Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-19T01:12:23.8602764Z     resource_test.go:141: 
2026-09-19T01:12:23.8603795Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-19T01:12:23.8605853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-19T01:12:23.8606679Z         	Error:      	Received unexpected error:
2026-09-19T01:12:23.8607708Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:12:23.8608493Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-19T01:12:23.8609070Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 19 minutes
- 2026-09-22 PASS 21 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T01:01:09+00:00
```
2026-09-23T01:01:09.9846350Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-23T01:01:09.9846719Z     resource_test.go:141: 
2026-09-23T01:01:09.9847600Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T01:01:09.9849335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-23T01:01:09.9850233Z         	Error:      	Received unexpected error:
2026-09-23T01:01:09.9851814Z         	            	sample dataset load 6ab32318aad6f205c425e62b failed for cluster 6ab31feed27ba93df641b7f7:test-acc-tf-c-3819265740081751432: Target cluster does not have enough free space to import dataset
2026-09-23T01:01:09.9852695Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-23T01:01:09.9853174Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:42:35+00:00
```
2026-09-23T08:42:35.6588408Z === RUN   TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-23T08:42:35.6588867Z     resource_test.go:141: 
2026-09-23T08:42:35.6590111Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:85
2026-09-23T08:42:35.6592335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:141
2026-09-23T08:42:35.6593218Z         	Error:      	Received unexpected error:
2026-09-23T08:42:35.6594996Z         	            	sample dataset load 6ab39027f8a29abe235ba221 failed for cluster 6ab38d01aa941871fb3a5df3:test-acc-tf-c-7891289760318804086: Target cluster does not have enough free space to import dataset
2026-09-23T08:42:35.6596128Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate
2026-09-23T08:42:35.6596729Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate (0.00s)
```

- 2026-09-24 PASS 22 minutes
- 2026-09-25 PASS 19 minutes
- 2026-09-26 PASS 17 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 17 minutes
- 2026-09-29 PASS 17 minutes
- 2026-09-30 PASS 17 minutes
- 2026-10-01 PASS 17 minutes
- 2026-10-02 PASS 17 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 16 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 15 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 16 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
