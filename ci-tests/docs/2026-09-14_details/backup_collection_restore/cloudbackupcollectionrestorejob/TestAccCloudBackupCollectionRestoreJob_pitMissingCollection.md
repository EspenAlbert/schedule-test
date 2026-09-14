# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_pitMissingCollection Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL(x 4)
Success rate: 50.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev |  | 0.00s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev |  | 0.00s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev |  | 0.00s
[2026-09-14 01:45](#error-2026-09-14t0145580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6aa743e0bd98459162cc3d00/clusters/test-acc-tf-c-4371605843581264317/collectionRestoreJobs | dev | flaky_500 | 1220.04s

### Timeline
- 2026-09-07: MISSING
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


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
