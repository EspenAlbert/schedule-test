# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_pitDestClusterSuffixes Test Details
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 29 minutes
- 2026-09-14: MISSING
