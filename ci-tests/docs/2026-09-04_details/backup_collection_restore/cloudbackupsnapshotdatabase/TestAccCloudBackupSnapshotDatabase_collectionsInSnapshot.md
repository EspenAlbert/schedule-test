# backup_collection_restore/cloudbackupsnapshotdatabase/TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot Test Details
# Found 10 TestRuns in dev, qa from 2026-08-27 to 2026-09-04 from master branch: 1 unique tests, PASS(x 8) FAIL(x 2)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 02:16](#error-2026-08-27t0216590000) |  | dev | 869.06s
[2026-08-28 03:27](#error-2026-08-28t0327490000) |  | dev | 939.10s

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
2026-08-27T02:16:59.0586400Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-08-27T02:16:59.0588046Z     cloud_backup_collection_restore_fixture.go:82: Creating execution project (1): test-acc-tf-p-5231527714706859168
2026-08-27T02:16:59.0589630Z     cloud_backup_collection_restore_fixture.go:82: Creating execution cluster: test-acc-tf-c-1862297914928990505
2026-08-27T02:16:59.0590658Z 2026/08/27 01:47:04 [DEBUG] Waiting for state to become: [IDLE]
2026-08-27T02:16:59.0591349Z 2026/08/27 01:50:05 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0592004Z 2026/08/27 01:51:05 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0592657Z 2026/08/27 01:51:15 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0593310Z 2026/08/27 01:52:16 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0593938Z 2026/08/27 01:52:26 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0594584Z 2026/08/27 01:53:26 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0595238Z 2026/08/27 01:53:36 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0595888Z 2026/08/27 01:54:37 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0596521Z 2026/08/27 01:54:47 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0597437Z 2026/08/27 01:55:47 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0598087Z 2026/08/27 01:55:58 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0598724Z 2026/08/27 01:56:58 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0599350Z 2026/08/27 01:57:08 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0600004Z 2026/08/27 01:58:09 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0600643Z 2026/08/27 01:58:19 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0601288Z 2026/08/27 01:59:19 [TRACE] Waiting 10s before next try
2026-08-27T02:16:59.0601917Z 2026/08/27 01:59:29 [TRACE] Waiting 1m0s before next try
2026-08-27T02:16:59.0602628Z 2026/08/27 02:00:30 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-27T02:16:59.0603950Z     cloud_backup_collection_restore_fixture.go:82: 
2026-08-27T02:16:59.0605837Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-27T02:16:59.0609955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:108
2026-08-27T02:16:59.0613905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:82
2026-08-27T02:16:59.0616131Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:78
2026-08-27T02:16:59.0617926Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:69
2026-08-27T02:16:59.0621137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:81
2026-08-27T02:16:59.0625088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-08-27T02:16:59.0626646Z         	Error:      	Received unexpected error:
2026-08-27T02:16:59.0628491Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-27T02:16:59.0629750Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-08-27T02:16:59.0630728Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (869.61s)
```

- 2026-08-28

### Error 2026-08-28T03:27:49+00:00
```
2026-08-28T03:27:49.2166664Z === RUN   TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-08-28T03:27:49.2167824Z     cloud_backup_collection_restore_fixture.go:82: Creating execution project (1): test-acc-tf-p-773272644954591981
2026-08-28T03:27:49.2169510Z     cloud_backup_collection_restore_fixture.go:82: Creating execution cluster: test-acc-tf-c-1362749704334784196
2026-08-28T03:27:49.2170130Z 2026/08/28 03:08:38 [DEBUG] Waiting for state to become: [IDLE]
2026-08-28T03:27:49.2170557Z 2026/08/28 03:11:39 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2170948Z 2026/08/28 03:12:39 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2171488Z 2026/08/28 03:12:49 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2171906Z 2026/08/28 03:13:50 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2172274Z 2026/08/28 03:14:00 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2172677Z 2026/08/28 03:15:00 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2173059Z 2026/08/28 03:15:10 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2173430Z 2026/08/28 03:16:11 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2173790Z 2026/08/28 03:16:21 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2174441Z 2026/08/28 03:17:21 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2174820Z 2026/08/28 03:17:31 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2175211Z 2026/08/28 03:18:32 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2175588Z 2026/08/28 03:18:42 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2175951Z 2026/08/28 03:19:42 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2176316Z 2026/08/28 03:19:53 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2176673Z 2026/08/28 03:20:53 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2177029Z 2026/08/28 03:21:03 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2177441Z 2026/08/28 03:22:04 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-28T03:27:49.2177862Z 2026/08/28 03:23:04 [TRACE] Waiting 1m0s before next try
2026-08-28T03:27:49.2178241Z 2026/08/28 03:24:05 [TRACE] Waiting 10s before next try
2026-08-28T03:27:49.2179114Z     cloud_backup_collection_restore_fixture.go:82: 
2026-08-28T03:27:49.2180187Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-28T03:27:49.2182229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:108
2026-08-28T03:27:49.2184337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:82
2026-08-28T03:27:49.2185547Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:78
2026-08-28T03:27:49.2186397Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/sync/once.go:69
2026-08-28T03:27:49.2188100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cloud_backup_collection_restore_fixture.go:81
2026-08-28T03:27:49.2190510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/cloudbackupsnapshotdatabase/data_source_test.go:24
2026-08-28T03:27:49.2191376Z         	Error:      	Received unexpected error:
2026-08-28T03:27:49.2192265Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-28T03:27:49.2195035Z         	Test:       	TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot
2026-08-28T03:27:49.2195858Z --- FAIL: TestAccCloudBackupSnapshotDatabase_collectionsInSnapshot (939.96s)
```

- 2026-08-29 PASS 24 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 28 minutes
- 2026-09-01 PASS 21 minutes
- 2026-09-02 PASS 23 minutes
- 2026-09-03 PASS 28 minutes
- 2026-09-04 PASS 31 minutes

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
- 2026-08-27 PASS 18 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 20 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
