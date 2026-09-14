# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_createTimeoutPlanCreate Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 5) FAIL(x 3)
Success rate: 62.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:57](#error-2026-09-10t0057570000) |  | dev | 0.00s
[2026-09-11 01:42](#error-2026-09-11t0142100000) |  | dev | 0.00s
[2026-09-11 07:00](#error-2026-09-11t0700330000) |  | dev | 0.00s

### Timeline
- 2026-09-07: MISSING
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 15 minutes
- 2026-09-14: MISSING
