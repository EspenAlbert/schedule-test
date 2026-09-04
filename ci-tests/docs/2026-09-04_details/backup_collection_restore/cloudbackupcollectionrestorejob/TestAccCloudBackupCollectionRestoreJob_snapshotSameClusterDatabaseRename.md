# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename Test Details
# Found 8 TestRuns in dev, qa from 2026-08-28 to 2026-09-04 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:24](#error-2026-08-28t0324150000) |  | dev | 941.00s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T03:24:15+00:00
```
2026-08-28T03:24:15.3010165Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-08-28T03:24:15.3011846Z     cloud_backup_collection_restore_fixture.go:82: Creating execution project (1): test-acc-tf-p-6088905679006959120
2026-08-28T03:24:15.3012788Z     cloud_backup_collection_restore_fixture.go:82: Creating execution cluster: test-acc-tf-c-4009969601288133940
2026-08-28T03:24:15.3013403Z 2026/08/28 03:08:38 [DEBUG] Waiting for state to become: [IDLE]
2026-08-28T03:24:15.3013838Z 2026/08/28 03:11:38 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3014242Z 2026/08/28 03:12:39 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3014617Z 2026/08/28 03:12:49 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3014985Z 2026/08/28 03:13:49 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3015345Z 2026/08/28 03:13:59 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3015705Z 2026/08/28 03:15:00 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3016068Z 2026/08/28 03:15:10 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3016431Z 2026/08/28 03:16:10 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3016793Z 2026/08/28 03:16:21 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3017146Z 2026/08/28 03:17:21 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3017498Z 2026/08/28 03:17:31 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3017853Z 2026/08/28 03:18:32 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3018209Z 2026/08/28 03:18:42 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3019054Z 2026/08/28 03:19:42 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3019464Z 2026/08/28 03:19:53 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3019839Z 2026/08/28 03:20:53 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3020202Z 2026/08/28 03:21:03 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3020562Z 2026/08/28 03:22:04 [TRACE] Waiting 10s before next try
2026-08-28T03:24:15.3020919Z 2026/08/28 03:22:14 [TRACE] Waiting 1m0s before next try
2026-08-28T03:24:15.3021332Z 2026/08/28 03:23:14 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-28T03:24:15.3021849Z     cloud_backup_collection_restore_fixture.go:82: 
2026-08-28T03:24:15.3022923Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-28T03:24:15.3025077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:108
2026-08-28T03:24:15.3027366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:82
2026-08-28T03:24:15.3028749Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:78
2026-08-28T03:24:15.3029633Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:69
2026-08-28T03:24:15.3031342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:81
2026-08-28T03:24:15.3033451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-08-28T03:24:15.3034340Z         	Error:      	Received unexpected error:
2026-08-28T03:24:15.3035227Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-28T03:24:15.3036049Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-08-28T03:24:15.3036766Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (941.04s)
```

- 2026-08-29 PASS 42 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 42 minutes
- 2026-09-01 PASS 38 minutes
- 2026-09-02 PASS 41 minutes
- 2026-09-03 PASS 38 minutes
- 2026-09-04 PASS 42 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 33 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
