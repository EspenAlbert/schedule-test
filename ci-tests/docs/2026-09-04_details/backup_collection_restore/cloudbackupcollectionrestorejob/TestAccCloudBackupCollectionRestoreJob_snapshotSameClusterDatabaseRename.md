# backup_collection_restore/cloudbackupcollectionrestorejob/TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename Test Details
# Found 10 TestRuns in dev, qa from 2026-08-27 to 2026-09-04 from master branch: 1 unique tests, PASS(x 8) FAIL(x 2)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:16](#error-2026-08-27t0216590000) |  | dev | 1624.09s
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
- 2026-08-27

### Error 2026-08-27T02:16:59+00:00
```
2026-08-27T02:16:59.0478552Z === RUN   TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-08-27T02:16:59.0480595Z     cloud_backup_collection_restore_fixture.go:82: Creating execution project (1): test-acc-tf-p-2548527571714927107
2026-08-27T02:16:59.0482259Z     cloud_backup_collection_restore_fixture.go:82: Creating execution cluster: test-acc-tf-c-2226589553303605341
2026-08-27T02:16:59.0483369Z 2026/08/27 01:47:03 [DEBUG] Waiting for state to become: [IDLE]
2026-08-27T02:16:59.0484096Z 2026/08/27 01:50:03 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0484782Z 2026/08/27 01:51:04 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0485434Z 2026/08/27 01:51:14 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0486089Z 2026/08/27 01:52:14 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0486740Z 2026/08/27 01:52:24 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0487731Z 2026/08/27 01:53:25 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0488392Z 2026/08/27 01:53:35 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0489045Z 2026/08/27 01:54:35 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0500887Z 2026/08/27 01:54:46 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0501604Z 2026/08/27 01:55:46 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0502254Z 2026/08/27 01:55:56 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0502907Z 2026/08/27 01:56:56 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0503556Z 2026/08/27 01:57:07 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0504180Z 2026/08/27 01:58:07 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0504817Z 2026/08/27 01:58:17 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0505451Z 2026/08/27 01:59:18 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0506096Z 2026/08/27 01:59:28 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0506799Z 2026/08/27 02:00:28 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-27T02:16:59.0507814Z 2026/08/27 02:01:29 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0508451Z 2026/08/27 02:02:29 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0509112Z 2026/08/27 02:02:39 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0509823Z 2026/08/27 02:03:40 [DEBUG] Waiting for state to become: [completed]
2026-08-27T02:16:59.0510551Z 2026/08/27 02:04:40 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0511577Z 2026/08/27 02:05:41 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0512213Z 2026/08/27 02:05:51 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0512936Z 2026/08/27 02:06:51 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0513581Z 2026/08/27 02:07:02 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0514216Z 2026/08/27 02:08:02 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0514855Z 2026/08/27 02:08:12 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0515539Z 2026/08/27 02:09:13 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0516164Z 2026/08/27 02:09:23 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0516800Z 2026/08/27 02:10:23 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0517675Z 2026/08/27 02:10:33 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0518300Z 2026/08/27 02:11:34 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0518931Z 2026/08/27 02:11:44 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0519573Z 2026/08/27 02:12:44 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0520208Z 2026/08/27 02:12:54 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0520844Z 2026/08/27 02:13:55 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0521485Z     resource_test.go:33: 
2026-08-27T02:16:59.0523500Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:84
2026-08-27T02:16:59.0528179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupcollectionrestorejob/resource_test.go:33
2026-08-27T02:16:59.0530005Z         	Error:      	Received unexpected error:
2026-08-27T02:16:59.0531694Z         	            	wait snapshot 6a8f9afc6af220b06a12263f: snapshot 6a8f9afc6af220b06a12263f failed
2026-08-27T02:16:59.0533155Z         	Test:       	TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename
2026-08-27T02:16:59.0534400Z --- FAIL: TestAccCloudBackupCollectionRestoreJob_snapshotSameClusterDatabaseRename (1624.93s)
```

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
- 2026-08-27 PASS 33 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 33 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
